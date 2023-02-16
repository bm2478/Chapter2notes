const readLine = require('readline-sync');


let cost =Number(readLine.question("Enter meal price: "));
let tax= cost *.08
let answer9 =cost + tax
console.log(`cost is ${answer9.toFixed(2)}`);
if (answer9 == "0"){
    console.log(`invalid`);
}   else (answer9== "0>-1"){
    console.log("invalid")
}



let answer = readLine.question("Would you like to hear a joke?\nYour answer: ");
console.log(answer);

if (answer == "yes"){
    console.log(` When two vegans get in an argument, is it still called beef? `);
}  else{
    console.log("Oh ok then...")
}


let number = Number(readLine.question("Enter a number: "));
let answer2 = number % 2;
if (answer2 == 0){
    console.log(`This number is divisible by 2`);
} else{
    console.log("Isn't divisible by 2 ")
}

let number2 = Number(readLine.question("Enter a number: "));
let answer3 = number2 % 3;
if (answer3 == 0){
    console.log(`This number is divisible by 3`);
} else{
    console.log("Isn't divisible by 3 ")
}
let answer4 = number2 % 4;
if (answer4 == 0){
    console.log(`This number is divisible by 4`);
} else{
    console.log("Isn't divisible by 4 ")
}
let answer5 = number2 % 5;
if (answer5 == 0){
    console.log(`This number is divisible by 5`);
} else{
    console.log("Isn't divisible by 5 ")
}
let answer6 = number2 % 6;
if (answer6 == 0){
    console.log(`This number is divisible by 6`);
} else{
    console.log("Isn't divisible by 6 ")
}


let answer7 = readLine.question("Guess a number between 1-5: ");
console.log(answer7);

if (answer7 == "3"){
    console.log(`Congratulations you guessed the right number!!!!!!!!! `);
}  else if (answer7== "1"){
    console.log("TOO LOW TRY AGAIN")
}  else if (answer7== "2"){
    console.log("TOO LOW TRY AGAIN")
}  else if (answer7== "4"){
    console.log("TOO HIGH AGAIN")
} else if (answer7== "5"){
    console.log("TOO HIGH AGAIN")
}

