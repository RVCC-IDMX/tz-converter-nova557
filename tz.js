const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

let targetTimezone;

if (process.argv != 3) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);

}
else {
    targetTimezone = process.arg[2];
}

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
