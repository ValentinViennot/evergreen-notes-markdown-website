**STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT)** are protocols essential for establishing peer-to-peer (P2P) communication in WebRTC applications, particularly when network devices are behind firewalls or NATs (Network Address Translators).

- **STUN** servers are primarily used to help clients discover their public IP address and the type of NAT they are behind. Once the public IP is identified, peers can attempt to connect directly. STUN is lightweight and only used during connection setup, after which data is transferred directly between peers.

- **TURN** servers come into play when direct communication isn't possible, such as when both peers are behind restrictive NATs or firewalls. TURN relays the media traffic between peers, ensuring communication happens even when a direct connection is not feasible. However, this introduces higher latency and costs, as all traffic passes through the TURN server, making it a fallback solution.

In summary, STUN is used for most connections, while TURN serves as a backup when direct connections fail.

##### Example [[Providers]]: 

1. **Google STUN servers**: Google offers free STUN servers commonly used for WebRTC applications. Examples include `stun.l.google.com:19302`.
2. **Open Relay Project**: This service by Metered Video provides both free STUN and TURN capabilities with global infrastructure. It supports ports 80 and 443 for better firewall traversal.
3. **Xirsys**: Xirsys offers free STUN services and paid TURN servers. Their infrastructure is globally distributed to support low-latency connections.
4. **Twilio**: Twilio provides free STUN services alongside their paid TURN offering, ideal for building reliable P2P communication setups.
5. **STUN server by Viagenie**: This free STUN service (`numb.viagenie.ca:3478`) is widely used in WebRTC applications.
6. **rfc5766-turn-server**: An open-source TURN server that you can set up on your own infrastructure for free TURN services, ideal if you're looking to host your own solution.
7. **CoTURN (open-source)**: Another open-source TURN server that you can deploy on your own infrastructure to create a free TURN solution.
