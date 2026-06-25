const evenNumbers = [0, 2, 4, 6, 8]
const animals = ['Dog', 'Cat', 'Horse' , 'Cow' ]
const oddNumbers = [1, 3, 5, 7]

// evenNumbers.shift()
// evenNumbers.unshift(0)

const addedArray1 = evenNumbers.concat(animals)
const addedArray2 = animals.concat(evenNumbers, oddNumbers)

const elementIndex = animals.indexOf('Horse')
const isIncluded = animals.includes('Cow')

const elementReverse = oddNumbers.reverse()
// const elementSort = animals.sort()

const elementSlice = evenNumbers.slice(2, 4)
console.log(elementSlice);

// const elementSplice = oddNumbers.splice(2, 2)
// console.log(elementSplice);

const elementSplice = animals.splice(2, 2)
console.log(elementSplice);

// animals.splice(2, 1, 'asfgae')