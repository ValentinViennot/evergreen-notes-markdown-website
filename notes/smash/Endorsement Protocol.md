The [[Endorsements]] Protocol is a core component of the Smash Protocol that enables users to cryptographically verify and endorse various aspects of other peers' identities and claims.

## Structure

An endorsement follows this basic structure: 

```json
json
{
    "type": "endorsement",
    "data": {
        "uri": "<at-proto-content-addressable-uri>",
        "did": "<signer.did>",
        "signature": "<cryptographic-signature>"
    }
}
```

## Types of Endorsements

Endorsements possibilities are endless as they can be used to endorse any [AT Protocol resource](https://atproto.com/specs/at-uri-scheme).

Here are a few examples:

1. **[[Profile]] Endorsements**
   - Endorses an entire [[peer identity]] (DID)
   - Signifies trust in the overall identity
   - Can indicate real-world verification or general trust

2. **[[Badges]] Endorsements**
   - Endorses specific claims or badges
   - Verifies particular attributes or achievements
   - Helps build credibility for specific claims

## Client-side Implementation

Clients SHOULD implement the following features:

1. **Endorsement Display**
   - Show count of endorsements
   - Provide detailed view of endorsers
   - Indicate verification status
   - Display trust chain information

2. **Verification Process**
   - Verify signatures in background
   - Show "verifying..." status during process
   - Implement prioritized queue for crypto operations
   - Handle resolution of keys and signatures

3. **Trust Chain Visualization**
   - Display verified trust chains
   - Show connection to user's web of trust
   - Explain trust relationships

## Example Display Format

```
text
Profile "Title" (<did>)
    Endorsed by 13, including (ℹ️)
        ✅ "trusted-peer-name"
        and 3 others in your web of trust (ℹ️)
Badges:
    "Claim": Value (endorsed by 8, ℹ️)
        ✅ "trusted-peer-name"
        and 1 other in your web of trust
```

## Implementation Notes

- Endorsements are cryptographically signed
- Verification should be handled asynchronously
- Trust chains should be resolved and cached
- Prioritize critical operations (message decryption > endorsement verification)
