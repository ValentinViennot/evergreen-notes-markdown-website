https://atproto.com/specs/handle

```txt
at://user.name.tld
```

In the [[ATProto]], **DNS handles** serve as user-friendly identifiers that map to more technical **[[DID]]s** (Decentralized Identifiers). These handles are human-readable domain names (e.g., `user.example.com`) that help users easily interact with others across AT Protocol apps like [[Bluesky]].

1. **Resolution to DIDs**: The DNS handle is a more familiar form of identity compared to DIDs, which are longer cryptographic strings. When a handle is used, it is resolved to the corresponding DID using a [[DNS]] TXT record or an HTTPS request to a well-known endpoint. This DID is the primary, stable identifier that links to a user's profile, public keys, and services.

2. **Portability**: Since handles are domain-based, users have the flexibility to use the same handle across all [[ATProto]]-based apps. This ensures portability—if you own `example.com`, you can use that as your handle across different platforms.

3. **Verification**: Handles can serve as a verification mechanism. For instance, if a brand owns a domain like `@brand.com`, subdomains (e.g., `@employee.brand.com`) can verify individual accounts, adding authenticity and authority.

Users can customize their handle by either purchasing a domain or using existing domains they own. They need to add a TXT record to their domain's DNS settings that links the domain to their DID. Once this is verified, the domain becomes their handle in the AT Protocol ecosystem.
