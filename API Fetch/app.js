const URL = "https://ipinfo.io/161.185.160.93/geo";

const addPara = document.querySelector("#ipAddress");

const btn = document.querySelector("#btn");

// using async await
const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    // console.log(data);
    addPara.innerText = data.org;
}

btn.addEventListener("click",getFacts);

// using promise chain
// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         addPara.innerText = data.org;
//     })
// }
