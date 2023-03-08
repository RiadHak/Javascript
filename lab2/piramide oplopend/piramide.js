var getal = prompt("Geef een getal in");

function piramide(getal) {
    var result = "";
    for (var i = 0; i <= getal; i++) {
        for (var j = 1; j <= i; j++) {
            result += j;
        }
        result += "<br>";   
    
    }
    document.getElementById("piramide").innerHTML = result;
}
piramide(getal);