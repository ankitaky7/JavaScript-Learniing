let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

const sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);

const prod = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(prod);