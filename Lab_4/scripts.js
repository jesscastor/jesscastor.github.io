// Jessica Castor
// INST 377
// 10/09/21

let myFullName = "Jessica Castor"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

const myName = document.querySelector(".header");
myName.innerText = myFullName + " 's Lab 4";
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

const myConetent = document.querySelector(".content");

const p1 = document.createElement("p");
p1.className = "content1";
p1.innerText = "Hello I am the first paragraph";
myConetent.appendChild(p1);

const p2 = document.createElement("p");
p2.className = "content2";
p2.innerText = "Second paragraph";
myConetent.appendChild(p2);
//append 
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

let len = myFullName.length - 1;
p1.innerText = "My name has " + len + " characters.";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
// 6 Add a new line to your second paragraph
// 7 Return the final three characters of your last name to that new line
const thrd = myFullName[2].toUpperCase();
const lst3 = myFullName.substring(11,14);
p2.innerText = "The 3rd character in my name is " + thrd + ".\n" + "The last 3  characters of my last name are " + lst3;

// 8 Substring your first and last name into two separate variables
const frst = myFullName.substring(0,8);
const lst = myFullName.substring(9,14);

// 9 Add the total length of your first and last names together
const total = frst.length + lst.length;

// 10 Display that total next to your name in your header
myName.innerText+= " " + total;