import { readFileSync, writeFileSync } from 'fs';
import save from './save.js';
var args = process.argv.slice(2);

if (args[0] === "test") {
    console.log("testing.");
    var masterTime = readFileSync('./time/time.file', "utf8" );
    if (masterTime > save.time){
        throw Error("Game time for master is " + masterTime +". The game time for master should always be behind the game time for the pull request.");
    }
} else if (args[0] === "fetch") {
    console.log("fetching time.");
    writeFileSync('./time.file', save.time)
}

console.log("passed.");
