PGP (Pretty Good Privacy) is an encryption system widely used to secure digital communications like emails and files. It uses a blend of **symmetric** and **asymmetric encryption** to ensure data confidentiality and authenticity.

1. **Asymmetric Encryption**: This involves two keys: a **public key** and a **private key**. The public key can be shared openly, and others use it to encrypt messages sent to you. Only the corresponding private key, which you keep secret, can decrypt those messages. This method ensures that even if someone intercepts the message, they can’t read it without your private key.
   
2. **Symmetric Encryption**: PGP also uses symmetric encryption for the actual message encryption, which is faster than asymmetric encryption. However, the key used for symmetric encryption is securely sent using asymmetric encryption (the recipient's public key). This approach combines the speed of symmetric encryption with the security of asymmetric encryption.

3. **Digital Signatures**: PGP supports **digital signatures**, ensuring message integrity. A sender can use their private key to sign a message, and the recipient can verify that the message hasn't been altered by using the sender’s public key. This feature also confirms that the message truly came from the claimed sender.

4. **[[Web of Trust]]**: Unlike a centralized certificate authority, PGP relies on a **decentralized trust model** called the Web of Trust. Users validate each other's public keys by signing them. Over time, a network of trust is established, similar to how personal recommendations work. This allows individuals to assess the authenticity of public keys without a central authority overseeing it.
