This is a cheatsheet for using [[radicle]].

## Creating a new repository

```bash
git init
git add .
git commit -m "initial commit"

rad init
```


## Add smash seed server as a peer

```bash
rad id update --allow did:key:z6MkiXzPZSV6yx6wHSdSPNpVVytxauiLzhU1jG8sVmxdZkcn # smash seed server
rad sync -i
rad sync -a
```


## Adding peers as delegates

```bash
rad follow # to see their dids
```

```bash
rad id update --delegate <their did>
```


## Updating a repository's properties

```bash
rad id update \
  --title "rename project" \
  --payload "xyz.radicle.project" "<prop>" '"<value>"'
```


## Renaming a remote

```bash
git remote rename xsbfh@z6MkpzZDoFM7tPZPXqvaVCtMFxKJQAxghVRJZxsf8s8SqBvm xsbfh ; git fetch --all ; git lola
```

or

```
rad remote --all
rad remote rm <name>
rad remote add <did> --name <name>
```


## Adding a https/ssh git as push backup

```bash
git remote set-url --add --push rad git@github.com:<backup-repo.git>
```

> note that you can also separately fetch the refs from this repo 

.git/config
```
[remote "github"]
	url = git@github.com:<repo.git>
	fetch = +refs/heads/*:refs/remotes/github/*
```
