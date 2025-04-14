**IMProto Messages** represent the core data exchanged between participants in the [[IMProto]] / [[Smash Messaging Protocol]].

They encapsulate different types of interactions that are defined by their [[Message lexicon]]. The structure of these messages is standardized, ensuring smooth communication and handling within the network.

[[Smashchats]] implements a specific lexicon for social interactions such as joining a [[Smash Neighborhoods (NBH)]], discovering neighbors, or [[Smash or Pass]] another user.

Other interactions are more generally standardized at the [[IMProto]] level, such as chat messages, sending media, or a user profile ([[Profile]]).

Over the network, messages are transmitted in an encapsulated form, adding metadata for verification and ordering.

```typescript
interface IMProtoMessage {
    type: '<reversed dns name>';
    data: any;
    after: sha256String; // reference the previous message
}

interface EncapsulatedIMProtoMessage extends IMProtoMessage {
	sha256: string; // sha256({ IMProtoMessage, timestamp })
	timestamp: string; // ISO string
}
```

- **type**: [[Message lexicon]] defining the purpose and content of the message.
- **data**: Holds the core content of the message, which varies depending on [[Message lexicon]]. For example, `text` messages hold text strings, while `profile` messages contain objects.
- **sha256**: A SHA-256 hash identifying the message content, including the timestamp,
- **timestamp**: The time at which the message was sent, helping to maintain the correct order and prevent replay attacks (user-declared, **not to be trusted**).
- **after**: References the message that preceded this one by its `sha256`, allowing for message sequencing and history tracking.
