In **[[Radicle]]**, a **delegate** is a peer that is authoritative peer over a [[Radicle Repository]].

Delegates do not act "on behalf" of another user but rather as co-**maintainers**. This makes it possible for multiple peers to keep a repository active in the network. Delegates replicate changes, share updates, and maintain the repository, enhancing the resilience and decentralization of the system.

In practice, delegates are added by users using Radicle's CLI to update the [[Radicle Repository ID]]:

```sh
rad id update --title "adding X as delegate" --delegate <did>
```
