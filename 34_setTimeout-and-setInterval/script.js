const timer1 = setTimeout(`console.log("Hi-1")`, 1000);
const timer2 = setTimeout(`console.log("Hi-2")`,  0);
const timer3 = setTimeout(`console.log("Hi-3")`, 3000);
const timer4 = setTimeout(a, 4000, 'sg', 87, 52, 'sdg', [5, 7]);

// const timer1 = setInterval(`console.log("Hi-1")`, 1000);
// const timer2 = setInterval(`console.log("Hi-2")`,  0);
// const timer3 = setInterval(`console.log("Hi-3")`, 3000);
// const timer4 = setInterval(a, 4000, 'sg', 87, 52, 'sdg', [5, 7]);

// clearTimeout(timer3)

function a () {
    console.log(arguments);
    // console.log('Hello World!');
}

console.log('dog');


setTimeout(function() {
    // debugger
    console.log('Hi-1');
}, 0)

console.log('Hi-2');