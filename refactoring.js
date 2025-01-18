// var numbers = [1, 2, 3, 4, 5];
// var doubledNumbers = [];


// for (var i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }


// var evenNumbers = [];
// for (var i = 0; i < doubledNumbers.length; i++) {
//   if (doubledNumbers[i] % 2 === 0) {
//     evenNumbers.push(doubledNumbers[i]);
//   }
// }

// console.log("Doubled Numbers:", doubledNumbers);
// console.log("Even Numbers:", evenNumbers);



    // ES6 Standard

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17, 19]
let doubledNumber = []
let evenNumber = []
let oddNumbers = []

for (let index = 0; index < arrayOfNumbers.length; index++) {
    doubledNumber.push(arrayOfNumbers[index] * 2);
}

// let evenNumber = []
for (let index = 0; index < doubledNumber.length; index++) {
    if (doubledNumber[index] % 2 === 0) {
        evenNumber.push(doubledNumber[index])
    } else {
        oddNumbers.push(doubledNumber[index])
    }
}


// let oddNumbers = []
// for (let index = 0; index < doubledNumber.length; index++) {
//     if (doubledNumber[index] % 2 === 1)
//         oddNumbers.push(doubledNumber[index])
// }

console.log(arrayOfNumbers)
console.log(doubledNumber)
console.log(evenNumber)
console.log(oddNumbers)
