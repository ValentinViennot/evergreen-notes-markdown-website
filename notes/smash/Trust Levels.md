Trust Levels define the degree of interaction and information sharing between [[Peer]]s. They are incremental and cumulative, meaning higher levels inherit permissions from the lower ones, adding more privileges. Here’s a breakdown of the levels:

- **Blocked**: The user has explicitly blocked the peer ([[Blocking]]), preventing any form of interaction. The blocked peer is hidden from the user's view, and no communication should be possible.
  
- **Passed/Unknown**: This is the default state for any other peer. Interaction is minimal, and no automated actions (like profile sharing or direct communication) take place.

- **Neighbor**: This level is assigned when both users are part of any of the same [[Smash Neighborhoods (NBH)]]. It establishes a baseline of interaction, where public profile information and neighborhood-related data may be shared ([[default config]]).

- **Chatted**: This level applies when users have had direct communication or interactions. More interactions may be automated depending on user-defined privacy settings, including P2P connection establishment, profile updates, and heartbeats to maintain activity status.

- **Smashed**: A higher trust level indicating a closer relationship, akin to adding someone to favorites ([[Smashing]]). According to a user’s privacy settings, more profile data is shared, P2P sessions may allow more direct communication (e.g., IP addresses are not hidden), and interactions become more fluid.

- **Smashed+Trusted**: This is the highest trust level. A [[trusted peer]] has been explicitly marked as such. They may gain access to even more sensitive information, depending on the user's privacy configuration.

These levels allow users to fine-tune their relationships and interactions, ensuring privacy and control over how much information is shared and with whom.

> Note ([[Backlog]]): we propose the addition of User lists, akin to former Google Plus circles, that would enable a user to tweak this automated configuration more granularly or manually.
