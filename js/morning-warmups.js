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

// let light = "off";
// console.log("lights are " + light);
// toggleLight();
// console.log("lights are now " + light);

// Write a JS function that will loop through the numbers 1-10 and output whether each is even or odd. Ie:
// 1 is odd
// 2 is even
// 3 ...
const evenOrOdd = function () {
    for (let i = 0; i < 10; i++) {
        console.log((i+1) % 2 === 0 ? (i+1) + " is even" : (i+1) + " is odd");
    }

    // let num = 0;
    // while (num < 10) {
    //     if ((num + 1) % 2 === 0) {
    //         console.log((num + 1) + " is even");
    //     } else {
    //         console.log((num + 1) + " is odd");
    //     }
    //     num++;
    // }
}
// evenOrOdd();

/*
* Pseudo-Code
* 1. Define a function with the name doubleChar("string")
* 2. It should return typeof string
* 3. Create a new variable to hold the returnString
* 4. Loop (for, while, do while loops) through the parameter and check
*    each character ([index]), concat that character twice to the returnString
* 5. Return the returnString
* */

const doubleChar = function (str) {
    let resStr = "";
    for (let i = 0; i < str.length; i++) {
        // if (str[i] === " ") {
        //     resStr = resStr.concat(str[i]);
        //     continue;
        // }
        resStr += str[i].repeat(2);
    }
    return resStr;
}
// console.log(doubleChar("Hello World"));
// console.log(doubleChar("String"));
// console.log(doubleChar("1234!_ "));

const fizzBuzz = function (num) {
    for (let i = 0; i < num; i++) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
            console.log("FizzBuzz");
        } else if ((i + 1) % 3 === 0) {
            console.log("Fizz");
        } else if ((i + 1) % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log((i + 1));
        }
    }
}

// fizzBuzz(30);

const fib = function (num) {
    let fibonacci = [ 0, 1 ];

    // Build fibonacci sequence with for loop
    for (let i = 0; i < num - 2 ; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i+1]);
    }
    return fibonacci;
}

// console.log(fib(10));

// Write a function that takes in a three digit integer and returns the digit in the tens
function returnTensDigit(num) {
    return Number(String(num) [String(num).length - 2]);
    // const l = Math.pow(10, Math.floor(Math.log(num)/Math.log(10)) - 1);
    // const b = Math.floor(num/l);
    // return b - Math.floor(b/10)*10;
}

// console.log(returnTensDigit(354));

// Write a function that will return an array passed sorted in reverse alphabetical order,
// when passed an array of strings. It should return null if any element within the array is not a string.
function revStringArray(strArr) {
    for (let i = 0; i < strArr.length; i++) {
        if (typeof strArr[i] !== "string") {
            return null;
        }
    }
    return strArr.sort().reverse();
}

// console.log(revStringArray([0]));
// console.log(revStringArray([ "Prim", "Imar", "Rima", "Mary"]));

// Write a JavaScript function that takes in two arguments, and returns whether the first argument
// is evenly divisible by the second argument, or not.
// Non-number arguments should have the function return null.
function isDivisible(num, denom) {
    if (isNaN(num) || isNaN(denom)) {
        return null;
    }
    return parseFloat(num) % parseFloat(denom) === 0;
}

// console.log(isDivisible(21, 7));

// Write a JavaScript function that takes in a length in inches (a number),
// and converts it to a string listing the length in feet and inches. (Example: 78 => 6’6”).
// Non-number arguments should have the function return null.
function convertInches(num) {
    if (isNaN(num)) {
        return null;
    } else {
        const ft = Math.floor(num / 12);
        const inches = num % 12;
        return [ ft, "\'", inches, "\"" ].join("");
    }
}
// console.log(convertInches(73));

// Write a function that takes in a string and returns the number of words in the string.
// Non-string inputs should return null.
function numOfWords(str) {
    if (typeof str === "string") {
        return str.split(" ").length;
    }
    return null;
}
console.log(numOfWords("Hakeem Olajuwon is a good good basketball player."))