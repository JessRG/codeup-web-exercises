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

console.log(diameterOfCircle(returnsSeven()));