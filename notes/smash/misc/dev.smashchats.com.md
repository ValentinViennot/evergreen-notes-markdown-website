
**Smash or Pass: Building a Free Internet for Communities**

A safe, private, and inclusive 1:N social app for meaningful connections.


**What is Smashchat?**
Smashchat is an open-source, decentralized, and private social messaging app designed for communities. It is entirely distributed, ensuring users have full control over their data, privacy, and social interactions.

**Why Smashchat?**
- **Privacy and Control**: Unlike centralized private messaging and social networking apps, Smashchat offers full privacy and data is exclusively owned and shared by users themselves.
- **Decentralized Architecture**: Our protocol is designed to be fully decentralized and distributed, ensuring no single point of failure and superior resiliency. It also ensures no single platform can ban you.
- **Social Features**: Integrated social functionalities allow you to discover and connect with users within your communities, enhancing your social experience without compromising privacy.


**Mission**
Reinventing the web for communities to ensure safety, privacy, quality, and inclusivity.

**Key Features**
- Free
- Open source
- Decentralized and distributed framework
- End-to-end encryption for all communications
- Modular design allowing for extensive customization


**Your Identity**
Your identity is protected with asymmetric encryption. No passwords are necessary; encryption keys are generated on your device. You can create multiple identities, manage your reputation, and back up your data as you see fit.

**Your Data**
Smashchat doesn’t store any data on servers; in fact, it doesn’t require servers to operate. Your data and communications are encrypted end-to-end and automatically deleted after a maximum of 7 days unless you choose to save them. In the Smash protocol, data is always exchanged directly from you to other users.

**Your Community**
The core concept of smash is the one of neighborhoods. Neighborhoods are servers to connect with others, offering specific features to meet users with similar interests. Like in real life, there’s going to be good and bad neighborhoods. We have no control over that. Stay safe, and share your recommendations. You can fund, build, or contribute to your neighborhoods.


**Technology**

The Smash protocol doesn't reinvent the wheel. We rely on several proven protocols to deliver core functionality. Smash is more of a meta protocol combining existing technologies in order to deliver a fully functional, end to end, private experience. Smash is designed to be modular and architectured as a set of micro-components integrating together.

- Identity: AT Proto DID.
- User discovery: Smash-Pass User Graph.
- Messaging features: Smash Message Format.
- Message encryption: Signal protocol, X3DH and 2key-ratchet DH.
- Message delivery: Smash Signaling Endpoints & WebRTC (P2P or through TURN servers).
- Content distribution: IPFS.
- Trust authority: PGP-style network.

**Core Concepts**

**Identity:**
In Smashchat, users create decentralized identifiers (DIDs) to establish unique and secure identities. A DID functions like a digital passport within the Smash network, starting with no inherent trust or reputation. These identifiers are reusable across applications, and can be linked to a DNS handle or username, providing a foundation for building a trusted identity and maintaining privacy.

**Neighborhoods:**
Neighborhoods are community-driven nodes within Smashchat, not unlike forums or servers. Each neighborhood comes equipped with essential infrastructure components like signaling servers and DID database nodes. Users join neighborhoods using their DIDs, akin to single sign-on systems, gaining access to community-specific features, user discovery tools, and additional resilience configurations.

**Badges:**
Badges are cryptographic assertions that validate user attributes, such as age verification or group membership. They are signed by trusted peers within the network and can be presented as part of a user's profile to access certain features or establish credibility. Badges offer a flexible and secure way to share verified personal information.

**Trust:**
The trust model in Smashchat is decentralized, with no globally centralized authority. Trust is built through peer-to-peer interactions, forming a network similar to PGP-style web of trust. Users develop trust chains by validating and endorsing DIDs, enhancing the reliability and security of interactions within the platform. This method allows for a transparent and user-controlled approach to establishing and assessing trust.

