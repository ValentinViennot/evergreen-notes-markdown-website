https://signal.org/docs/

The **Signal Protocol** is a cryptographic protocol that provides end-to-end encryption for secure messaging and calls. It was initially developed by Open Whisper Systems and has since been adopted by numerous messaging platforms, including WhatsApp, Signal, and Facebook Messenger, due to its strong security guarantees.

Key components of the Signal Protocol include:
- **[[X3DH]] (Extended Triple Diffie-Hellman)**: This key agreement protocol establishes a shared secret between two parties even if one is offline. It provides **forward secrecy**, meaning that even if encryption keys are compromised in the future, past communications remain secure.
- **Double Ratchet Algorithm**: This mechanism ensures that encryption keys are regularly updated with every message. It protects against any future key compromise and allows the protocol to handle out-of-order or missing messages.
- **Prekeys**: Signal uses [[One-Time PreKey (OTPK)]] to enable secure message exchange between users who aren't online at the same time, making it practical for asynchronous messaging.

The Signal Protocol is designed to ensure that messages can only be read by the intended recipient. Even if a server or intermediary stores the encrypted message, they cannot decrypt it. This makes the protocol particularly resilient against server compromises or surveillance.

It is widely used due to its robustness and proven security, making it the gold standard for encrypted communications today.
