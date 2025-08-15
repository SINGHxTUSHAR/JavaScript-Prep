
// let age = 18;

// if(age >= 20){
//     console.log("you can vote!!!!!");
// }else{
//     console.log("you cannot vote!!!!!");
// }


//node.js example
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your age: ', (input) => {
//     let age = Number(input);

//     if(age >= 20){
//         console.log("you can vote!!!!!");
//     }else{
//         console.log("you cannot vote!!!!!");
//     }
//     rl.close();
// });

function checkVote() {
    const age = Number(document.getElementById('ageInput').value);

    if (age >= 20) {
        document.getElementById('result').textContent = "You can vote!";
    } else {
        document.getElementById('result').textContent = "You cannot vote.";
    }
}