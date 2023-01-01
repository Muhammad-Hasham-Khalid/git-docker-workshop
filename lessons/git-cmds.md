---
path: "/git-commands"
title: "Git Commands"
order: "1C"
section: "Introduction to Git"
---

## Initialize, Setup Remote, Clone Repo

- Initialize

```bash
git init # Yeah, that's it! pretty simple, right?
```

- Setup Remote

```bash
# This will tell git from which remote repository we want to connect our current local repository
git remote add <remote name> <remote link>
```

- Clone an existing repsoitory

```bash
git clone <repository-remote-link> <location (optional)>
```

## Stage, Commit, Push

- Staging

```bash
# stage a specific file
git add <filename>

# stage all files
git add .
# or
git add -A
```

- Commit

```bash
# commit with a message as arg
git commit -m "<your meaningful message goes here>"

# commit without a message arg
# (this will open the editor to write the commit message)
git commit

# add/stage files that are dirty(modified/deleted) and then commit
git commit -a

# can also pass the -m flag with -a to write the commit message as arg
git commit -am "<your meaningful message goes here>"
```

- Push

```bash
git push <remote name> <branch name>
```

Some useful flags to learn with this command are:

- `-f`: force
  > **WARNING**: Don't use the `-f` flag until you don't know what side effect it will create, it can mess up things.
- `-u`: setup upstream

## Branching and Merging

- Branching

```bash
git branch <branch name> # create a branch
git checkout <branch name> # then switch to it
# or
git checkout -b <branch name> # create a branch and switch to it

# delete a branch
git branch -d <branch name>
```

- Merging branches

```bash
git checkout <branch-name-in-which-you-want-to-merge>
git merge <branch-name-you-want-to-merge>
```

## Creating a Pull Request

Pull requests are a way of contributing to a project, they are very useful to learn and to be used in personal, group and other open source projects, as with the help of branches and PRs the whole workflow becomes well organized and well managed. Now, let's take a look at how we can create a pull request and merge it.
