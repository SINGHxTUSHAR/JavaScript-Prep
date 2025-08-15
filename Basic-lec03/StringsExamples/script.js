

let name = "tushar singh rawat";
let newName = name.toUpperCase();
console.log(newName); // Output: TUSHAR SINGH RAWAT

const employee = {
    "empName": "Tushar Singh Rawat",
    "empId": 12345,
    "empSalary": 50000
}

let output = `  Employee Name: ${employee.empName},
                Employee ID: ${employee.empId},
                Employee Salary: ${employee.empSalary}`;

console.log(output);

let str = "Hello, World!";
let strLength = str.length;
console.log(`The length of the string is: ${strLength}`); // Output: The length of the string is: 13


let whiteSpaceStr = "   Hello, World!   ";
let trimmedStr = whiteSpaceStr.trim();
console.log(`trimmed String : ${trimmedStr}`); // Output: Trimmed string: 'Hello, World!'

let data1 = "tushar singh rawat hai mera naam!!!!!!!!!";
console.log(data1.slice(0,12));
console.log(data1.charAt(0)); // Output: t
console.log(data1.indexOf("rawat")); // Output: 16 ending idx


/////////creating username from the input string
let userName = prompt("Enter your name:");
let normalizedName = userName.replace(/\s+/g, "").trim();
let newUserName = "@" + normalizedName + normalizedName.length;
console.log(`Your username is: ${newUserName}`); // Output: Your username is: @tushar singh rawat hai mera naam!!!!!!!!!27