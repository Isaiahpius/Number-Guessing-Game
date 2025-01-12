// const number = [50, 60, 80, 4, 120, 400, 250, 8, 25, 1]
// const highestNumber = document.getElementById("maxNumber")


function secondLargestNumber(arr) {
    let largest = 1
    let secondLargest = 0

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest
            largest = num
        }
        else if (num > secondLargest && num < largest) {
            secondLargest = num
        }
    }
    return secondLargest
}

const arr = [50, 60, 80, 4, 120, 400, 250, 8, 25, 1]
console.log(secondLargestNumber(arr))