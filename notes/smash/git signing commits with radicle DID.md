https://radicle.xyz/guides/user#git-going-with-repositories

> **requires git >= 2.34** for signing using an SSH key

```sh
git config user.signingKey "$(rad self --ssh-key)"
git config gpg.format ssh
git config gpg.ssh.program ssh-keygen
git config gpg.ssh.allowedSignersFile .gitsigners
echo "$(rad self --ssh-fingerprint) $(rad self --ssh-key)" >> .gitsigners
git config commit.gpgsign true
```
