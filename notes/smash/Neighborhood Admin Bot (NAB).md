The NAB is an automated [[Peer]], executing specific protocol functions as defined in the [[Smash Messaging Protocol]]. It is implementation-independent, as long as it can exchange [[IMProto Messages]] with other [[Peer]]s on the network.

In order to function properly, the NAB...
- ... MUST implement the [[JOIN procedure]]
- ... SHOULD implement a [[DISCOVERY]]
- ... MAY utilize [[CONFIG]] messages to configure [[Providers]]
