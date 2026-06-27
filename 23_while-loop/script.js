console.log('Program Started');

// debugger
// let i = 0
// // while(i < 10) {
// //     console.log('Hii');
// //     i = i + 1
// // }

// while(i < 10) {
//     console.log(i);
//     i = i + 1
// }


// num = i
// let i = 1
// while(i <= 100) {
//     console.log(i);
//     i++
// }

const friends = ['Aman', 'Raj', 'Rohan', 'Prem', 'Rahul', 'Kartik', 'Raghav']
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// let i = 0

// while( i < friends.length) {
//     console.log(friends[i]);
//     i++
// }

let i = 0

while( i < friends.length) {
    console.log(`${i + 1}. ${friends[i]} Yadav`);
    friends[i] = friends[i] + ' Yadav'
    i++
}



// let i = 0

// while( i < friends.length) {
//     console.log(`${i + 1}. ${friends[i]}`);
//     friends[i] = friends[i] + ' Yadav'
//     i++
// }


console.log('Program Ended');