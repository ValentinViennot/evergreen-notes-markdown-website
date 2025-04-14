The Identity Key (IK) is used in the [[Peer Identity]].

- The **IK** is a **long-term**, **asymmetric** **key pair** (private and public keys) that uniquely identifies a user or peer. It is used to authenticate other shorter-lived keys, such as the [[Exchange Key (EK)]] and any [[PreKey (PK)]], during the key exchange process in the [[Signal Protocol]].
- The **IK** is critical for ensuring that peers are communicating with the correct counterpart, as it is used for verifying identity. When establishing a new session between two users, their respective Identity Keys help ensure that the communication is happening between the correct parties.
- Unlike other keys in the protocol (such as the **Session Keys**), the **IK** is not rotated as frequently. However, it is still protected through the overall security architecture of the protocol to prevent its compromise.

In the **Smash [[Peer Identity]]**:
- One **IK** is uniquely linked to a [[DID]] (ie, a [[Peer Identity]]).
- The **IK** is embedded into the **[[DID Document]]** as the user's unique cryptographic identifier. It is referenced in the **authentication** section of the DID document. It is used to sign key agreements and validate interactions between users, reinforcing the trust model and web of trust within **Smash Neighborhoods**.
