## **Smash Protocol Overview**

The **Smash Protocol** is an open-source, decentralized communication protocol designed to empower users with full control over their data, privacy, and social interactions. It aims to reinvent the web for communities by providing a platform that is free, safe, private, and inclusive, fostering meaningful connections without centralized authority.

## **Core Principles and Values**

### **Freedom**

- **Data Ownership**: Users own their data and control their connections.
- **Open Source**: Built on open protocols and applications.
- **Interoperability**: Move freely across platforms and neighborhoods.

### **Privacy**

- **Identity Control**: Full control over identity and data.
- **Encryption**: All communications are always encrypted.
- **Peer-to-Peer**: Direct transactions without intermediaries.

### **Safety**

- **Community Trust**: Built on decentralized trust models.
- **Respectful Spaces**: Encourages meaningful and respectful interactions.
- **Rights Protection**: Freedom ends where others' rights begin.

### **Quality**

- **Decentralized Identity**: Users manage their own identities.
- **Web of Trust**: Reputation built through peer endorsements.
- **Content Curation**: Users have control over their experience.

### **Inclusivity**

- **Open to All**: Everyone is welcome, no centralized gatekeepers.
- **Adaptable**: Can be tailored to fit various community needs.
- **Collective Ownership**: A collective effort owned by contributors and users.

## **Key Concepts**

### **Peer Identity**

- **Decentralized Identifiers (DIDs)**: Each user has a unique DID ensuring self-sovereign identity.
- **DID Documents**: Contain public keys and service endpoints for secure interactions.

### **Smash Peers**

- **Participants**: Any node or user in the Smash network.
- **Interaction**: Peers communicate using encrypted channels.

### **Smash Neighborhoods (NBH)**

- **Digital Communities**: Groups of users with shared interests.
- **Autonomous**: Each neighborhood sets its own rules and governance.
- **Identified by Handles**: Use of memorable names for easy identification.

### **Neighborhood Admin Bot (NAB)**

- **Automated Administration**: Manages verification, rules enforcement, and governance.
- **Trustworthy Entity**: Can issue Trust Tokens, enhancing user reputation.

### **Trust Tokens**

- **Type of Endorsement**: Signifies trust in another peer's identity.
- **Web of Trust**: Fundamental to building decentralized trust networks.
- **Selective Display**: Users control which Trust Tokens they share publicly.

### **Badges and Endorsements**

- **Badges**: Verifiable tokens representing achievements or claims.
- **Endorsements**: Peers can endorse badges, strengthening their validity.
- **Privacy Respecting**: Users choose which badges to display.

### **Trust Levels**

- **Blocked**: No interaction allowed.
- **Passed/Unknown**: Default state with minimal interaction.
- **Neighbor**: Shared neighborhood membership.
- **Chatted**: Established communication has occurred.
- **Smashed**: Higher trust level, similar to adding to favorites.
- **Smashed + Trusted**: Highest trust level with trusted peers.

## **Technical Components**

### **Encryption and Security**

- **Signal Protocol**: Ensures end-to-end encryption for messages.
- **Identity Key (IK)**: Long-term key pair unique to a user.
- **Exchange Key (EK)**: Medium-term key for establishing secure sessions.
- **PreKeys and One-Time PreKeys (PK, OTPK)**: Facilitate secure communication initiation.

### **Messaging Endpoints**

- **SMEv1**: Standard for managing signaling and message relay.
- **Asynchronous Messaging**: Handles communication when peers are offline.
- **Untrusted Intermediaries**: Designed to operate without needing to trust the intermediary.

### **Handles**

- **User-Friendly Identifiers**: Memorable names tied to DIDs.
- **DNS-Based**: Leverages existing domain name infrastructure.
- **Resolution**: Mapped to DIDs for secure identification.

### **WebRTC**

- **Real-Time Communication**: Enables direct peer-to-peer connections.
- **Fallback Mechanisms**: Uses STUN and TURN servers when direct connection isn't possible.

### **Interoperability with ATProto**

- **Compatibility**: Designed to work with ATProto and platforms like Bluesky.
- **Shared Standards**: Utilizes common protocols for identity and communication.

## **User Actions**

### **Smashing**

- **Adding to Favorites**: Indicates a higher trust level.
- **Not Communicated Directly**: The other peer isn't notified explicitly.
- **Processed by NAB**: May be shared with Neighborhood Admin Bot for community curation.

### **Passing**

- **Reducing Interaction**: Similar to muting a user.
- **No Direct Notification**: The passed user isn't informed.
- **Local Action**: Helps curate the user's experience.

### **Blocking**

- **Prevent Interaction**: Stops all communications with the blocked user.
- **Privacy Protection**: Ensures the user isn't contacted by unwanted peers.

## **Web of Trust**

- **Decentralized Trust Model**: Users build trust networks through endorsements.
- **Peer Validation**: Trust is established by validating each other's identities and actions.
- **Trust Propagation**: Trust can extend through connections, enhancing network reliability.

## **How Smash Works**

1. **Decentralized Identities**: Users create DIDs, controlling their own identities.
2. **Encrypted Communication**: Messages are secured using the Signal Protocol.
3. **Neighborhoods**: Users join communities (NBHs) that align with their interests.
4. **Trust Building**: Through interactions, endorsements, and Trust Tokens.
5. **Data Ownership**: Users retain control over their data and how it's shared.
6. **Interoperability**: Compatible with other protocols and platforms, promoting a broader ecosystem.

## **Contributing to Smash**

- **Users**: Test features, provide feedback, and help shape development.
- **Contributors**: UI/UX designers, developers, and security experts are welcome.
- **Sponsors**: Financial contributions support server costs and development efforts.
- **Contact**: Reach out via email at `iwanttocontribute@smashchats.com`.

## **Conclusion**

The Smash Protocol represents a significant shift toward user empowerment in digital communications. By decentralizing identities, ensuring privacy through encryption, and building a web of trust, it creates a platform where users have full control over their social interactions. It's a collective effort rooted in strong values, aiming to foster communities that are free, safe, private, and inclusive.
