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
            var myP = document.createElement('p');
            myP.id = 'templeP';
            var imgPath = 'images/';
            imgPath += temple[i].name.toLowerCase().replace(' ', '');
            imgPath += '.jpg';
            var newImg = document.createElement('IMG');
            newImg.setAttribute("src", imgPath);
            console.log(imgPath);

        newImg.imgPath = imgPath;
        
        myP.appendChild(newImg);
        section.appendChild(myP);
    }
}


