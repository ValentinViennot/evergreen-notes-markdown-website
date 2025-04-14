**Badges** are verifiable cryptographic tokens that represent achievements, endorsements, group memberships, or **_anything that a peer might want to assert_**.

Badges are designed to be lightweight, privacy-respecting alternatives to traditional **NFTs** (Non-Fungible Tokens), functioning without reliance on blockchain technology. Each badge is cryptographically signed by the issuing peer or neighborhood and can be verified by others within the **[[Web of Trust]]**.

> ([[Backlog]]) We might consider a version of Badge that is compatible with the NFC standards.

Badges are:

- **Verifiable**: Badges are cryptographically signed, making them tamper-proof and easily verifiable by others within the network.
- **Endorsements**: Badges can be issued to endorse or certify a user's behavior, expertise, or participation in a particular group or activity.
- **Privacy-respecting**: Unlike many public-facing tokens or achievements, badges in Smash are designed to be shared selectively. Users can choose which badges to display or hide, maintaining control over their public identity.

Badges play a key role in Smash's **[[Web of Trust]]** model, where peers validate one another’s reputation through endorsements. A user’s collection of badges provides insight into their standing within the community, helping others make informed trust decisions.

In addition to being delivered as an endorsement, Badges can also be "[[Endorsements|upvoted]]".

The client application SHOULD clearly display any of the User's [[trusted peer]] supported a claim.

#### Example use cases:

- **Claimed attributes**: Self-certified badges can be used and displayed by a User to make any claim they'd wish to make. As Badges can be upvoted, they can get community endorsement for their own claims.
- **Group membership**: A badge can signify membership in a specific group or community, such as a **[[Smash Neighborhoods (NBH)]]**.
- **Verification and Assertions**: Reputable [[Peer]], such as [[Neighborhood Admin Bot (NAB)]], can award selective badges under specific, defined conditions. Such as "over 18yo" or "unique identity verified" Badges.
- **Achievements**: Users can be awarded badges for reaching milestones, participating in key events, or contributing to the community.

