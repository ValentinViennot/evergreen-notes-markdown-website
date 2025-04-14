
- **[[Peer]]**: A basic entity in the Smash ecosystem, referring to any node participating in the network through a [[Peer Identity]].

- **[[Peer Identity]]**: Each peer is identified by a **Decentralized Identifier ([[DID]])**. This enables cryptographically secure and self-sovereign identities that users can manage across different neighborhoods and services, ensuring full control over their identity and interactions.

- **Smash User**: Refers to a [[Peer]] operated by an end user, usually an individual.

- **[[Profile]]**: The collection of data tied to a user, including their cryptographic identity, endpoints, badges, and any published data.

- **[[Badges]]**: Verifiable cryptographic claims from a peer.

- **[[Endorsements]]**: Verifiable cryptographic assertion delivered from one peer to another in order to support the credibility of any resources (badge, profile, etc).

- **Endpoints**: A peer's selected [[Providers]] configuration.

- **[[Smash Neighborhoods (NBH)]]**: (abstract) Autonomous digital communities where users interact, with each neighborhood free to adopt its own rules and governance. Neighborhoods enable localized social experiences within the broader Smash ecosystem. In Smash terms, "Instagram", "Twitter", "[[Bluesky]]", "Snapchat", and any SubReddit could all be potential Neighborhoods.

- **Smash [[Neighborhood Admin Bot (NAB)]]**: An automated peer that handles neighborhood administration, including user verification, enforcing rules, and managing the social graph.

- **[[Smash or Pass]]**: A mechanism allowing users to add in favorites ([[Smashing]]) or ignore ([[Passing]]/[[Blocking]]) other users or content. These interactions build the social graph.

- **[[Social Graph]]**: A dynamic network representing the connections between all users. Partial social graphs are built relative to a NAB (Neighborhood) or to any peer (local graph).

- **[[Web of Trust]]**: A decentralized trust model where users can endorse and validate each other’s claims, creating a more secure and authentic interaction space.


---

Old note ([[TODO]] update/merge)
[[TODO]] update as a glossary

### [[Smash Neighborhoods (NBH)]]  
A digital community within the Smash ecosystem where users can connect, interact, and form relationships. Each neighborhood operates autonomously with its own governance rules and members.

### Smash Users 
Individuals using the Smash protocol, each with a sovereign identity and control over their data and connections across different neighborhoods.

### [[Peer Identity]]  
A unique, self-owned identifier that allows Smash Users to control and manage their personal data, profile, and interactions within the network.

### [[DID]]  
Decentralized Identifier. A self-sovereign digital identity standard that allows users to verify and manage their identity across decentralized systems without relying on a central authority.

### [[Messaging Endpoints]]  
The specific locations (servers or devices) where messages are sent or received between users, enabling direct, peer-to-peer communication within the Smash protocol.

### [[Smash Messaging Endpoint (SMEv1)]]  
Smash Messaging Endpoint. A secure point where user messaging activity happens. This may refer to devices, servers, or other nodes involved in communication.

### [[WebRTC]]  
A technology that allows for real-time peer-to-peer communication over the web, supporting video, voice, and data transfer, often used for direct interactions within the protocol.

### [[Handles]]  
User-friendly identifiers tied to decentralized domains, allowing Smash Users to easily identify and connect with one another using memorable names.

### [[Joining a Neighborhood]]  
The process of a user becoming a member of a neighborhood, involving verification, adherence to the neighborhood's rules, and integrating the user’s identity into the local network.

### [[Leaving a Neighborhood]]  
The action of a user exiting a neighborhood, removing their connections, and ceasing interactions within that specific digital community.

### [[Neighborhood Admin Bot (NAB)]]  
An automated system managing the administrative functions of a neighborhood, including verifying users, enforcing rules, and maintaining neighborhood governance.

### [[Smashing]]  
A user action representing approval or positive interaction, similar to a "like" or "endorsement" within the Smash ecosystem.

### [[Passing]]  
A neutral action where users choose not to engage or interact with certain content, users, or neighborhoods, without negative connotation.

### [[Blocking]]  
A function that allows users to prevent interaction with specific individuals or content, effectively creating a personal boundary in the network.

### [[Trusting]]  
A user action indicating trustworthiness of another user, contributing to the distributed web of trust within [[Smash Neighborhoods (NBH)]].

