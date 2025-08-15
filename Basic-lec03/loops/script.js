for(let i=0; i<10; i++) {
    console.log("current iteration: " + i);
}

let sum = 0;
let navigator = prompt("Enter a number to find sum: ");
for(let i=1; i<=navigator; i++){
    sum += i;
}
console.log("Sum of first " + navigator + " numbers is: " + sum);

//while loo
let j = 0;
while(j < 10) {
    console.log("current iteration: " + j);
    j++;
}


//do while loop
let k=4;
do{
    console.log("current k: " + k);
    k++;
}while(k < 10);


//for-of loop : automatically iterates over iterable objects like strings, arrays, etc.
let currData = "tushar singh rawat";
for(let ele of currData){
    console.log(ele);
}


//for-in loop : iterates over enumerable properties of an object
const StudentDB = {
    "name": "Tushar Singh Rawat",
    "age": 20,
    "subjects": ["Math", "Science", "English"],
    "grades": {
        "Math": "A",
        "Science": "B",
        "English": "A+"
    }
}

for(let key in StudentDB) {
    console.log("key : " + key + " value : " + StudentDB[key]);
}