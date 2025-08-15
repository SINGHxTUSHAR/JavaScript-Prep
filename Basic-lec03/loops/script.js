for(let i=0; i<10; i++) {
    console.log("current iteration: " + i);
}

let sum = 0;
let navigator = prompt("Enter a number to find sum: ");
for(let i=1; i<=navigator; i++){
    sum += i;
}
console.log("Sum of first " + navigator + " numbers is: " + sum);