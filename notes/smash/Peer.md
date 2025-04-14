A Peer is the ultimate basic entity in the [[Smash Protocol]] / [[IMProto]], referring to any node participating in the network through a [[Peer Identity]] ([[DID]]).

Peers leverage their [[Peer Identity]] to encrypt and exchange data using the [[Smash Messaging Protocol]] and [[Signal Protocol]].

Peers establish their communication preferences using their [[Peer Identity]] through the corresponding [[DID document]]. This includes any configured [[Messaging Endpoints]].

```mermaid
graph
    %% Primary Elements
    Users["Users (Smash Peers)"]
    DID["Decentralized Identifiers (DID)"]
    SmashProfile["Smash Profile"]
    IdentityKey["Identity Key (IK)"]
    Badges["Badges"]
    Endorsements["Endorsements"]
    WebOfTrust["Web of Trust"]

    %% Supporting Components
    DIDDocument["DID Document"]
    Handles["Handles"]

    %% Relationships
    Users --> |Deliver to others | Endorsements
    Users -->|Own their | DID
    DID -->|Resolve to | DIDDocument
    DIDDocument --> IdentityKey
    DIDDocument --> Endpoints
    DIDDocument -->|Cross reference | Handles
    Handles -->|Resolve to| DID
    Users -->|Share their| SmashProfile
    SmashProfile -->|Display| Badges
    Badges -->|Verified via| Endorsements
    Endorsements -->|Enhance Credibility| SmashProfile
    SmashProfile -->|Attached to their| DID
    Users -->|Trust other| DID
    WebOfTrust --> DID
    DID --> WebOfTrust
    Badges -->|Form| WebOfTrust

```
