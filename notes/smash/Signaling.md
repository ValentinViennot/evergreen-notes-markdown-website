**Signaling** is the process of exchanging information between [[Peer]]s to establish, manage, and terminate communication sessions. It is essential for setting up real-time encrypted connections, such as those required by the [[Signal Protocol]] and [[WebRTC]].

In the **[[Signal Protocol]]**, signaling is responsible for exchanging encryption keys.

In **[[WebRTC]]**, signaling is used to negotiate media capabilities, such as audio/video streams, and to exchange network details (like IP addresses) that allow peers to establish a direct peer-to-peer connection. Signaling sets up **SDP** (Session Description Protocol) offers and answers, as well as ICE candidates to navigate through NATs and firewalls.

Note that while _signaling_ is a required procedure, it happens *outside* the protocols themselves (like Signal or WebRTC), and typically relies on other transport mechanisms (e.g., WebSockets, HTTP) to carry signaling messages between peers. Read [[Messaging Endpoints]].
