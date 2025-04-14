Resolving a [[DID]] means converting it into a [[DID Document]], using a method specific to the type of DID. The DID method defines how the identifier is created, updated, and retrieved. When a DID is queried, the corresponding DID Document is fetched, often from a **Verifiable Data Registry**, which can be a distributed ledger or other decentralized storage system.

For example, if you use a `did:web` ([[DID (web)]]) method, the DID Document would be retrieved from a specific web address (e.g., from a `.well-known/did.json` endpoint on a domain). If you use a blockchain-based method, the DID might be resolved through decentralized networks or ledgers.

DID Documents are fundamental for establishing trust in decentralized identity systems, as they contain the data needed to verify ownership and control over the DID.

This system enables a decentralized, user-controlled identity that works across various platforms and services without relying on a single central authority.
