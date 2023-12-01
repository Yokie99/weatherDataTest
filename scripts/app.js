let time = document.getElementById("time");
let temp = document.getElementById("temp");
let feels = document.getElementById("feels");
let tempMax = document.getElementById("tempMax");
let tempMin = document.getElementById("tempMin");
let pressure = document.getElementById("pressure");

function Fiveday(){
    fetch('')
    .then((response)=> {
        return response.json();
    })
    .then((data) => {
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        console.log(data.wind.speed);
    })
}

Fiveday();
