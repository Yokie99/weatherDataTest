let time = document.getElementById("time");
let temp = document.getElementById("temp");
let feels = document.getElementById("feels");
let tempMax = document.getElementById("tempMax");
let tempMin = document.getElementById("tempMin");
let pressure = document.getElementById("pressure");

function Fiveday(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.77618697558095&lon=-121.21037327207077&appid=97377d43410276df49e37fbdf9218007&units=imperial')
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
