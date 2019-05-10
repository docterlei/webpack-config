## 1.查看本地分支 
  git branch

## 2.查看远程分支
  git branch -r

## 3.查看所有分支
  git branch -a

## 4.查看remote地址，远程分支，还有本地分支与之相对应关系等信息
  git remote show origin

## 5.本地查看远程分支的时候，出现了被删除的远程分支，删除远程仓库不存在的分支
  git remote prune origin

## 6.在本地
  git checkout -b dev 新建并切换到本地dev分支
  git pull origin dev 本地分支与远程分支相关联

## 7 在本地新建分支并推送到远程
  git checkout  -b test 
  git push origin test 这样远程仓库中就创建了要给test分支
