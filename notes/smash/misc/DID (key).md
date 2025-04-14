The **`did:key` method** is a lightweight, decentralized method for generating and [[Resolving a DID]] without needing any external ledger, blockchain, or verifiable data registry. It is designed to create a self-contained, cryptographically secure identifier based solely on the key material itself.

When you generate a `did:key`, the [[DID]] is directly derived from a cryptographic key pair, typically using a public key. The public key is encoded in a DID-compliant format and forms part of the identifier. The corresponding private key is kept by the user to sign or verify interactions.

A typical `did:key` might look like this:  
`did:key:z6MknuT....`

### Resolution

The `did:key` method uses the cryptographic material within the DID itself to resolve the [[DID Document]]. The public key is **embedded within the DID**, and when resolved, it generates a DID Document containing the public key and other necessary metadata, allowing for interactions like verification or encryption.

However, since `did:key` identifiers are not stored or anchored to any ledger, they are limited in scope. **They are primarily suitable for peer-to-peer interactions but not for use cases requiring a permanent or widely recognized identity.**

### Example

1. **Creating a `did:key` from a Public Key**:
   - Let's say you generate an **Ed25519** public/private key pair, which is commonly used for cryptographic operations.
   - The public key in its encoded form might look like this: `z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd`.
   - From this public key, you create the DID: `did:key:z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd`.
   - When resolved, this DID translates directly into a **DID Document** containing the public key and basic metadata that allows others to authenticate or encrypt messages to you.

   **DID Document Example**:
   ```json
   {
     "@context": "https://www.w3.org/ns/did/v1",
     "id": "did:key:z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd",
     "verificationMethod": [{
       "id": "did:key:z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd#z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd",
       "type": "Ed25519VerificationKey2018",
       "controller": "did:key:z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd",
       "publicKeyBase58": "z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd"
     }]
   }
   ```

2. **How the Resolution Works**:
   - The DID itself (`did:key:z6MknuTzv8uwXYe8Ggm14db1HeN4xR7dhsbwNq3CEKzzn2Nd`) contains the cryptographic material that directly maps to the DID Document.
   - When someone resolves this DID, they retrieve the public key (`publicKeyBase58`) that can be used for tasks such as verifying a signature or encrypting data for the owner of this DID.
   - This DID Document doesn't rely on a registry or external service—it's entirely derived from the key itself, ensuring privacy and decentralization.

3. **Verification Use Case**:
   - Imagine you want to sign a document and prove that it was you who signed it. You use your private key to sign the document.
   - Someone else can resolve your `did:key`, retrieve your public key from the DID Document, and verify the signature against the public key provided in your DID Document.
   - No external service is required—the verification happens directly based on the `did:key`'s cryptographic material.

4. **Interaction Use Case**:
   - If another person wants to send you an encrypted message, they can resolve your `did:key` to get your public key from the DID Document. 
   - They then encrypt the message using your public key, ensuring that only you, the holder of the private key, can decrypt the message.
