[https://github.com/PeculiarVentures/2key-ratchet/](https://github.com/PeculiarVentures/2key-ratchet/)

The **2key-ratchet** library introduces several key differences from the original **[[Signal Protocol]]** (specifically, the Double Ratchet and [[X3DH]] protocols).

### Cryptographic Algorithms

   - **2key-ratchet** uses **secp256r1** with **ECDSA** (Elliptic Curve Digital Signature Algorithm) and **ECDH** (Elliptic Curve Diffie-Hellman), whereas the Signal Protocol uses **ed25519** and **x25519** for signatures and key exchange.
   - The switch to secp256r1 is mainly due to the lack of native support for ed25519 and x25519 in **WebCrypto API** (used in browsers). This change provides several benefits:
     - Improved security by utilizing **native browser implementations**, which are more resistant to attacks like side-channel attacks (which exploit physical properties like timing or power consumption).
     - The ability to use **non-exportable keys** for identity and authentication, ensuring keys can remain secure within the browser.
     - **Increased performance** and better **battery life** in browser environments.
     - **Reduced bandwidth usage**, as the crypto functions are supported natively by browsers.

### Separate Keys for Signing and Encryption

   - In the **Signal Protocol**, ed25519 (based on EC-Schnorr signatures) handles both signing and encryption. However, secp256r1 (used in 2key-ratchet) does not have the same property of preventing potential leakage of key details. Therefore, **2key-ratchet** separates **signing keys** and **encryption keys**. The encryption key is signed by the identity key to ensure authenticity, addressing this potential vulnerability.

### Message Packing

   - **2key-ratchet** replaces the original **TLV (Type-Length-Value)** encoding used in Signal with **Protobufs** (Protocol Buffers) for message packing. This change simplifies the process of parsing messages and makes the code cleaner and easier to maintain.

### Uncompressed Keys

   - Due to concerns about patents, **2key-ratchet** uses **uncompressed keys** in its wire protocol. While this results in slightly larger key sizes, it avoids potential legal issues surrounding compressed keys.

These changes make **2key-ratchet** more suitable for environments like web browsers, where WebCrypto is relied upon, while still maintaining core security goals like forward secrecy and post-compromise security.

[https://github.com/PeculiarVentures/2key-ratchet/blob/master/DIFFERENCES.md](https://github.com/PeculiarVentures/2key-ratchet/blob/master/DIFFERENCES.md)