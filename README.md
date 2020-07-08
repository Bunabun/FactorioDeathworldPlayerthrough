# Community Factorio Deathworld
An open sourced community powered playthrough of Factorio's deathworld preset.

# How to participate
To be added as a contributor you can reach me either through email at `ericforce06@gmail.com` or by discord at `Cinna Bun#8505`. Otherwise you can fork and make pull requests to master.

We use a strict workflow to insure that no conflics occur on the master branch. This keeps a consistant save history with each commit. The branch is protected and to change it pull requests from branches or forks must be used. In addition the pull request cannot be behind in game time and as a quick check in order for the pull request to pass `save.js` must be changed to export a later time. It should reflect the save file's game time. Lastly the save name in master should be kept as master for consistency.

These restrictions are it for the time being. They only apply to the master branch in this repo.

# How to clone
Knowing how to use git is a worthy skill here, but here are the basics.
The easiest way to start is to cd to `\AppData\Roaming\Factorio\saves` or where ever your saves are located and run these git commands.
```
git init
git remote add upstream https://github.com/ErenForce/FactorioDeathworldPlayerthrough.git

// if you're a contributor
git remote add origin https://github.com/ErenForce/FactorioDeathworldPlayerthrough.git

// if you forked
git remote add origin https://github.com/yourusername/FactorioDeathworldPlayerthrough.git

git fetch upstream

git pull
// more information https://stackoverflow.com/a/9257901
```

As help, the directory includes common factorio related items that git will ignore.

# How to branch master and push
To branch off of master first fetch and merge if needed
```
git checkout master
git fetch upstream
git merge upstream/master
```
This allows you to play, however before saving you must create a branch first. To create a new branch and switch to it afterwards. 
```
git checkout -b your-branch
```
Once finished save something. Then make sure to update the time in `save.js` or the commit will fail merges. To get the files ready to commit.
```
git add .
```
And then commit and add a message describing what happened.
```
git commit
```
lastly push and start a merge request.
```
git push
```
Lastly a tip, keep everything to fast-forwards in both realtime and gametime. Merge conflicts are hard enough with human readable text.
In other words, don't try and be a time traveler and rewrite history that's where ~paradoxes~ conflicts happen.

# How to branch off of a branch and push
The same above but replace the branch master with the branch you want to base off of.
```
git fetch
git checkout remote-branch
git pull origin remote-branch
```
Then checkout like before and do the basic.
```
git checkout -b your-branch
// save and edit save.js, etc.
git add .
git commit
// once all finished
git push origin your-branch
```
You should be able to select either the master branch or the remote branch for the pull request.
