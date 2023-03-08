let Names = [];
let count = 0;

function name_input() {
    try {
    let name = parseInt(prompt("hoeveeel namen wil je invoeren? minimum 3 namen! please fill only an integer in!"));

    for(var i=0; i < name; i++) {
        Names.push(prompt("Voer een naam in"));
    }
    document.getElementById("namen").innerHTML = Names;
    document.getElementById("R_namen").innerHTML = Names.reverse();
    }catch(e) {
        alert("Je moet minimaal 3 namen invoeren");
        name_input();
    }
}

name_input();