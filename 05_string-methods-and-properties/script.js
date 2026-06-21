// const message = 'Hello'
const message = 'Hello World!'
const faltuMessage = '          Hi, I am Kartik.          '
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')

const lastFourDigits = '7856'
const maskedAccountNumber = lastFourDigits.padStart(16, '*')

const capitalMessage = message.toUpperCase()
const bankBalance = 9877

// const templateString = `Last four digit of my account number is ` + lastFourDigits

// const templateString = `Last four digit of my account number is ` .concat(lastFourDigits)
const concatenatedString = `Last four digit of my account number is` .concat(' ', lastFourDigits)
const templateString = `My account number is ${lastFourDigits.padStart(16, '*')}` 
const templateString2 = `I have $${bankBalance} in my account.`

const addedString = 'I have ₹' + bankBalance + ' ' + 'in my account'
