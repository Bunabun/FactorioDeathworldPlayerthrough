This is a bun's playthrough.

# Community Factorio Deathworld
An open sourced community powered playthrough of Factorio's deathworld preset.

# How to participate
We use a strict workflow to insure that no conflics occur on the master branch. This keeps a consistant save history with each commit. The branch is protected and to change it pull requests from branches or forks must be used. In addition the pull request cannot be behind in game time and as a quick check in order for the pull request to pass `save.js` must be changed to export a later time. It should reflect the save file's game time. Lastly the save name in master should be kept as master for consistency.

These restrictions are it for the time being. They only apply to the master branch. Everything else is unrestricted.

# How to clone
Knowing how to use git is a worthy skill here, but here are the basics.
The easiest way to start is to cd to `\AppData\Roaming\Factorio\` or where ever your saves are located and run these git commands.
```
git init
git remote add origin https://github.com/ErenForce/FactorioDeathworldPlayerthrough.git
git pull origin master
```

As help, the directory saves, along with other factorio items, are ignored by git. Simply copy the save file to commit, edit the time to match the save's time, and commit with a message.

# How to branch and push
Create a new branch and checkout afterwards. 
```
git checkout -b your-branch
```
Load the save and do something. Copy it out of `saves/` and up to the git dir, then make sure to update the time in `save.js`. To get the files ready to commit.
```
git add .
```
And then commit and add a message describing what happened.
```
git commit -c
```
lastly push and start a merge request.
```
git push
```
Lastly a tip, keep everything to fast-forwards in both realtime and gametime. Merge conflicts are hard enough with human readable text.
In other words, don't try and be a time traveler and rewrite history that's where ~paradoxes~ conflicts happen.
