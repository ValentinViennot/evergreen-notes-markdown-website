The *Poste Restante* feature provides a solution for enabling unregistered users to receive messages from registered users through [[Messaging Endpoints]] (ME). 

**Use Case:**

- **Alice** (unregistered) wants to communicate with **Bob** (registered via a ME).
- Normally, Alice could initiate a conversation with Bob, but Bob wouldn’t be able to reply.
- With *Poste Restante*, Bob’s ME (configured and potentially paid for) can now act as a temporary relay to allow Alice to receive his responses.

**How it Works:**

1. **Bob's Setup**: Bob has a configured ME that supports *Poste Restante*. He may have to opt-in or pay for this optional feature to handle messages from unregistered users. This feature is stated in his [[Peer Identity]].

```json
"service": [
    {
      "id": "#smash_sme1", 
      "type": "SmashMessagingEndpoint#PosteRestante",
      "serviceEndpoint": "wss://eu-we1.sme.smashchats.com/",
      "publicKeyMultibase": "2dkfvjvs93hfsj...", // PK Public Key
      "signatureBase64": "...anczdn==", // PK signed by IK
    }
]
```
   
2. **Temporary Connection**: Alice connects to Bob’s ME as a temporary session user. For the duration of this session, Alice can receive responses from Bob only. She is not required to have her own permanent ME registration.

The session is limited in scope, meaning Alice can only receive messages from Bob. The session remains active only for a predefined duration or until the conversation ends.

---

Let me know if you'd like any modifications or additional details!

[[Backlog]] [[TODO]]
