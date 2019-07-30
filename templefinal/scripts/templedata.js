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
        var myH4 = document.createElement('h4');
        var myH6 = document.createElement('h6');
        var myPara1 = document.createElement('p');
        var imgPath = 'images/';
        imgPath += temple[i].name.toLowerCase().replace(' ', '').replace(' temple', 'temple');
        imgPath += '.jpg';
        var newImg = document.createElement('IMG');
        newImg.setAttribute("src", imgPath);
        console.log(imgPath);

    myH2.textContent = temple[i].name;
    newImg.imgPath = imgPath;
    myH4.textContent = "Upcoming Closures";
    myH6.textContent = temple[i].year;
    myPara1.textContent = '- ' + temple[i].closures;
    

    myArticle.appendChild(myH2);
    myArticle.appendChild(newImg);
    myArticle.appendChild(myH4);
    myArticle.appendChild(myH6);
    myArticle.appendChild(myPara1);
    section.appendChild(myArticle);
    }
}


