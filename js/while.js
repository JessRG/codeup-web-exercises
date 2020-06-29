let k = 0;
let num = 2;
while (k < 16) {
    console.log(num);
    num *= 2;
    k++;
}

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// console.log("allCones: " + allCones);

do {
    let soldCones = Math.floor(Math.random() * 5) + 1;

    if (allCones < soldCones) {
        console.log(`Cannot sell you ${soldCones} I only have ${allCones}...`);
    } else {
        allCones -= soldCones;
        console.log(`${soldCones} cones sold...`);
    }
} while(allCones > 0);
console.log("Yay! I sold them all!");