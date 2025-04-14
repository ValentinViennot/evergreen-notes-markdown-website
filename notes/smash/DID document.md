https://www.w3.org/TR/did-core/#dfn-did-documents

A **DID Document** is a JSON file that contains the essential metadata associated with a **Decentralized Identifier ([[DID]])**, including cryptographic materials that enable interactions such as authentication and verification. Each DID resolves to its DID Document, which provides crucial information about the entity identified by the DID. 

A DID document contains:

1. **`id`**: The actual DID, which serves as the main identifier.
2. **Verification Methods**: Contains public keys and other cryptographic data that the DID subject (the owner of the DID) can use to authenticate themselves or interact securely with others.
3. **Controller**: The entity that controls the DID and can make changes to the document.
4. **Services**: Optionally, a DID document may include service endpoints, like URLs, that describe how others can interact with the subject (e.g., messaging or data sharing).
