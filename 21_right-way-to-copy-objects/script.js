// const userName1 = 'Kartik'
// let userName2 = userName1
// userName2 = userName2 + ' Singh'


const fruits = ['Apple', 'Banana', 'Mango']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
// const myFruits = [...fruits]

// const myFruits = [].concat(fruits)
const myFruits = fruits.slice()

const user = {
    firstName: 'Kartik',
    lastName: 'Yadav',
    pata: {
        city: 'Delhi',
        pincode: 989888 
    },
    subject: ['Physics', 'CS', 'Maths']
}

// const user2 = user

// user2.lastName = 'Singh'
// user.firstName ='Aman'


//shallow Copy

// const user2 = {}
// Object.assign(user2, user)
const user2 = {...user}