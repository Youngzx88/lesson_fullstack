# gitlearning
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