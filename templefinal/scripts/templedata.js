let request = new XMLHttpRequest();
let section = document.querySelector('section');
let requestURL = "https://lizsummerhays.github.io/templefinal/json/temples.json";

request.open('GET', requestURL);
request.send();

request.onload = function() {
    let templeData = JSON.parse(request.responseText);
    console.log(templeData);
    showData (templeData);
    
}
function showData(jsonObj) {
    var temple = jsonObj['temple'];

    for (var i = 0; i < temple.length; i++) {
        var myArticle = document.createElement('article');
        myArticle.id = 'templeArticle';
        var myH2 = document.createElement('h2');
        var myH6 = document.createElement('h6');
        var myPara1 = document.createElement('p');

    myH2.textContent = temple[i].name + 'Closures';
    myH6.textContent = temple[i].year;
    myPara1.textContent = temple[i].closures;
    

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH6);
    myArticle.appendChild(myPara1);
    section.appendChild(myArticle);
    }
}


