let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/group?id=4255466,5780993,2664339,5850027&units=imperial&APPID=bf1238b45835dd1dadd9096d7f55cc79";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max;
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min;
    document.getElementById('cc-humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('cc-speed').innerHTML = weatherData.wind.speed;

}

