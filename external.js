// You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let littleM = 3;
let brotherB = 5;
let hercules = 1;

let totalCost = (littleM + brotherB + hercules) * 3;
// console.log(totalCost);

//     Suppose you're working as a contractor for 3 companies:
//     Google, Amazon and Facebook, they pay you a different rate per hour.
//     Google pays $400,
//     Amazon $380,
//     and Facebook $350.
//     How much will you receive in payment for this week?
//     You worked 10 hours for Facebook,
//     6 hours for Google
//     and 4 hours for Amazon.
let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let totalGooglePay = googlePay * googleHours;
let totalAmazonPay = amazonPay * amazonHours;
let totalFacebookPay = facebookPay * facebookHours;

// console.log(totalGooglePay);
// console.log(totalAmazonPay);
// console.log(totalFacebookPay);

// console.log("Your total pay is: ", '$' + (totalGooglePay + totalAmazonPay + totalFacebookPay));

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let enrolled;
let notFull = true;
let notConflict = false;

// console.log(enrolled);
// enrolled = notFull && notConflict;
// console.log(enrolled);

//  A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.
let moreThan2 = true;
let notExpired = true;
let premiumMem = false;

let offerApplied = (moreThan2 && notExpired);

// console.log(isNaN("false")); // returns true
// console.log(isNaN(false)); // false is 0

let username = 'codeup ';
let password = 'notastrongpassword';

let passAtLeastFive = password.length >= 5;
let passNotIncludeUN = password.indexOf(username) === -1;
let usernameAtLeastTwenty = username.length <= 20;
let noLeadingTrailingWS = (username === username.trim()) &&
    (password === password.trim());

console.log(passAtLeastFive);
console.log(passNotIncludeUN);
console.log(usernameAtLeastTwenty);
console.log(noLeadingTrailingWS);