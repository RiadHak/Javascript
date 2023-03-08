var array2 = [1,2,3,4,5,6,7,8,9,10];
var array = [2,4,6,8,10,12,14,16,18,20];

function rekenen(arr,arr2) {
    for(var i=0; i < arr.length; i++) {
        document.getElementById("plus").innerHTML += `${arr[i]} + ${arr2[i]} = ${arr[i] + arr2[i]}` + "<br>";
    }
    for(var i=0; i < arr.length; i++) {
        document.getElementById("min").innerHTML += `${arr[i]} - ${arr2[i]} = ${arr[i] - arr2[i]}` + "<br>";
    }
    for(var i=0; i < arr.length; i++) {
        document.getElementById("keer").innerHTML += `${arr[i]} * ${arr2[i]} = ${arr[i] * arr2[i]}` + "<br>";
    }
    for(var i=0; i < arr.length; i++) {
        document.getElementById("delen").innerHTML += `${arr[i]} / ${arr2[i]} = ${arr[i] / arr2[i]}` + "<br>";
    }
}

rekenen(array,array2);