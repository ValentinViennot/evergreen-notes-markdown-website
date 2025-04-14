In [[Radicle]], a **seeding node** is a peer dedicated to continuously hosting and sharing repositories. Like always-online servers in [[BitTorrent]], seeding nodes ensure that content is available to others, even if the original creator's node goes offline.

Seeding nodes can be run by organizations or individuals who want to provide persistent access to important code repositories. These nodes use seeding policies to specify which repositories they share and with whom. This helps decentralize content availability and improves redundancy across the Radicle network.


For [[Contributing to Smash]], we host a seeding node under:

- NID: `z6MkiXzPZSV6yx6wHSdSPNpVVytxauiLzhU1jG8sVmxdZkcn`
- Address: `rad-node.smashchats.com:8778`

In order to add it to your local configuration:

```sh
rad node connect z6MkiXzPZSV6yx6wHSdSPNpVVytxauiLzhU1jG8sVmxdZkcn@rad-node.smashchats.com:8776
```
