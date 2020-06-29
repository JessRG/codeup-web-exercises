const showMultiplication = function (num) {
    for(let i = 0; i < 10; i++) {
        console.log(`${num} x ${i+1} = ${num*(i+1)}`);
    }
}
showMultiplication(7);

const isEvenOrOdd = function () {
    let random;
    for (let i = 0; i < 10; i++) {
        random = Math.floor((Math.random() * 200) + 20);
        console.log(`${random} is ${ random %2 === 0 ? 'even' : 'odd'}`);
    }
}
isEvenOrOdd();

const incrementWithNums = function () {
    for (let i = 0; i < 10; i++) {
        let str = '';
        for(let j = 0; j < i; j++) {
            str = str.concat(i.toString());
        }
        if (i > 0) console.log(str);
    }
}
incrementWithNums();

const decrementBy5 = function () {
    for (let i = 100; i > 0; i-=5) {
        console.log(i);
    }
}
decrementBy5();