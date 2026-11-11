// setTimeout(function() {
//     console.log("this will execute later");
// }, 3000);

// console.log("world");
// console.log("three");

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

getCheese((cheese) => {
    console.log("got the cheese", cheese);
});