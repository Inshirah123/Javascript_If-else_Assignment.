document.write("<h2>JavaScript_If else_Assignment.</h2>")
document.write("<h3>loops</h3>")
document.write("<hr>");

//Q1: Write a program to display the message “Hello World” 5 times 
//in your browser using for loop.

document.write("<h3>Question:1 (for loop)</h3>");
for (let i = 1; i <= 10; i++) {
    // Add text to the page body
    document.body.innerHTML += "Life is a beautiful war<br>";
}
document.write("<hr>");

//Q2:. Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user.

document.write("<h3>Question:2(table by for loop)</h3>");

let Number = prompt("Enter the num for multiplication table:");
let Num_Length = prompt("Enter the length of the multiplication table:");
for (let i = 1; i <= Num_Length; i++) {
    document.body.innerHTML += `${Number} x ${i} = ${Number * i}<br>`;
}

document.write("<hr>");

//Q3:Write a program to print items of the following array using for 
//loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

document.write("<h3>Question:3(Array with for loop)</h3>");
let fruits = ["Ayesha", "Fatima", "Zainab", "Fahad", "Taha"];
for (let i = 2; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<hr>");

 //Q4:Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7

document.write("<h3>Question:4(print stars with forloop)</h3>");

// User se initial number of stars lena
// User se initial number of stars lena
let Num_Stars = prompt("Enter the initial number of stars:");
for (let i = Num_Stars; i >= 1; i--) {
    document.write('*'.repeat(i) + "<br>");
}
document.write("<hr>");

 //Q5:Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7

document.write("<h3>Question:5(print stars with forloop)</h3>")
// User se number of lines input lena
let numLines = prompt("Enter the number of lines:");
for (let i = 1; i <= numLines; i++) {
    document.write('******************' + "<br>");
}

//(part b)

let num_Lines = prompt("Enter the number of lines:");
for (let i = 1; i <= numLines; i++) {
    document.write('*'.repeat(i) + "<br>");
}