function windChillFactor() {
    var temp = 78;
    var windSpeed = 5;
    var f = windChill(temp, windSpeed);
    
    document.getElementById("chill").innerHTML = f;
}

function windChill(t, s) {
    var feel = 35.74 + 0.6215 * t - 35.75 * a + 0.4275 * t * a;
    var a = Math.pow(s, 0.16);

    return feel;
}