### [[Badges]]  
Achievements or statuses displayed on user profiles, representing accomplishments, roles, or trusted behavior within the community.

### [[Endorsements]]  
A positive acknowledgment of a badge, showing support or agreement with the role or achievement represented by the badge.

### [[Trust Tokens]]  
Special badges assigned to users who have demonstrated a high level of trust within the network, giving them increased credibility and influence.

### [[Signal Protocol]]  
A secure messaging protocol ensuring end-to-end encryption and privacy for communications within the Smash protocol.

### [[Signal Session]]  
An encrypted session established between two users using the Signal Protocol, ensuring secure, private communication.

### [[Profile]]  
A user’s public-facing identity within the Smash ecosystem, containing personal details, badges, media, and connections.

### [[Media]]  
Any form of content shared within the Smash network, including images, videos, and audio files, attached to user profiles or messages.

### [[IMProto Messages]]  
A text or media-based communication sent between users through the Smash protocol, encrypted and peer-to-peer.

### [[Identity Key (IK)]]  
A long-term cryptographic key that uniquely identifies a user and is used for secure communication initiation.

### [[Exchange Key (EK)]]  
A temporary key used to establish encrypted sessions between users, facilitating secure message exchanges.

### [[PreKey (PK)]]  
A cryptographic key pre-generated by a user for use in initiating secure sessions without both parties needing to be online at the same time.

### [[One-Time PreKey (OTPK)]]  
A single-use PreKey that ensures an additional layer of security when initiating a new encrypted communication session.

### [[ACK]]  
Acknowledgment signal used to confirm the receipt of a message or action within the protocol, ensuring reliable communication.

### [[Profile Media Gallery]]  
A collection of media (photos, videos, etc.) associated with a user's profile, viewable by other users within the network based on privacy settings.

### [[Profile Badges]]  
Badges visible on a user’s profile, representing their roles, achievements, or trust levels within neighborhoods.

### [[Trust Levels]]  
A ranking or score indicating the level of trust a user has earned within the community, based on interactions, behavior, and endorsements.

### [[Login with Smash]]  
A decentralized authentication mechanism that allows users to log into third-party apps or services using their Smash identity, without revealing personal data.

### [[SME Challenge]]  
A security challenge initiated by a Smash Messaging Endpoint to verify the authenticity or trustworthiness of another endpoint during communication.

### [[Poste Restante]]  
A temporary, secure messaging solution where a user can leave a message at an SME for another user to retrieve later.

### [[Resolving a DID]]  
The process of translating a decentralized identifier (DID) into actionable identity information or connections, allowing communication or verification.

### [[DID (key)]]  
A specific type of decentralized identifier backed by cryptographic keys, allowing secure identity verification in the network.

### [[DID (PLC)]]  
A variation of a DID that leverages a Public Ledger Consortium (PLC) for public, verifiable identity management across decentralized systems.

### [[PLC audit]]  
A review or verification process of a public ledger’s records, ensuring the integrity and validity of decentralized identifiers (DIDs) used in the network.

### [[Backup and Restore]]  
A system for securely backing up and restoring user data, identity keys, and session information, ensuring users can recover their data if needed.

### [[STUN and TURN providers]]  
Servers that help establish peer-to-peer connections by resolving network address translation (NAT) issues, enabling reliable WebRTC communication.

### [[Users Graph (or Grid)]]  
A visualization of connections between users within the Smash ecosystem, representing the web of trust and social interactions.

### [[Media Streams (Stories or Albums)]]  
A feature allowing users to share media content (photos, videos) in a streaming format, similar to stories or albums on traditional social media platforms.

### [[IPFS]] 

The **InterPlanetary File System (IPFS)** is a decentralized, peer-to-peer protocol designed to store and share files in a distributed way, eliminating the need for central servers. In the context of the Smash protocol, IPFS is used for **content storage and distribution**, ensuring that media and other large files shared within the network are securely stored and available across multiple nodes, without relying on any single point of failure.

### [[GDPR]]  
General Data Protection Regulation. The set of privacy and data protection laws in the European Union that Smash adheres to, ensuring user rights over their personal data. We recommend and expect them to be applied globally, regardless of lesser legal requirements.


--> which guarantees (high level requirements) does the protocol offer
([[TODO]] extract/summarize them and cross link with component/implementation)


---

_"The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past." Tim Berners-Lee_
