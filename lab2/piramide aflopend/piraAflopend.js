var getal = prompt("Geef een getal in");

function piramide(getal) {
    var result = "";
    for (var i = getal; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            result += j;
        }
        result += "<br>";   
    }
    document.getElementById("aflopend").innerHTML = result;
}
piramide(getal);