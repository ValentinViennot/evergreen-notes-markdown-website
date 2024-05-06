MISSION
**Reinventing the web for communities.**

VISION
**a safe, private, and inclusive 1:N social app for quality connections.**

HIGH-LEVEL STRATEGY
- Implement as open protocol / standard
- Separate concerns: micro-services, generic client
- Target niche high-engagement and ill-served community first

FUNDING
- Eligible for VC funding
- Crowdfunding?
- Trademark-based funding through FTVCs/Open Market
- Eligible for Tokenized equity funding

Note: there's a need to scale **fast**. (highly-competitive, fast moving, team attractiveness).

BUSINESS MODEL
- Subscriptions for server-side features:
	- Backups
	- Load more profiles
	- Etc.
- Each node ('neighborhood') has their own business model
	- Don't have to be fully open source
	- Don't have to be open data
- Transaction fees
- Funded through Open Market model
	- i.e. Trademark valuation
	- and roadmap crowdfunding
- For content creators, three tiers
	- Self-hosted (free)
	- Shared (shared infra, low but variable fees)
	- Managed (dedicated node, high but fixed cost)

GTM
- Develop a generic app and the protocol quietly.
- Start with a super-niche 'neighborhood'.
	- Proposal: target Kink/BDSM/Porn online communities.
	- High engagement, low-served, unsatisfied with current socials
	- And smart folks! (to join as contributors, and crowdfunding)
- Spread the news through influencers.
- Develop a great use case for them.
- Show traction. Get their involvement in development.
	- Use demonstrated traction to raise funds.
- In parallel, use the Open Market / Fuck the VCs solution to crowdfund
	- (maybe private listing?)

- Bug bounty program -> yes we hack and equivalent

TEAM
- Valentin
- Andrew?
- Cyriaque?
- Roger?
- _Think of people in KK circle. when more developed, actively look._

ROADMAP & NEXT STEPS
- RESEARCH—and prototype
	- User research to understand needs, gaps, pains, JTBD
	- Focus on learning and (in)validating assumptions
	- Iterate vision and low-fi prototype
	- Communicate vision and gauge engagement
- MVP—niche targeting
	- Develop a first MVP, truly MINIMAL solution
	- Experiment, measure, learn—[[Experiment, Evaluate, Adjust, Repeat]]
	- Vision: social app for kinky communities.
		- But **split concerns**!
			- Develop social app and protocol on one end (no marketing)
			- Develop Kinkster neighborhood and do targeted promotion
- FUNDRAISE
	- Once vision clearer and traction demonstrated
	- Go raise funds like crazy! Prepare to scale fast
	- Explain why scaling fast is required and how to do it
- SCALE—fast
	- Develop protocol and app
	- Merge and acquisition with other tech projects
	- Become one of the leading Open Market projects
	- Promote the Open Market through communities
		- e.g. of 'nodes' / neighborhoods
			- Grindr
			- TeamLocked
			- Matera
			- ...
		- e.g. of clients variations
			- BlueSky-like
			- Instagram-like
			- TikTok-like
			- Grindr-like
			- Reddit-like
			- ...
- GENERALISE
	- Once tech developed and more mainstream
	- Partner to migrate solutions to our protocol
	- Make it the web standard for social apps

INSPIRATION
- Reddit
- Grindr
- Snapchat
- TikTok
- DeSo
- Gallery app / Pinterest / Tumblr
- Telegram / WhatsApp / Kik
- Twitter
- Olvid / Skred / Threema
- Forums (esp. username sharing forums)
- Stack overflow
- OnlyFans
- 

DESCRIPTION

# The Kinksters neighborhood on Smash: an applied decentralized social networking protocol use case

We propose a 1:N messenger solution targeted at online communities on the modern web.
Our focus is on: SAFETY, PRIVACY, INCLUSIVITY, and QUALITY.

We ambition to fight loneliness by enabling quality connections. We ambition to design the future social web for online communities.

Our starting point is to provide a safe space for kinks online.

- Protocol and standards: DSNP (decentralized social networking protocol)
- Client application (generic): Smash
- First applied use case (node / neighborhood): Kinksters

## Why?

Our first proposal will focus on the specific use case of online kink play communities. Specifically, adults looking to have sexual fun play online through content sharing applications. Current uses include Snapchat conversations and groups, Twitter accounts and lists, Telegram groups, OnlyFans accounts, or even Instagram private accounts. We claim that these users are currently underserved and that this raise deeper concerns. While we intend to start with these adult-only use cases, we believe our vision to naturally extend to all of online social networking.

Most apps (except some like Twitter and OnlyFans) currently don't officially allow this type of content. Even when they do it's 'tolerated' and not encouraged nor designed for it. It's a shameful and distrustful for users wanting to use them that way. Accounts (even highly popular ones) would often get banned, content blocked or removed, and it would result in shame, frustration, disappointment for users. They would lose their social connections and have to restart from scratch. For content creators, it's a very unstable source of revenue with a high risk of being removed. It's also a high fee to pay on their revenue to the hosting platform. In general, the quality of connections is poor and random. Frustration, loneliness, and self-censorship are the norm.

