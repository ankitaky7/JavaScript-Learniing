// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data1");
//         resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data2");
//         resolve("success");
//         }, 4000);
//     });
// }

// // promise chain  
// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {});
// });



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("promise was rejected", err);
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error has occured");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api();
//     await api();
//     }

function getData(dataId){ 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
    });
}

//async-await
async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
}

// IIFE (Immediately Invoked Function Expression)
(async function (){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
})();

// Promise chain
// console.log("getting data1....");
// getData(1)
// .then((res) => {
//     console.log("getting data2....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3....");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });


// //callback hell
// getData(1, () => {
//     console.log("getting data1 . . . .");
//     getData(2, () => {
//         console.log("getting data2 . . . .");
//         getData(3, () => {
//             console.log("getting data3 . . . .");
//             getData();
//         });
//     });
// });