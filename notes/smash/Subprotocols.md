
- **[[Smash Messaging Protocol]]**: defines the structure and content of the **[[IMProto Messages]]**, including encryption methods, message formats, and how they are transmitted over the network. The messages are decentralized and end-to-end encrypted, ensuring privacy and security between users. The [[Smash Messaging Protocol]] extends **the [[Signal Protocol]]**.

- **[[Signal Protocol]]**: ensures that only the intended recipient can decrypt and read messages. It provides key features such as **perfect forward secrecy** and message integrity using the **[[X3DH]] key exchange** and **Double Ratchet** algorithms, which safeguard communications even if encryption keys are compromised.

- **[[Messaging Endpoints]]**: Messaging Endpoints handle the relay and [[signaling]] for message exchanges in situations where direct P2P connections cannot yet be established. They temporarily store messages and enable the establishment of [[Signal Protocol]] sessions.

- **[[Smash Messaging Endpoint (SMEv1)]]** are the first supported protocol of [[Messaging Endpoints]] included in the [[Smash Protocol]].

- **Smash [[Badges]]** ([[Backlog]]): Smash badges are verifiable digital tokens that represent user achievements, endorsements, or group memberships. While still under development, badges will function similarly to non-fungible tokens (NFTs) but without blockchain reliance. Badges will also be crucial for building the **[[Web of Trust]]**, as they can be upvoted by peers to validate and certify a user's reputation or role.

- **[[WebRTC]]**: WebRTC powers real-time, encrypted peer-to-peer connections within the Smash ecosystem. It enables the transfer of data, audio, and video directly between users without requiring a centralized server. In cases where direct P2P is blocked due to network restrictions, WebRTC falls back on **[[STUN and TURN providers]]** servers or relies on [[Smash Messaging Endpoint (SMEv1)]]s for async message relays.

- **[[ATProto]]**: Smash is interoperable with **ATProto** (Authenticated Transfer Protocol), the underlying protocol for decentralized platforms like [[Bluesky]]. While ATProto focuses on public interactions and discourse, Smash complements it by enabling secure and private messaging. This dual approach provides users with a seamless experience for both private and public social functionalities.

- **[[DID]]** (W3C): Every user in the Smash ecosystem is represented by a **Decentralized Identifier (DID)**, specifically **[[DID (PLC)]]** as defined by [[ATProto]]. DIDs ensure that each user controls their identity across different platforms and neighborhoods. This decentralized identity model empowers users to own their social graph, profile data, and interactions without relying on a central authority.

- **[[IPFS]]** (TBD): (To be defined) IPFS (InterPlanetary File System) is used in Smash for decentralized content storage and distribution. It ensures that media and large files shared within Smash are securely stored across multiple nodes in the network.

- **[[Handles]]** ([[DNS]] handles, part of [[ATProto]]): [[Handles]] are user-friendly, human-readable identifiers that map to decentralized DIDs. Serving as usernames, [[Handles]] are registered under the Smash protocol and allow for easy sharing and discovery of user profiles and neighborhoods. The Smash Protocol specifies handles following the [[ATProto]] spec, i.e. recommending [[DNS]] handles.

- **Smash [[Backup and Restore]] (TBD)**: (To be defined) It will allow users to securely back up and restore their identities, social graphs, and data across devices. Each service provider could offer their own backup mechanism, fully interoperable with Smash, giving users control over where and how they back up their data, ensuring redundancy and availability across multiple platforms.