Beyond these adult-only scenarios, the cause for these issues is deeper rooted in the business models of social apps today. Their incentives are misaligned with those of the users they serve with their platforms, on both sides: creators and consumers. These applications are not here to serve users and encourage quality connections, but to sell ads and get attention rents.

This would result in decisions poorly aligned with the real user needs and wants.

## How?

Much aligned with the recent web3 and crypto trends, we propose to decentralize social networks and design primitives and fundamentals aligning the incentives of various participants in a way that maximizes value creation and utility for the end users of these platforms.

We redesign the internet with protocols, standards, and architectures that are designed to encourage behaviors benefiting the consumers. Ultimately, we believe the solution to be in decentralization and openness as they together have the power to destroy current monopolies and the opportunity for new ones to exist.

We propose building or integrating protocols and standards that seamlessly:
- permit interoperability, permission-less community governance, distributed trust-less infrastructures, cross-solutions modularity, user data self-ownership, end-to-end privacy (i.e. disabling surveillance opportunities), users safety
- align all participant incentives on content curation (quality)

## What?

> Note: this is a draft, there's a lot yet to be discussed and specified; the outcome is to specify each layer and interaction with a comprehensive public spec doc that can be peer reviewed and to which the community could make change proposals.

> Note: one should want to reuse or integrate with existing fundamental specifications, such as maybe BlueSky (ATProto), Signal/Telegram, DeSo, Lens, ETH, etc.

### DSNP

The DNSP (decentralized social networking protocol) is proposed as a set of standards and reference documents specifying a decentralized social networking protocol. It focuses on designing and documenting fundamental primitives that are required to allow interoperability and end-to-end privacy. Safety, inclusivity and quality responsibilities are deferred to the protocol implementation by both nodes and clients.

> Note: At this point, we haven't considered whether to split the DSNP into multiple increasingly specific layers. Likely DSNP would be the least specific protocol (L1), Smash would propose additional more specific features (L2), and Kinksters would be the L3 end-user facing app.

> Note: The DSNP license is yet to be decided. We might want to leverage a strict copyleft license in order to force clients and nodes to disclose their source code making changes to the protocol itself. This should only be code making changes to the protocol, not necessarily ALL the client or server source code. (especially if they use differentiating machine learning models or matching algorithms etc.). We encourage full openness but might not want to necessarily enforce it. However, additional features added by one node or client should be transparently reproducible / replicable.

#### Client

A client is any User Interface enabling the end user to use the DSNP.

A client enables the user to:
- manage their identities
- communicate with other users (P2P or through a server/node)
- connect to and explore neighborhoods (nodes)

#### Node (Neighborhood)

In the DNSP, Nodes are also called 'Neighborhoods'. They are places where communities can organize and where users can meet other users. Nodes can propose additional features on top of the DNSP primitives and should differentiate by providing the best curation and functionalities.

Nodes are social graphs. The features of these graphs are up to each node.

A Node may decide to use a blockchain for their social graph, but doesn't have to.

Nodes must request permissions from users in order to access and or share their data.

#### DNSP Primitives

> Cross-neighborhoods and Node-client fundamentals

##### User Identity

A User identity is a unique cryptographic identity representing a user.

One user may have multiple user identities.

##### User profile

A User must specify a versatile profile to share with other users. The profile is stored on the client side and shared 1:N as specifically decided by the user. Nodes can augment profiles with additional specifications that may be incompatible with other nodes or clients.

##### Badges

Badges are Signed Tokens that are delivered by a Node. They can be specific to a User or non-specific. A User earn them and store them in their wallet (client side). They can chose to display them on their profile or not. They can send them to other users. They can exchange them as NFTs.

##### Message

##### Post / Content

##### User coin

##### Neighborhood currency

#### DNSP Infrastructure

CDN (torrent style)
Identity providers
Posts
Blockchain (Wallet)

### Smash

(Make the web3 concepts more transparent?)

1. Infinite list of chats and profiles (+ saved/pinned)  
2. Infinite list of content (+ saved)  
3. Neighborhoods(=Node)/Communities/Profiles  
Scores/Graphs/Badges  
  
1: Grindr, Snap  
2: TikTok, Instagram, Twitter, Porn hub, OF  
3: Twitter, Reddit, OF,  
4: Tinder, Switched, Wallet/DeSo  
  
Allow for multiple profiles  
Safe storage  
Encrypted and P2P when possible  
  
### Kinksters

Safety  
- No psychos  
- No underage  
- Safe space  
  
Privacy  
- Anonymous  
- Closed space  
  
Quality  
- No wasted time  
- Aligned interests  
- Track record  
  
Inclusivity  
- Adaptability  
- Communities  

- Privacy  
- - Encryption  
- Score/popularity/network mechanisms  
- - Integrated features, but open enough so that anyone can add modularly + platform = OSS  
  
Implement features or integrations such as
- Exposure kink
- Chastity tracking/challenges  
- Contracts/rules  
- ...


NEXT STEPS

- [ ] learn from Lens etc (use or compete?)
- [ ] 
