
// Function Definition
function introduceMe(username, profession = 'Web Developer', age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);

    console.log('Hi,');
    console.log(`My name is ${username || 'Coder'}.`);
    console.log(`I am a ${profession}.`);   
    console.log(`I am ${age} years old.`);
}
      
// //                  Function Call
// const returnValue = introduceMe()   

introduceMe('Kartik', 'Software Engineer', 21)
introduceMe('Ram', 'Mechanical Engineer', 25)
introduceMe()