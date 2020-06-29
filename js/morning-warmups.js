// Write a JavaScript function that takes in the number and returns the number multiplied by 5.
function multiplyByFive(num) {
    return num * 5;
}
// console.log(multiplyByFive(5));

// Write a function that sings “Happy Birthday”
// Make it sing to whoever’s birthday it is
function singHappyBirthday(name) {
    console.log('Happy Birthday to you,\nHappy Birthday to you,',
        `\nHappy Birthday dear ${name}!\nHappy Birthday to you! 🥳`);
}
// singHappyBirthday('Vanessa');

// Write a js function that will take in a number and count from there count the next 5 numbers.
function countUp5(num) {
    for (let i = 0; i < 5; i++) {
        console.log(num++);
    }
}
// countUp5(5);

// Write a function that returns the number 7.
function returnsSeven() {
    return 7;
}
// console.log(returnsSeven());

// Write a JavaScript function that returns the length of a string passed through it.
function lengthOfString(str) {
    return str.length;
}
// console.log(lengthOfString('Howdy Codeup!'));

// Write a JavaScript function that returns the number of characters in a string passed through it.
function numOfChars(str) {
    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] != ' ') {
    //         count++;
    //     }
    // }
    // return count;
    return lengthOfString(str);
}

// console.log(numOfChars("This is a string!"));

// Write a JavaScript function that will return the diameter of a circle with a radius of the number passed through it.
function diameterOfCircle(radius) {
    return 2 * radius;
}

// console.log(diameterOfCircle(returnsSeven()));

// Write a JavaScript function that returns the square root of the number passed through it.
function squareRoot(num) {
    return Math.sqrt(num);
}

// console.log(squareroot(64));

// Write a JS function that returns the argument passed.
function returnArg(arg) {
    return arg;
}

// console.log(returnArg('This text will be returned.'));

// Write a JS function that returns a string representing the type of the argument passed through it.
function returnType(param) {
    return typeof param;
}

// console.log(returnType(7));

// Write a JavaScript function that returns the boolean true if a number passed through it is even.
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(isEven(returnsSeven()));
// console.log(isEven(44));

// Print the first ten even numbers at least 3 times (preferably using different strategies)
// function isEven() {
//     return num % 2 === 0;
// }

function printFirstTenEvenNums() {
    for (let i = 1; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

// printFirstTenEvenNums();

// Write a function that takes 2 parameters. Starting at the first and counting by the second, will output 5 steps. I.e. countFromBy(10,5) results in:
// 10
// 15
// 20
// 25
// 30
const countFromBy = function (from, by) {
    for (let i = 0; i < 5; i++) {
        console.log(from);
        from += by;
    }
}
// countFromBy(10, 5);

// Write a JS function called magic8Ball that takes in one number as a parameter.
// The return value should be one of the following strings that correlates to the number passed in.
// As I see it, yes.
// Ask again later.
// Better not tell you now.
// Cannot predict now.
// Concentrate and ask again.
// Don’t count on it.
// Outlook not so good.
// Outlook is good.

// const magicBall = function (param) {
//     let strs = ["As I see it, yes.", "Ask again later.", "Better not tell you now", "Cannot predict now.",
//         "Concentrate and ask again.", "Don't count on it.", "Outlook not so good.", "Outlook is good."];
//
//     return strs[param-1];
// }
// const luckyNumber = parseInt(prompt("Enter a number between 1 and 8"));
// alert(magicBall(luckyNumber));

const magicBall = function (param) {
    switch(param) {
        case 1:
            return "some string"
            break;
        case 2:
            return "some string"
            break;
        case 3:
            return "some string"
            break;
        case 4:
            return "some string"
            break;
        case 5:
            return "some string"
            break;
        case 6:
            return "some string"
            break;
        case 7:
            return "some string"
            break;
        case 8:
            return "some string"
            break;
    }

    // return strs[param-1];
}
// const luckyNumber = parseInt(prompt("Enter a number between 1 and 8"));
// alert(magicBall(luckyNumber));

const toggleLight = function () {
    if (light === "on") return light = "off";
    else return light = "on";
    // return !light;
}

let light = "off";
console.log("lights are " + light);
toggleLight();
console.log("lights are now " + light);