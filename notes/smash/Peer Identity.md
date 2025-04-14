Each peer is identified by a **Decentralized Identifier ([[DID]])**. This enables cryptographically secure and self-sovereign identities that users can manage across different neighborhoods and services.

A DID resolves to a [[DID document]]. For [[Peer]]s, this document MUST define:

- Their unique and immutable [[DID]],
- One [[Identity Key (IK)]],
- One [[Exchange Key (EK)]],
- Any number of [[Messaging Endpoints]] and their associated [[PreKey (PK)]],
- Any claimed [[Handles]].

```json
{
  "@context": [
	"https://www.w3.org/ns/did/v1",
	"https://w3id.org/security/multikey/v1",
	"https://w3id.org/security/suites/ecdsa-2019/v1"
  ],
  "id": "did:example:123456789abcdefghi",
  "alsoKnownAs": [ "at://alice.test", "did:example:9876..." ],
  "verificationMethod": [
    {
      "id": "#smash_ik",
      "type": "Multikey",
      "publicKeyMultibase": "3ndhs93hfsj38hfo3..."  // IK Public Key
    }
  ],
  "authentication": [
    "#smash_ik"
  ],
  "keyAgreement": [
    {
      "id": "#smask_ek",
      "type": "Multikey",
      "publicKeyMultibase": "2dkfvjvs93hfsj3809Ol...",  // EK Public Key
      "signatureBase64": "anczdn==", // EK signed by IK
    }
  ],
  "service": [
    {
      "id": "#smash_sme1", 
      "type": "SmashMessagingEndpoint",
      "serviceEndpoint": "wss://eu-we1.sme.smashchats.com/",
      "publicKeyMultibase": "2dkfvjvs93hfsj...", // PK Public Key
      "signatureBase64": "...anczdn==", // PK signed by IK
    },
    {
      "id": "#smash_sme2",
      "type": "SmashMessagingEndpoint",
      "serviceEndpoint": "wss://eu-we3.sme.smashchats.com/",
      "publicKeyMultibase": "skfvnvjvs938Jdkefvn...", // PK Public Key
      "signatureBase64": "...qqs098n==", // PK signed by IK
    }
  ]
}
```

1. **@context**:
	- **`https://www.w3.org/ns/did/v1`**: Refers to the standard DID context from W3C, which defines the core structure for DID Documents.
	- **`https://w3id.org/security/multikey/v1`**: Includes support for multikey formats, enabling compatibility with different key types.
	- **`https://w3id.org/security/suites/ecdsa-2019/v1`**: Defines support for the ECDSA (Elliptic Curve Digital Signature Algorithm) suite used for secure cryptographic signing.
2. **id**:
	- The **DID** (Decentralized Identifier) of the entity. This DID uniquely identifies the peer in the decentralized network. In this example, the identifier is **`did:example:123456789abcdefghi`**.
3. **alsoKnownAs**:
	- This field links additional identifiers associated with the DID, such as a DNS handle or another DID. For example, **`at://alice.test`** could be the user's ATProto handle, and **`did:example:9876...`** another DID alias.
4. **verificationMethod**:
	- This section lists the public keys used for verification. The **`Multikey`** type supports multiple cryptographic algorithms. Here, **`#smash_ik`** refers to the Identity Key (IK), which is used for signing other keys and verifying the user’s identity.
5. **authentication**:
	- The **authentication** section specifies which key is used for authenticating the identity. The value **`#smash_ik`** points to the same key used for identity verification.
6. **keyAgreement**:
	- Defines the key used for establishing secure communication sessions. **`#smask_ek`** refers to the Exchange Key (EK), which is signed by the Identity Key (IK) to ensure its validity. This key is used for encrypting and decrypting data exchanged between users.
7. **service**:
	- This section lists the **Smash Messaging Endpoints (SME)**, which represent the secure messaging services that the peer can use. Each endpoint has:
    - **`id`**: Unique identifier for the service (e.g., **`#smash_sme1`**).
    - **`type`**: The type of service (here, **`SmashMessagingEndpoint`**).
    - **`serviceEndpoint`**: The WebSocket URL where the service is located (e.g., **`wss://eu-we1.sme.smashchats.com/`**).
    - **`publicKeyMultibase`**: The public key used by the endpoint, which is signed by the **Identity Key (IK)** for validation.

Note that the **`publicKeyMultibase`** is typically used for encoding cryptographic keys in a compact, multibase format. **`publicKeyJwk`**, it would look something like this:

```json
"publicKeyJwk": {
  "kty": "OKP",
  "crv": "X25519",
  "x": "TtAj5Xt...",
  "kid": "key-1"
}
```
