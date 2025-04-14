The Profile is a [[Peer]]'s presented public information.

A [[Peer Identity]] is only cryptographic material and doesn't tell us much, as humans.

The Profile data structure is here to fill this void by allowing Users to share standardly-formatted information about them.

```typescript
{
	did: DID,
	title?: string,
	description?: string,
	avatar?: Media,
	handles?: Handle[],
	badges?: Badge[],
	media?: Media[],
}
```

- The [[DID]] format might be a string [[Resolving a DID|to resolve]] or a fully-resolved [[DID document]].
- [[Media]] spec
- Handle is an URI matching the [[Handles]] spec
