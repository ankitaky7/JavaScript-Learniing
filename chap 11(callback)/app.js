console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000); //timeout;

console.log("three");
console.log("four"); 

// callbacks
function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(5, 2, (a,b) => {
    console.log(a + b);
});


// set Timeout
const hello = () => {
    console.log("hello");
};

setTimeout = (hello, 3000);