The Exchange Key (EK) is used in the [[Signal Protocol]], the [[IPFS]] protocol, and is part of the [[Peer Identity]].

In the **[[Signal Protocol]]**:
- The **Exchange Key (EK)** is a **medium-term**, **asymmetric key pair** used to securely establish encrypted communication sessions between users.
- The purpose of the **EK** is to facilitate secure key exchange for session initiation, enabling peers to establish an encrypted channel even if one of them is offline. 
- Once the session is established, the **EK** is typically discarded, and a more dynamic encryption mechanism (such as the Double Ratchet algorithm) takes over for continued communication.
- The **EK** is signed by the **[[Identity Key (IK)]]**, which ensures that it belongs to the correct user and can be trusted during the initial key exchange.

In the **Smash [[Peer Identity]]**:
- The **EK** is included in the **[[DID Document]]**, signed by the **IK** to ensure authenticity and is shared with other users during the session initiation process.
- The **EK** is shorter-lived than **IK** and, as such, should be rotated more often.

In the [[IPFS]]: [[TODO]]
