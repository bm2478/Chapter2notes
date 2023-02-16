const readLine = require('readline-sync');

//1
let number1 =Number (readLine.question("Enter first number: "));
let number2 =Number (readLine.question("Enter second number:"));
let answer1 = number1 + number2;
console.log(`${number1} + ${number2} = ${answer1}`);

//2
let number3 =Number (readLine.question("Enter first number: "));
let number4 =Number (readLine.question("Enter second number:"));
let answer2 = number3 - number4;
console.log(`${number3} - ${number4} = ${answer2}`);

//3
let number5 =Number (readLine.question("Enter first number: "));
let number6 =Number (readLine.question("Enter second number:"));
let answer3 = number5 * number6;
console.log(`${number5} * ${number6} = ${answer3}`);

//4
let number7 =Number (readLine.question("Enter first number: "));
let number8 =Number (readLine.question("Enter second number:"));
let answer4 = number7 / number8;
console.log(`${number7} / ${number8} = ${answer4}`);

//5
let number9 =Number (readLine.question("Enter first number: "));
let number10 =Number (readLine.question("Enter second number:"));
let answer5 = number9 % number10;
console.log(`${number9} divided by ${number10} has the remainder of ${answer5}`);

//6
let name = readLine.question("Enter your name: ");
let lastname = readLine.question("Enter your last name: ");
console.log(`Greetings ${lastname},${name}`);

//7
let title = readLine.question("Enter your title (Mr.,Mrs.,Ms., etc): ");
let lastname1 = readLine.question("Enter your last name: ");
let suffix = readLine.question("Enter if you have (jr,111,etc): ");
console.log(`Greetings ${title} ${lastname1}, ${suffix}`);

//8
let stnumber = readLine.question("Enter street number: ");
let stname = readLine.question("Enter street name: ");
let sttype = readLine.question("Enter street type (Ave,Blvd,etc): ");
let city = readLine.question("Enter city: ");
let state = readLine.question("Enter state: ");
let zipcode = readLine.question("Enter zipcode: ");
console.log(`${stnumber} ${stname} ${sttype} ${city},${state} ${zipcode}`);

//9
let number11 =Number (readLine.question("Enter first number: "));
let number12 =Number (readLine.question("Enter second number:"));
let answer6 = number11 / number12;
let answer7 = number11 % number12;
console.log(`${number11} divided by ${number12} = ${Math.floor(answer6)} , with remainder of ${answer7}`);

//10
let number13 =Number (readLine.question("Enter first number: "));
let number14 =Number (readLine.question("Enter second number:"));
if(number13 > number14){
    console.log(`${number13} is larger than ${number14}`)
}
if(number13 < number14){
    console.log(`${number13} is not larger than ${number14}`)
}

//11
let number15 =Number (readLine.question("Enter first number: "));
let number16 =Number (readLine.question("Enter second number:"));
if(number15 < number16){
    console.log(`${number15} is smaller than ${number16}`)
}
if(number15 > number16){
    console.log(`${number15} is not smaller than ${number16}`)
}