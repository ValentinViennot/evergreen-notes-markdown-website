Core components are micro services which, together form the Smash Infrastructure.
This infrastructure is run and offered to [[Peer]]s by [[Providers]].

1. **[[Messaging Endpoints]]**: These servers handle relaying of [[signaling]] and asynchronous messages between users, functioning similarly to email servers by managing communication, whether users are online or offline.

2. **[[WebRTC]] help servers**: While peer-to-peer (P2P) communication is preferred, [[STUN and TURN providers]] help users connect when network traversal is needed.

3. **Decentralized CDN ([[IPFS]] Nodes)**: Larger encrypted content like media is stored and distributed through IPFS nodes, ensuring decentralized, scalable storage.

4. **[[DID]] endpoints** (acting as Identity Verification Servers) serve and protect decentralized identities, varying based on the [[DID methods]] in use. Whether using **.well-known web servers**, **PLC servers** (for enhanced security like key rotation and cross-verification), or other supported methods. Their primary function is to ensure users' identities remain secure, accessible, and interoperable across different platforms and neighborhoods.

5. **ATProto [[Personal Data Server (PDS)]]**: These servers host public posts and data following **[[ATProto]]**, allowing compatibility with apps like **[[Bluesky]]**.

6. **Neighborhood Admin Bot (NAB)**: Automated bots manage and curate communities, enabling like-minded users to connect within neighborhoods.

7. **DNS Servers**: Smash uses DNS-based handles for usernames, ensuring easy integration and identity management across the ecosystem.
   
8. **[[Backup and Restore]]** services. ([[Backlog]])
