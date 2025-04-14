https://atproto.com/specs/did
https://github.com/did-method-plc/did-method-plc

The **`did:plc`** method is a decentralized identifier method used within the [[ATProto]] ecosystem, particularly for platforms like [[Bluesky]]. The acronym "PLC" stands for **Placeholder DID Method** (and maybe Public Ledger Consortium??), but despite its name, it's designed for long-term use. The `did:plc` method is cryptographically secure, supports key rotation, and emphasizes strong consistency and recoverability.

1. **Decentralized Identity**: The [[DID]] is derived from the hash of the "genesis" (initial) operation, ensuring that each DID is unique and tied to its cryptographic operations.
2. **Key Rotation**: A core feature of `did:plc` is the ability to rotate keys, meaning users can update their cryptographic keys over time without changing their DID. This enhances both security and flexibility, allowing for account recovery if a key is compromised.
3. **Operations and Versioning**: Updates to a `did:plc` are serialized as operations (like key rotations or service changes), with each new operation referencing the previous one. These operations are hashed and signed to ensure integrity.
4. **Consistency and Recovery**: In the event of unauthorized changes (like a compromised key), the `did:plc` method provides a recovery mechanism where higher-authority keys can rewrite history within a 72-hour window, restoring the DID to its prior valid state.
5. **DID Document**: When [[Resolving a DID]], a `did:plc` generates a [[DID Document]] containing the current public keys, service endpoints, and any other metadata needed for secure communication.

The method is designed to be simple yet robust, ensuring that users have full control over their identity without relying on a central authority. It works in conjunction with AT Protocol services like the **Personal Data Server (PDS)**, which stores and manages user data.

### Example

```json
{
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/multikey/v1',
    'https://w3id.org/security/suites/ecdsa-2019/v1'
  ],
  id: 'did:plc:7iza6de2dwap2sbkpav7c6c6',
  alsoKnownAs: [ 'at://alice.test' ],
  verificationMethod: [
    {
      id: '#atproto',
      type: 'Multikey',
      controller: 'did:plc:7iza6de2dwap2sbkpav7c6c6',
      publicKeyMultibase: 'zDnaeh9v2RmcMo13Du2d6pjUf5bZwtauYxj3n9dYjw4EZUAR7'
    }
  ],
  service: [
    {
      id: '#atproto_pds',
      type: 'AtprotoPersonalDataServer',
      serviceEndpoint: 'https://example2.com'
    }
  ]
}
```
