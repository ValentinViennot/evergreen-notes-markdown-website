> Adapted to match the [[2key-ratchet library]] changes and using terms from the [[Peer Identity]]. Read more from the [[Signal Protocol]] [documentation](https://signal.org/docs/specifications/x3dh/).

### Extended Triple Diffie-Hellman (X3DH)

In adapting the **X3DH (Extended Triple Diffie-Hellman)** protocol for use with the **2key-ratchet** library and **Smash Peer Identity**, we must account for a few key changes. Specifically, **2key-ratchet** splits Signal's **Identity Key (IK)** into two distinct keys: **Identity Key (IK)** and **Exchange Key (EK)**. This distinction arises from the limitations and properties of the cryptographic algorithms used in WebCrypto. The **Identity Key (IK)** is used only for signing, while the **Exchange Key (EK)** plays the role of identity verification in the key exchange process.

#### Key Terms Overview

To ensure consistency with the **2key-ratchet** library and **Smash Peer Identity**, we use the following key concepts:

- **[[Identity Key (IK)]]**: A long-term asymmetric key pair, uniquely associated with a peer's **DID**. The **IK** is primarily used for identity verification and signing other keys.
- **[[Exchange Key (EK)]]**: A medium-term asymmetric key pair, signed by the **IK** and used for secure session initiation.
- **[[PreKey (PK)]]**: A short-to-medium term asymmetric key pair used for initiating communication. Linked to [[Messaging Endpoints]].
- **[[One-Time PreKey (OTPK)]]**: (OPTIONAL) A special PreKey used once, to ensure session uniqueness and increase security.
- [[Messaging Endpoints]] or **[[Smash Messaging Endpoint (SMEv1)]]**: A WebSocket [[signaling]] service where a peer’s PreKeys are stored and used for initiating secure communication asynchronously.

> In the first versions of the Smash Protocol, the OTPKs won't get used.
> They are a nice-to-have ([[Backlog]]) additional security layer, but don't provide much that can actually be enforced.
> [[Messaging Endpoints]], as any other [[Core components (Infrastructure)]], may or may not be trusted. If they are not, they might use a denial of service approach to downgrade the protocol and not serve any OTPK. We will therefore operate under this assumption for the first releases.
> In addition, the worst attack enabled by the lack of OTPK is the "replay" attack, that isn't an actual issue in the [[Smash Protocol]] (messages are anyway redundant).

#### 0. Context and Assumptions

The X3DH protocol involves three parties: **Alice**, **Bob**, and a **server**.

- **Alice** wants to send Bob some initial data using encryption, and also establish a shared secret key which may be used for bidirectional communication.
- **Bob** wants to allow parties like Alice to establish a shared key with him and send encrypted data. However, Bob might be offline when Alice attempts to do this. To enable this, Bob has a relationship with some server.
- The **server** can store messages from Alice to Bob which Bob can later retrieve. The server also lets Bob publish some data which the server will provide to parties like Alice. The amount of trust placed in the server should be **zero**.

In some systems the server role might be divided amongst multiple entities, but for simplicity we assume a single server that provides the above functions for Alice and Bob.

#### **1. Key Preparation by Bob**

Bob, the receiving peer, initially prepares the following keys before going offline:

- **Identity Key (IK_B)**: Bob’s unique identity key, tied to his DID and used to authenticate other keys.
- **Exchange Key (EK_B)**: A medium-term key, signed by Bob’s **IK** and stored in his DID document.
- **PreKey (PK_B)**: Bob generates multiple PreKeys to allow session initiation when offline. Each key is uniquely linked to one **Messaging Endpoint** connection.
- (optional) **One-Time PreKey (OTPK_B)**: Bob also generates many one-time-use keys to allow for extra security, ensuring no key reuse in session initiation.

The **IK_B**, **EK_B**, and **PK_B** are all available via the [[Peer Identity]] ([[DID document]]) for Alice (the initiating peer) to retrieve, once the [[DID]] has been [[Resolving a DID|resolved]].

(optional) The [[Messaging Endpoints]] might or might not have one **OTPK_B** available for Alice to retrieve. The Messaging Endpoint SHOULD only use each OTPK once and ensure enough OTPKs are stored before Bob goes offline.

#### **2. Session Initiation by Alice**

When Alice wishes to initiate a session with Bob, she retrieves the necessary cryptographic keys from Bob's DID Document after resolving his DID.

- **Identity Key (IK_B)**: Used for signing and providing cryptographic proof of other keys, though it is not directly involved in the X3DH calculations.
- **Exchange Key (EK_B)**: The primary key used by Alice to initiate the secure session, validated because it's signed by Bob's **IK_B**.
- **PreKey (PK_B)**: A key that is periodically rotated, linked to Bob's specific messaging endpoint to facilitate session starts even when Bob is offline.
- **One-Time PreKey (OTPK_B)** (optional): Enhances security by ensuring keys are used only once, fetched from the **Messaging Endpoint** if available.

Alice also generates her own ephemeral key:

- **Ephemeral Key (E_A)**: A temporary key generated by Alice for this session, ensuring the session's freshness and security.

#### **3. Key Agreement Using Diffie-Hellman Exchanges**

Alice then performs several Diffie-Hellman operations to compute a shared secret (**SK**):

1. **DH1 = DH(EK_A, PK_B)**
2. **DH2 = DH(E_A, EK_B)**
3. **DH3 = DH(E_A, PK_B)**

If the bundle does not contain a one-time prekey, she calculates:

**SK = KDF(DH1 || DH2 || DH3)**

If the bundle _does_ contain a one-time prekey, the calculation is modified to include an additional _DH_: **SK = KDF(DH1 || DH2 || DH3 || DH4)**, with:
4. (Optional) **DH4 = DH(E_A, OTPK_B)**

#### **4. Encryption and Message Dispatch**

After calculating **SK**, Alice deletes her ephemeral private key and the _DH_ outputs.

Alice then calculates an "associated data" byte sequence **AD** that contains identity information for both parties:

**AD = Encode(IKA) || Encode(IKB)**

Alice may optionally append additional information to **AD**, such as Alice and Bob's usernames, certificates, or other identifying information.

Alice then sends Bob an initial message containing:
- Alice's Identity Key _IK_A_ for signatures validation
- Alice's Exchange key _EK_A_
- Alice's ephemeral **public** key _E_A_
- Identifiers stating which of Bob's prekeys Alice used
- An initial ciphertext encrypted with some AEAD encryption scheme using **AD** as associated data and using an encryption key which is either **SK** or the output from some cryptographic PRF keyed by **SK**.

The initial ciphertext is typically the first message in some post-X3DH communication protocol. In other words, this ciphertext typically has two roles, serving as the first message within some post-X3DH protocol, and as part of Alice's X3DH initial message.

After sending this, Alice may continue using **SK** or keys derived from **SK** within the post-X3DH protocol for communication with Bob.

#### **5. Bob's Reception and Response**

Upon receiving the message from Alice, Bob:

- Extracts Alice's ephemeral key and the prekey identifiers from the received message.
- Performs the same Diffie-Hellman operations to derive the same shared secret and session keys.
- Uses these keys to decrypt the initial message.


1. **DH1 = DH(EK_A, PK_B)**
2. **DH2 = DH(E_A, EK_B)**
3. **DH3 = DH(E_A, PK_B)**
4. (Optional) **DH4 = DH(E_A, OTPK_B)**

**SK = KDF(DH1 || DH2 || DH3 || DH4)**

If decryption is successful, Bob confirms the session's security and can continue encrypted communication with Alice.

#### **Security Considerations**

##### Authentication

While the key exchange provides encryption, it doesn’t inherently verify the identity of the communicating parties. Without manual authentication (e.g., comparing public key fingerprints or scanning QR codes), users cannot be sure they’re communicating with the correct party. This makes it essential to validate identity through an out-of-band method. Failure to do so leaves the session vulnerable to **man-in-the-middle (MITM)** attacks, where an attacker could impersonate one of the parties.

##### Protocol Replay

If Bob's **One-Time PreKey (OTPK)** is not used, Alice’s initial message could be replayed to Bob multiple times. This might trick Bob into thinking Alice has sent the same message repeatedly. A post-X3DH ratcheting protocol should be used to quickly derive new encryption keys, ensuring that repeated messages result in fresh keys. Without this, Bob might reuse session keys, leading to potential security risks.

##### Replay and Key Reuse

If replay attacks occur, Bob might derive the same session key (**SK**) multiple times, creating key reuse across different sessions. To prevent this, Bob should always randomize the encryption key before sending data. If Bob reuses a key, it could expose sensitive information across sessions, compromising the security of the conversation. Implementing a **ratcheting protocol** can help avoid key reuse by generating fresh encryption keys for each message.

##### Deniability

X3DH provides **deniability**, meaning neither Alice nor Bob can produce cryptographic proof of their communication that could be verified by a third party. This is similar to the **Off-the-Record (OTR)** messaging protocol, which allows Alice and Bob to deny the content of their communication if private keys are compromised. However, if either party collaborates with a third party during the session, they could provide proof of communication. The lack of "online" deniability in asynchronous settings (like X3DH) means that deniability is not always guaranteed.

##### Signatures and Weak Forward Secrecy

Removing the prekey signature could lead to a **weak forward secrecy** attack. For example, a malicious server could present Alice with a fake prekey bundle, and later, by compromising Bob’s **Exchange Key (EK_B)**, the server could compute the session key (**SK**). Using signatures ensures that Alice can trust Bob’s keys and prevents impersonation attacks.

Additionally, replacing the DH-based mutual authentication with signatures from identity keys reduces deniability and increases message size, making it riskier if the ephemeral keys or signature algorithms are compromised.

##### Key Compromise

Compromise of a peer’s private keys is one of the most significant security risks. If Bob’s **Identity Key (IK_B)** is compromised, the attacker can impersonate Bob in future communications. Compromise of Bob’s **PreKey (PK_B)** or **One-Time PreKey (OTPK_B)** can weaken the security of past and future session keys (**SK**). 

To mitigate the risk:
- **One-Time PreKeys** should be deleted after use to ensure older session keys remain secure.
- Frequent rotation of **PreKeys** helps limit the damage from key compromise.

A ratcheting protocol that continuously refreshes keys provides additional layers of forward secrecy, minimizing long-term risks.

##### Server Trust

The messaging server plays a limited role but can still influence communication. A malicious server could refuse to deliver keys or replay messages, making the protocol vulnerable to denial-of-service attacks. 

**If Alice and Bob have authenticated each other’s public keys beforehand**, the server cannot compromise the key exchange. **However, it could cause forward secrecy to depend on the signed prekey’s lifetime if it refuses to hand out one-time prekeys**, reducing security.

##### Identity Binding Attacks

An **identity misbinding attack** occurs when an attacker, "Charlie", presents Bob’s identity key to Alice as if it belongs to Charlie. This tricks Alice into sending messages to Bob, thinking she is communicating with Charlie. To mitigate this, Alice and Bob can include more identifying information in their **associated data (AD)**, such as usernames, real names, or other identifiers. However, this introduces trade-offs with privacy and usability, as verifying identities with more information can compromise anonymity.
