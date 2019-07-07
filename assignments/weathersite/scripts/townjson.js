let forecastRequest = new XMLHttpRequest();
let forecastURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf1238b45835dd1dadd9096d7f55cc79";
forecastRequest.open('Get', forecastURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var zero = weekday[d.getDay()];
    var one = weekday[(d.getDay() + 1) % 7];
    var two = weekday[(d.getDay() + 2) % 7];
    var three = weekday[(d.getDay() + 3) % 7];
    var four = weekday[(d.getDay() + 4) % 7];
    

    document.getElementById('day1').innerHTML = zero;
    document.getElementById('day2').innerHTML = one;
    document.getElementById('day3').innerHTML = two;
    document.getElementById('day4').innerHTML = three;
    document.getElementById('day5').innerHTML = four;


    document.getElementById('high1').innerHTML = forecastRequest.list[0].main.temp_max;
    document.getElementById('high2').innerHTML = forecastRequest.list[1].main.temp_max;
    document.getElementById('high3').innerHTML = forecastRequest.list[2].main.temp_max;
    document.getElementById('high4').innerHTML = forecastRequest.list[3].main.temp_max;
    document.getElementById('high5').innerHTML = forecastRequest.list[4].main.temp_max;

    document.getElementById('low1').innerHTML = forecastRequest.list[0].main.temp_min;
    document.getElementById('low2').innerHTML = forecastRequest.list[1].main.temp_min;
    document.getElementById('low3').innerHTML = forecastRequest.list[2].main.temp_min;
    document.getElementById('low4').innerHTML = forecastRequest.list[3].main.temp_min;
    document.getElementById('low5').innerHTML = forecastRequest.list[4].main.temp_min;

    var icon = new Array(4);
    icon[0] = "clouds";
    icon[1] = "clear";
    icon[2] = "rain";
    icon[3] = "snow";

    for (var i = 0; i < icon.length; i++)
        if (i == 0 || i == 1 || i == 2 || i == 3) {
            var imgPath = 'images/';
            imgPath += forecastData.list[i].weather.main.toLowerCase().replace(' ', '');
            imgPath += '.png';
            var newImg = document.getElementById('icon1', 'icon2', 'icon3', 'icon4', 'icon5');
            newImg.setAttribute("src", imgPath);
            console.log(imgPath);

            newImg.imgPath = imgPath;
        }


    

}