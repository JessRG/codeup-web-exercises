"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
const analyzeColor = function (name) {
    if (name === 'blue') {
        return "blue is the color of the sky";
    } else if (name === 'red') {
        return "Strawberries are red";
    } else if (name === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "Please choose a color from the list: blue, red, cyan";
    }
}
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
const checkRandColor = function (color) {
    console.log(color + " is the randomly selected color.");
}
checkRandColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor) {
    case 'red':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'orange':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'yellow':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'green':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'blue':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'indigo':
        console.log(randomColor + " is the randomly selected color.");
        break;
    case 'violet':
        console.log(randomColor + " is the randomly selected color.");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
const color = prompt("Enter a color ");
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const calculateTotal = function (luckyNum, totalAmt) {
    switch(luckyNum) {
        case 1:
            return (totalAmt - totalAmt * .1).toFixed(2);
        case 2:
            return (totalAmt - totalAmt * .25).toFixed(2);
        case 3:
            return (totalAmt - totalAmt * .35).toFixed(2);
        case 4:
            return (totalAmt - totalAmt * .5).toFixed(2);
        case 5:
            return (0).toFixed(2);
        default:
            return (totalAmt).toFixed(2);
    }
}
console.log(calculateTotal(0, 100)); // 100
console.log(calculateTotal(1, 100)); // 90
console.log(calculateTotal(2, 100)); // 75
console.log(calculateTotal(3, 100)); // 65
console.log(calculateTotal(4, 100)); // 50
console.log(calculateTotal(5, 100)); // 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
const totalBill = parseFloat(prompt("How much was your total bill?"));
alert(`Your lucky number is ${luckyNumber}`+
    `\nYour price before discount $${totalBill}`+
    `\nYour price after the discount $${calculateTotal(luckyNumber, totalBill)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
const userChoice = confirm("Would you like to enter a number?");
if (userChoice) {
    const userNum = parseInt(prompt("Please enter a number"));
    if (isNaN(userNum)) {
        alert("You entered a value that is not a number");
    } else {
        alert( (userNum % 2 === 0) ? "The number you entered is even." : "The number you entered is odd." );
        alert(`The number you entered with 100 added to it is ${userNum + 100}.`);
        alert((userNum > 0)? 'The number you entered is positive.' : 'The number you entered is negative.');
    }
} else {
    // do nothing
}
