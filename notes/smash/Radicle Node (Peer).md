In [[Radicle]], a **node** represents **an individual participant in the peer-to-peer (P2P) network**. Radicle is decentralized, meaning there is no central server—nodes are the essential building blocks that communicate directly to exchange data, code, and updates.

Similar to [[BitTorrent]], nodes can be seeding or leeching content. Meaning they can either distribute or retrieve content, or both.

Some nodes are always-online servers dedicated to seeding content. They are [[Radicle Seeding Node|seeding nodes]].

Rad peers operate under a [[DID (key)]] identity that can be shown using the `rad self` command. This identity can be created using the `rad auth` command.

The `rad node` command shows the other nodes a peer is connected to. They can start their own by running `rad node start`.

The `rad seed` commands allow to define what content the node is seeding to which peers. This can be restricted to specific peers, for example using `rad seed --scope followed`.

The `rad ls -a` command shows all [[Radicle Repository|repositories]] a node is participating in, including as a seeder.

A peer can define preferred, neutral, or blocked interactions with other peers using `rad follow`, `rad unfollow` or `rad block` (and `rad unblock`) commands.

The `rad stats` and `rad config` both show interesting info about the current node.

The `rad sync` command allow to sync the node to the peers network.
