const calculate = (a, b, operation) => {
    return operation(a,b);
}

// method 1
const addtion = calculate(3, 4, function(num1, num2){
    return num1 + num2;
})

console.log(addtion);

// method 2
const subtraction = (a, b) => a - b;

const subResult = calculate(5, 2,subtraction);
console.log(subResult);

// method 3
function multiply(a, b){
    return a * b;
}

const multi = calculate(2, 3, multiply);
console.log(multi);

// array Callback functions
const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];
const firstNeg = (num) => {
    return num < 0;
}
const result = a.find(firstNeg);

