// Name: [Your Name]
// Date: [Current Date]

let myName = "Madina Alvi";
let para1 = document.getElementById("p1");
para1.textContent = myName;

// Step 2: Add two numbers and display the sum
let n1 = 10;  // Example number
let n2 = 5;   // Example number
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Step 3: Multiply two numbers and display the result
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Step 4: Add a number to the string and display it
let myNameAddNum = myName + n1;  // Concatenate string with a number
document.getElementById("p4").textContent = myNameAddNum;

// Step 5: Attempt to multiply a number with a string (NaN expected)
let myNameMultNum = myName * n1;  // This will result in NaN
document.getElementById("p5").textContent = myNameMultNum;

// Step 6: Compare age to the product of n1 and n2
let age = 25;  // Replace with your age
let ageCompare = age > numberMult;  // True or false comparison
document.getElementById("p6").textContent = ageCompare;

// Step 7: Change the values of n1 and n2 and refresh
n1 = 20;  // New value for n1
n2 = 10;  // New value for n2

// Recalculate and display the updated values
numberSum = n1 + n2;
numberMult = n1 * n2;
ageCompare = age > numberMult;

document.getElementById("p2").textContent = numberSum;
document.getElementById("p3").textContent = numberMult;
document.getElementById("p6").textContent = ageCompare;
