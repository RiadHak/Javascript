var container = document.getElementById('container');



function button_creation(){
    for(var i =1; i<31; i++){
        var button = document.createElement("button");
        var node = document.createTextNode(i);
        button.setAttribute("id",i);
        button.appendChild(node);
        container.appendChild(button);
        button.style.backgroundColor = 'green';
        document.getElementById(i).addEventListener("click", change_color.bind(undefined, i))
    }
}

function change_color(id){
    console.log(id)

    document.getElementById(id).style.backgroundColor = 'red';
}

button_creation()