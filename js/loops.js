// let x = 7;
// let dollars = 7;
// let times = 0;

// if (dollars > 0) {
//     console.log("We have money!");
//     // do this
// } else {
//     console.log("We are broke");
//     // do that
// }

// while (dollars > 0) {
//     console.log("We have money!");
//     dollars--;
// }
// console.log("We are broke.");

// while (times < 10) {
//     times++;
//     console.log("We have done this " + times + " times.");
// }
// console.log("We are done");

// dollars--;
//
// if (dollars > 0) {
//     console.log("We have money!");
//     // do this
// } else {
//     console.log("We are broke");
//     // do that
// }

// let bottles = 99;
//
// while (bottles > 0) {
//     console.log(bottles + " bottles of beer on the wall");
//     console.log(bottles + " bottles of beer");
//     console.log("Take 1 down\nPass it around");
//     bottles--;
//     console.log(bottles + " bottles of beer on the wall");
//     console.log(" ");
// }

// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// alert("Let's play a guessing game");
// let guess = prompt("I chose a number between 1 and 10. Guess what it is.");
// if (guess == x) {
//     alert("You guessed the number!");
// } else {
//     alert("No that wasn't it.");
// }
// console.log("We are done");

// while (guess != x) {
//     alert("No that wasn't it.");
//     guess = prompt("I chose a number between 1 and 10. Guess what it is.");
// }
// alert("You guessed the number!!");
// console.log("We are done");

// while (condition) {
//     // update the condition and do other stuff
// } //done
//
// do {
//     // update the condition and do other stuff
// } while (condition);
// let guess;
// alert("I chose a number between 1 and 10");
// do {
//     guess = prompt("I chose a number between 1 and 10. Can you guess what it is?");
//     // if (guess == x) {
//     //     alert("You guessed the number!!");
//     //     break;
//     // }
//     if (guess != x) {
//         alert("No, that wasn't it.");
//         continue;
//     } else {
//         alert("You guessed the number!!");
//         break;
//     }
// } while (guess != x);
// // alert("You guessed the number!!");
// console.log("We are done");
// let x = 0;
// while (x < 10) {
//     console.log(x+1);
//     x++;
// }

// for (let x = 0; x < 10; x++) {
//     console.log(x+1);
// }
//
// for (let monkeys = 9; monkeys > 0; monkeys--) {
//     console.log(monkeys + " little monkeys jumping on the bed");
//     console.log("one fell off and bonked his head");
//     console.log("Momma called the doctor and the doctor said");
//     console.log("No more monkeys jumping on the bed!");
//     console.log(" ");
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let multiply = function(a, b) {
    let answer = 0; // accumulator
    for (let i = 0; i < b; i++) {
        answer += a;
        console.log(answer);
    }
}
multiply(4, 5);