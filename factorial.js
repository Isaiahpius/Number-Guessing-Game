function factorial(n) {
    const expectedResult = document.getElementById('factorial')
    let result = 1

    for (let i = 2; i <= n; i++) {
        result *= i
    }
    expectedResult.textContent = result
    return result
}

console.log(factorial(5))   // expected result is 120
console.log(factorial(10))  // expected result is 3268800