The **Smash Protocol** is a meta-protocol designed to build private, distributed, and decentralized social messaging applications by combining both existing technologies and custom implementations. It operates as a peer-to-peer (P2P) network, emphasizing privacy, data ownership, and decentralization. Smash is designed to support community-driven social platforms where users retain full control over their data, identity, and interactions.

> Note: The overall Smash meta protocol will likely evolve into something like '[[IMProto]]' as a more generic protocol for decentralized instant social messaging. The Smash Protocol would then focus on Smash-specifics interactions and features.

The protocol enables secure and encrypted communication, real-time interactions, decentralized identities, and user-controlled communities ([[Smash Neighborhoods (NBH)]]). By leveraging these technologies, Smash is an adaptable platform that can be used for both private messaging and broader decentralized social ecosystems.

- [[Executive summary]]
- [[Subprotocols]]
- [[Smash Concepts]]

> Note: This is all Work In Progress and quickly evolving.
> **Do not consider these Notes as actual specifications.**
> Proper—versioned—documentation is planned!

```mermaid
graph TD
    subgraph Peers["1. Peers"]
        Users
        NAB["Neighborhood Admin Bot (NAB)"]
    end

    subgraph Infrastructure["2. Providers"]
        PDS["ATProto Personal Data Servers (PDS)"]
        IPFS["IPFS Nodes"]
        SME["Messaging Endpoints (eg, SME)"]
    end

    subgraph Protocols["3. Core Protocols"]
        Signal["Signal Protocol"]
        IMProto["Smash Messaging Protocol"]
        DIDProtocol["Decentralized Identity (DID)"]
        WebRTC
    end

    subgraph TrustLayer["4. Trust Layer"]
        Badges
        Endorsements
        SocialGraph["Social Graph"]
    end

	Peers -->|Uniquely Identified by| DIDProtocol

    DIDProtocol -->|Resolve Keys and Endpoints| IMProto
    IMProto -->|Encrypt and Deliver Messages| SME
    SME -->|Relay to| Peers

    Peers -->|Issues| Badges
    NAB -->|Manages| SocialGraph

    Badges -->|Verified by| Endorsements
    Peers -->|Deliver| Endorsements

	Endorsements-->|Verify| SocialGraph

    PDS -->|Store User Data| Peers
    IPFS -->|Host Large Content| Peers

    Signal -->|Encryption Backbone| IMProto
    WebRTC -->|P2P Connection| IMProto

    %% Style Enhancements
    style NAB fill:#f0f7e6,stroke:#85b559,stroke-width:2px
    style Users fill:#e6f7ff,stroke:#0099cc,stroke-width:2px
    style Infrastructure fill:#f0f7e6,stroke:#85b559,stroke-width:2px
    style Protocols fill:#fff4e6,stroke:#ffaa33,stroke-width:2px
    style TrustLayer fill:#f7e6ff,stroke:#993399,stroke-width:2px
    style SocialGraph stroke-dasharray: 5, 5
    linkStyle default stroke:#666,stroke-width:1.5px,arrowhead:open

```


---

_"The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past." Tim Berners-Lee_
