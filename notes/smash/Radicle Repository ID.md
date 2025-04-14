A **[[Radicle Repository]] ID** refers to the decentralized identity of a repository within the [[Radicle]] network. This identity contains essential metadata and configuration that helps peers recognize and replicate the repository.

> commands are executed inside a configured [[Radicle Repository]]

- **Short ID**: The repository's short ID can be displayed using the `rad .` 
- **Full Identity Document**: To see the complete identity document, use `rad inspect --identity`. This document contains metadata like the default branch, description, name, and delegate settings.

Example Identity Document:

```json
{
  "payload": {
    "xyz.radicle.project": {
      "defaultBranch": "main",
      "description": "",
      "name": "test"
    }
  },
  "delegates": [
    "did:key:z6MkpzZDoFM7tPZPXqvaVCtMFxKJQAxghVRJZxsf8s8SqBvm"
  ],
  "threshold": 1
}

```

1. **Canonical Branch (`defaultBranch`)**: This is the repository’s primary reference branch, akin to the "main" branch in GitHub. In Radicle, it is referred to as the "**canonical**" branch.
   
2. **Diverging Branches**: Since Radicle is decentralized, different peers may have diverging versions of the `defaultBranch`. To manage this, Radicle introduces:
	- **Delegates**: Trusted peers who help maintain the repository.
	- **Threshold**: The minimum number of delegate peers required to promote a specific commit as the **canonical** version of the repository.

> The `canonical` commit is defined by the delegate peers—if at least the `threshold` number of delegates agree on a commit, it becomes the active version.

3. **Revisions**: The identity document of a repository can be edited through revisions. These revisions can be viewed or modified using `rad id` commands. Any changes to the identity document, including delegate or branch modifications, must be accepted by at least the `threshold` number of delegate peers for them to take effect.

This decentralized model ensures that repository integrity and updates are managed collectively, preventing unilateral control while allowing collaborative decision-making.
