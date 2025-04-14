A **Radicle Repository** is a decentralized Git repository hosted within the [[Radicle]] peer-to-peer (P2P) network. It is a standard Git repository, tracking versions of code, but it exists across multiple nodes rather than on a central server.

Each repository can be cloned, updated, and seeded by peers, ensuring that no single point of failure exists. Peers interact with repositories using familiar Git commands, enhanced by Radicle-specific ones like `rad sync` to synchronize changes across the network. Repositories can be listed using `rad ls`.

Radicle repositories are secure, cryptographically signed, and decentralized, allowing contributors to collaborate without relying on a centralized platform (read about [[git signing commits with radicle DID]]). The following guide explains how to get started: https://radicle.xyz/guides/user.

Each repository has an **[[Radicle Repository ID|Identity]]**. 
