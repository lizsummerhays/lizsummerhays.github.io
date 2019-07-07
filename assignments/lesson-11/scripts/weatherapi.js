let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf1238b45835dd1dadd9096d7f55cc79";
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

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    for (i = 0; i < weekday.length; i++)
        if (i == 0) {
            document.getElementById('day1').innerHTML = n;
        }

}