
const studentNames = ["Tushar", "Aman", "Rohit", "Sahil", "Ankit"];
const studentScores = [85, 90, 78, 88, 92];
const studentGrades = ["B", "A", "C", "B+", "A-"];

// Function to display student details
function displayStudentDetails(){
    console.log(`Student Details:`);
    for(let i = 0; i < studentNames.length; i++){
        console.log(`Name: ${studentNames[i]}, Score: ${studentScores[i]}, Grade: ${studentGrades[i]}`);
    }
}

displayStudentDetails();


//printing student names using for...of loop
for(let ele of studentNames){
    console.log(`Student Name: ${ele}`);
}

//printing student scores using for...in loop
for(let ele in studentScores){
    console.log(`student score: ${studentScores[ele]}`)
}

//printing student grades using forEach
studentGrades.forEach((grade, index) =>{
    console.log(`student ${index + 1} grade: ${grade}`);
});


const marks = [10,25,65,98,7,8,4,55,65,31,20,45,78,90,100];

let sum = 0;
// for(let i=0; i<marks.length; i++){
//     sum += marks[i];
// }
for(let mark of marks){
    sum += mark;
}
console.log(`Average Marks: ${sum / marks.length}`);



const price = [210,200,350,400,987];
for(let el of price) console.log(`original price : ${el}`);


const newPrice = [];
let discount = 0.1;
for(let el of price){
    newPrice.push(el - (el * discount));
}
for(let ele of newPrice){
    console.log(`Discounted Price: ${ele}`); //Discounted Price: ${ele}
}


const data2 = [1,2,3,4,5,6,7,8,9,10];
const newSlicearr = data2.slice(2, 5); // [3, 4, 5]
console.log(`Sliced Array: ${newSlicearr}`); // Sliced Array: 3,4,5

data2.splice(2, 3, 11, 12, 13); // [1, 2, 11, 12, 13, 6, 7, 8, 9, 10]
console.log(`Array after Splice: ${data2}`); // Array after Splice: 1,2,11,12,13,6,7,8,9,10 






