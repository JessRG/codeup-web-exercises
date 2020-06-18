console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?");

if(userAnswer) {
    alert("Great, "+ color + " is my favorite color too!");
}

// // You have rented some movies for your kids:
// // The little mermaid (for 3 days),
// // Brother Bear (for 5 days, they love it),
// // and Hercules (1 day, you don't know yet if they're going to like it).
// // If price for a movie per day is $3, how much will you have to pay?

let littleM = parseInt(prompt("How many days did you rent The Little Mermaid?"));
let brotherB = parseInt(prompt("How many days did you rent Brother Bear?"));
let hercules = parseInt(prompt("How many days did you rent Hercules?"));

let totalCost = (littleM + brotherB + hercules) * 3;
alert("Total Cost: $" + totalCost);

// //     Suppose you're working as a contractor for 3 companies:
// //     Google, Amazon and Facebook, they pay you a different rate per hour.
// //     Google pays $400,
// //     Amazon $380,
// //     and Facebook $350.
// //     How much will you receive in payment for this week?
// //     You worked 10 hours for Facebook,
// //     6 hours for Google
// //     and 4 hours for Amazon.
const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;

let googleHours = prompt("How many hours did you work for Google this week?");
let amazonHours = prompt("How many hours did you work for Amazon this week?");
let facebookHours = prompt("How many hours did you work for Facebook this week?");

let totalGooglePay = googlePay * googleHours;
let totalAmazonPay = amazonPay * amazonHours;
let totalFacebookPay = facebookPay * facebookHours;

alert("Your total pay is: $" + (totalGooglePay + totalAmazonPay + totalFacebookPay).toFixed(2) + " for rental charges ($3 per movie per day.)");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let isClassOpen = true;
let isScheduleOpen = false;

enrolled = isClassOpen && isScheduleOpen;
alert("enrolled: " + enrolled);

//  A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.
let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired.");
let isPremiumMember = confirm("Press OK if you are a premium member.");

let offerApplied = (numberItemsPurchased > 2 && isOfferExpired) || isPremiumMember;

alert("offerApplied: " + offerApplied);