**Smash (or Pass):**
This mechanism allows users to manage their interactions and relationships within the platform. To "Smash" someone is to mark them as a favorite, indicating interest and initiating further engagement. Conversely, to "Pass" is to opt out of interaction. This system helps categorize connections from strangers to trusted contacts, streamlining communication and community building. When you do so, you will signal your intention to the Neighborhood Admin that helped you discover the said user. Neighborhoods will therefore be able to build user graphs and make more pertinent recommendations to help you meet even more users. Neighborhoods won't be able to see your private data nor who you are messaging. Discovered Users will then get classified into incremental trust categories: Passed (you blocked them) -> Unknown (any DID) -> Neighbor (you both are in a shared Neighborhood) -> Active (you chatted) -> Smashed -> Trusted+Smashed (you marked them as "Trusted" as per the previous section). Note that you can Trust another user without Smashing them. This trust model granularity offers very precise control and privacy. 

**Messages:**
Initially, the Smash protocol is designed for private messaging and to eventually integrate with AT proto in order to support public discourse features. This means that in Smash content is exchanged as 1 to N Private Messages. By that, we mean that One User is sending a message to N (read, 1 or many) other Users. Messages can be more than simple typical Private Messages. Messages could be Content Refs (read the next section), Badges, User Profiles, Trust Assertions, etc. Messaging on Smashchat is designed to be private and secure, utilizing a peer-to-peer approach. This ensures that messages, whether they are text, media, or other forms of content, are transmitted directly between users without required intermediary storage or oversight, maintaining confidentiality and integrity.

**Content:**
Smashchat envisions a decentralized content distribution model, leveraging technologies like IPFS to handle encrypted media sharing. This approach aims to democratize content distribution, reduce reliance on centralized platforms, and enable direct creator-to-consumer interactions.


**You've read that far?**

We’re in the early stages and looking for users, contributors, and sponsors to help shape Smashchat. Your input, skills, and financial support can make a difference.

**1. Users: Share Your Insights and Test Our Features**
If you find the idea of a decentralized, privacy-focused social platform appealing and believe you would use it, your perspective is invaluable. We're looking for users to:
- Provide feedback on early designs and feature ideas.
- Participate in beta testing to refine functionality and user experience.
- Suggest new features and improvements based on your needs.

**2. Contributors: Lend Your Expertise**
Smash is open-source and open to contributions. We need skilled individuals in the following areas:
- **UI/UX Designers**
- **Graphic Artists**
- **iOS and Android Developers**
- **Backend Developers**
- **Cryptography Experts**
- **Security Specialists**

**3. Sponsors: Support Our Growth**
Smashchat aims to remain free and open-source, but developing such a platform requires resources. Here’s how sponsors can help:
- **Financial Contributions**: Donate to help us maintain server costs, hire additional help, and compensate our dedicated team members. Donations can be one-time or recurring.
- **Crowdfunding**: Participate in crowdfunding campaigns for specific features on our roadmap, helping us prioritize development based on community interest and funding.


A word from Nikki, Smash's founder.

I had the first core concepts and design in mind for Smash after getting banned from Twitter and Snapchat with my kinky accounts. I candidly used these platforms to communicate and meet with other Kinksters and got suddenly banned multiple times and without much notice. I accept the fact that platforms have rules and want to focus on specific content that doesn't include kinks. But I don't accept losing my online identity, contacts list, and content I crafted over time. This data should belong to me and only my should be able to decide what to do with it. Today, Big Tech are building monopolies over our identities and, as any monopoly, they are normalizing and ruling what should or shouldn't be. This isn't compatible with our diverse individual identities. And even if they did tolerate it, like X now does, this wouldn't be enough. Tolerating is a mean to build a bigger empire, but who says the Emperor won't change the rules of the game once they are big enough? The only solution is for us to fully own our data, and for platforms to become fully decentralized and distributed. Smash is an attempt at making this happen in a beautiful way, without a focus on profitability but still making sure there is a plan for revenue making as this is essential to keep it afloat and growing. We fully embrace and join forces with https://fuckthevcs.com/#/manifesto.


"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."—H. Tubman.
