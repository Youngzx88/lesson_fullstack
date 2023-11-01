# git

## 1、pull/push/fetch/merge

- git pull：拉取指定远端分支合并到本地当前分支：git pull origin branch1
- git fetch：可能我们只是想把远端仓库对应分支的变更拉到本地而已，并不想自动合并到我的工作区（你当前正在进行代码变更的工作区），等晚些时候我写完了某部分的代码之后再考虑合并，那么你就可以先使用 git fetch。
- git merge：
  - 远端仓库 master 分支有变更了，同时这个时候我们准备提 MR 了，那么就需要先合一下 master 的代码，有冲突就解决下冲突，那这个时候我们可以做以下操作：
  - 1. 切到 master 分支
  - 2. git pull 拉一下最新代码切回开发分支，执行 git merge master 合并一下 master 代码。
- git log
- git reset：git reset [--soft | --mixed | --hard] [HEAD]

- 场景一
  - 当你某个改动提交到本地仓库之后，也就是 commit 之后，这个时候你想撤回来，再改点其他的，
  - 那么就可以直接使用 git reset HEAD^。
  - 注意：reset之后，远程的分支会本地分支优先一个commit，这种情况只能强推-f，建议一个人一个分支
- 场景二
  - 某一天你老板跟你说，昨天新加的功能不要了，给我切回之前的版本看看效果，那么这个时候，你可能就需要将工作区的代码回滚到上一个 commit 版本了，操作也十分简单：
  - git log 查看上一个 commit 记录，并复制 commitId
  - git reset --hard commitId 直接回滚。

## 2、处理冲突

- merge 就是只合并最新 commit，所以只要解决一次冲突，然后生成一个新的 commit 节点。
- 而 rebase 则是把所有 commit 按顺序一个个的合并，所以可能要解决多次冲突，但不用生成新 commit 节点。

- Accept Incoming：选择此选项会保留远程仓库（origin）的更改，丢弃本地仓库的更改。换句话说，它会接受远程仓库的版本作为最终的解决方案。

- Accept Combination：选择此选项会将远程仓库（origin）的更改与本地仓库的更改合并。Git会尝试自动合并两个版本，并生成一个新的合并结果。你可以在合并结果中手动编辑以解决冲突。

- Accept Current：选择此选项会保留本地仓库的更改，丢弃远程仓库的更改。换句话说，它会接受本地仓库的版本作为最终的解决方案

## 3、提交错误？删除某一次commit信息和内容->修改commit历史

- 第一种是 git reset --hard 到那个分支，然后改完之后 git commit --amend，之后再把后面的 commit 一个个 git cherry-pick --continue回来,处理冲突。
- 第二种是后面的commit过于多的情况下，git rebase -i 这些 commit，它提供了一些命令，比如 pick 是使用这个 commit，edit 是重新修改这个 commit。我们在要改的那个 commit 使用 edit 命令，之后 git rebase --continue，依次处理后面的 commit。其实 reabse 就是对 cherry-pick 的封装，也就是自动处理一个个 commit。
  - pick 是原封不动使用这个 commit
  - reword 是使用这个 commit，但是修改 commit message
  - edit 是使用这个 commit，但是修改这个 commit 的内容，然后重新 amend。
  - squash 是合并这个 commit 到之前的 commit
- filter-branch。它可以在一系列 commit 上自动执行脚本。比如 --tree-filter 指定的脚本就是用来修改 commit 里的文件的。
