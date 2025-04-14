The **One-Time PreKey (OTPK)** is a special type of [[PreKey (PK)]] used to enhance security further by ensuring that keys are used only once.

**In the [[Signal Protocol]]**:
- An **OTPK** is a **one-time use** cryptographic key generated alongside regular PreKeys. When an **OTPK** is used to initiate a session, it provides additional protection by ensuring the key cannot be reused in future sessions, reducing the risk of attacks like replay attacks or key compromise.
- This mechanism adds a layer of privacy, as each session uses a unique key, and after the first use, the key is discarded, making it impossible to reuse.

**In relation to [[Smash Messaging Endpoint (SMEv1)]]s (Smash [[Messaging Endpoints]]):**
- **SMEs** serve as temporary storage locations for **One-Time PreKeys (OTPK)**. When a user initiates a secure session with another peer, the SME facilitates the retrieval of these keys, allowing for secure, end-to-end encrypted communication to begin.
- Even though **SMEs** store these keys, they do not have access to the content of the messages, maintaining the privacy and integrity of the communication. **SMEs** simply act as a facilitator, enabling the initial session establishment in a decentralized and asynchronous environment.
