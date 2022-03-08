
const yargs = require('yargs');
//console.log(process.Yargs);

let command = process.yargs._[0];

if(command === 'fly'){

    console.log('flying');
} else if (command === 'drive'){
    if(params.speed && params.car){
        console.log(`driving ${params.car} at the speed of ${params.speed}`);
    } else {
        console.log('driving');
    }
}
