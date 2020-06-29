
let input;
while(true) {
    input = parseInt(prompt("Enter an odd number between 1 and 50"));
    if (input > 0 && input < 50 && input % 2 !== 0) {
        break;
    } else {
        continue;
    }
}

console.log(`Number to skip is: ${input}\n\n`);

let i = 0;
while (i < 50) {
    if (i === input) {
        console.log(`Yikes! Skipping number: ${input}`);
        i++;
        continue; // skips any code below to begin next iteration
    }
    if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
    i++;
}