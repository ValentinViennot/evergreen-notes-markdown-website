> renaming to [[IMProto]]

The Smash Messaging Protocol defines a set of procedures, data structures, and exchanges in order for two [[Peer|Peers]] to exchange data over the network in an encrypted manner.

The underlying communications are encrypted using the [[2key-ratchet library]] implementation of the [[Signal Protocol]].

```mermaid
graph TD

    %% Initial Setup
    BobHandle["Bob's Handle: bob.neighborhood.com"]
    BobHandle --> Bob["Bob (Smash Peer)"]

    START["1. Start Interaction"] --> Alice["Alice (Smash Peer)"]
    Alice -->|"Next (1)"| Talk["Alice wants to talk to Bob"]
    Talk -->|Known as| BobHandle
    
    Talk --> ResolveDNS

    %% Session Setup
    subgraph Setup["Session Setup"]
        ResolveDNS["Resolve Bob's DNS Handle to DID (AT Proto)"]
        ResolveDNS --> ResolveDID["Resolve Bob's DID Document"]
        ResolveDID --> ValidateDID["Validate DID Document + Handles"]
        ValidateDID --> ExtractKeys
        ExtractKeys["Extract IK, EK, Endpoints (URL + PK)"]
        ExtractKeys --> SignalSession["Initiate Signal Session"]
    end

    SignalSession --> EncryptInit

    %% Initial Message Exchange
    subgraph InitMessageExchange["Initial Message Exchange"]
        EncryptInit["Encrypt Initial Message using Signal Session"]
        EncryptInit --> InitMessage
        InitMessage["Initial Message: Profile + DID + WebRTC Offer"]
        InitMessage --> DeliverInit
        DeliverInit["Deliver Initial Message to Bob's Endpoints"]
    end

	DeliverInit --> GotoTwo
	GotoTwo["Go to (2)"]

    %% Messaging Endpoint
    BobNext["2"] --> Bob
    Bob -->|Poll| Fetch

    subgraph Fetch["Messaging Endpoint (Bob Fetches)"]
        FetchMessage["Fetch Messages from Endpoints"]
        FetchMessage --> IfNewSession["Is it a new session?"]
        IfNewSession -->|Yes| DecryptInit["Decrypt Initial Message"]
        DecryptInit --> ValidateSession
        ValidateSession["Validate Signal Session Consistency"]
    end


	ValidateSession --> P2P
	IfNewSession -->|No| P2P

    %% Peer-to-Peer Session Establishment
    subgraph P2P["Peer-to-Peer Session Establishment"]
        IfRTCOffer["Does Message Contain WebRTC Offer/Response?"]
        IfRTCOffer -->|Offer| GenerateResponse
        GenerateResponse["Generate WebRTC Response"]
        GenerateResponse --> IfOverP2P["Is Communication Over P2P?"]
        IfRTCOffer -->|Response| StartP2P["Attempt P2P Connection"]
        IfRTCOffer -->|No Offer| Fallback["Fallback to Endpoints"]
        IfOverP2P -->|Yes| Exchange["Exchange Messages"]
        IfOverP2P -->|No| GenerateOffer["Generate WebRTC Offer"]
        GenerateOffer --> Fallback
        Fallback --> Exchange
        StartP2P --> IfOverP2P
    end

    Alice -->|"Poll (3)"| Fetch

    %% Exchange and Session Reset
    Exchange --> Reset

    subgraph Reset["Session Reset"]
        SessionExpiry["Session Time > TTL or Context Loss"]
        SessionExpiry -->|Triggered| ResetMessage
        ResetMessage["Send Session Reset Message"]
        ResetMessage --> ResolveDID
    end

    %% Styles for Readability
    style Setup fill:#e6ffe6,stroke:#0a0,stroke-width:2px
    style InitMessageExchange fill:#ffe6cc,stroke:#ff6600,stroke-width:2px
    style Fetch fill:#e6f7ff,stroke:#0099cc,stroke-width:2px
    style P2P fill:#e6e6fa,stroke:#6a5acd,stroke-width:2px
    style Reset fill:#ffe6e6,stroke:#f00,stroke-width:2px
    style SignalSession stroke-dasharray: 5, 5

```
