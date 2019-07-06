let request = new XMLHttpRequest();
let section = document.querySelector('section');
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

request.open('GET', requestURL);
request.send();

request.onload = function() {
    let townData = JSON.parse(request.responseText);
    showData (townData);
}
function showData(jsonObj) {
    var towns = jsonObj['name'];

    for (var i = 0; i < towns.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        myH2.textContent = towns[i].name;
        myH4.textContent = towns[i].motto;
        myPara1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara2.textContent = 'Population: ' + towns[i].currentPopulation;
        myPara3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
}


