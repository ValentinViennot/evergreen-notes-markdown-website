https://webrtc.org/

The **WebRTC protocol** (Web Real-Time Communication) is an open-source technology that enables real-time audio, video, and data communication directly between browsers and devices without the need for plugins or third-party software. It's primarily used for peer-to-peer (P2P) communication, ensuring low-latency, secure connections ideal for applications like video calls, live streaming, and file sharing.

Here’s how WebRTC works in a simplified form:

1. **[[Signaling]]**: Before any connection can be made, peers need to discover and communicate connection details, such as their IP addresses and supported codecs. WebRTC uses **SDP** (Session Description Protocol) for this exchange, though this process happens outside of WebRTC itself.

2. **Connection Establishment**: Once peers have exchanged the necessary information, **ICE** (Interactive Connectivity Establishment) attempts to connect them directly. If direct connection fails, **STUN** and **TURN** servers ([[STUN and TURN providers]]) are used to facilitate the connection by navigating NATs (network address translations) or firewalls.

3. **Securing the Connection**: After a connection is established, WebRTC uses **DTLS** (Datagram Transport Layer Security) and **SRTP** (Secure Real-Time Transport Protocol) to ensure that the communication remains encrypted and secure. This is crucial for protecting audio, video, and data streams.

4. **Media and Data Transmission**: Once secure, the peers use **RTP** (Real-Time Transport Protocol) for media (audio/video) and **SCTP** (Stream Control Transmission Protocol) for data transfer, allowing for flexible, low-latency communication.

WebRTC’s versatility, security, and native browser support make it a foundational protocol for modern real-time communication platforms like video conferencing and P2P file-sharing apps. Its reliance on existing infrastructure like STUN/TURN servers and use of UDP helps it maintain performance even in low-latency scenarios.
