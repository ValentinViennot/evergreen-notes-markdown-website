The Smash Messaging Session Initialization is the procedure that establishes an encrypted channel between Alice and Bob to further exchange [[IMProto Messages]].

It comprises the [[Signal Protocol]] encryption session initialization.

> If a session already exists between Alice and Bob, it should be used instead. 

1. Alice wants to send a message to Bob, knowing Bob's [[Handles]]. Alice MUST resolve Bob's Handle using the appropriate method (e.g., [[DNS]]/[[ATProto]]).
2. Alice MUST [[Resolving a DID|resolve the DID]] into a [[DID document]] containing Bob's [[Peer Identity]] (including Handle cross-verification!).
3. Alice now know Bob's [[Identity Key (IK)]], [[Exchange Key (EK)]], [[Messaging Endpoints]] and their associated [[PreKey (PK)]]. With this information, Alice MUST proceed to initializing the [[Signal Protocol]] session ([[X3DH]]).
4. Within this encrypted [[Signal Session]], Alice MUST now send her initial [[Profile]] state and subscribe Bob to any further changes until the session is closed: this includes her [[DID document]] (including [[Messaging Endpoints]]).
5. Alice MAY decide to start a [[HEARTBEAT procedure]] with Bob to keep him informed of her online status.
6. Alice SHOULD send a [[WebRTC Offer]] using appropriate privacy/masking parameters.
7. A copy of all queued message MUST be sent through the newly-opened channel.
8. Until a _[[delivered ACK]]_ status event is received, messages are considered _sending_ on the client side (**this means that _sending_ messages MAY still have been received by a recipient**).
9. If no _[[delivered ACK]]_ is received after some time, the client MAY decide to re-try sending the message using a backoff strategy. 

> **NOTE (4):** the DID won't be subscribable in a first version. Instead, any change to the DID will trigger a [[session reset]]. This is a simplified approach as DID changes need to be processed carefully and in using a complex authenticated approach.

> NOTE (8): a proper network failure may result in a message 'failure to send' ACK. However, in most cases, it's unreliable to rely on the ACK to assert a message hasn't been sent (ie, the [[Messaging Endpoints]] might be lying or failing to comply).
