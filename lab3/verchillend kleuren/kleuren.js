var container = document.getElementById('container');
var colors = ['black','blue','purple','red','green'];


function button_creation(){
    for(var i =1; i<31; i++){
        var button = document.createElement("button");
        var node = document.createTextNode(i);
        button.setAttribute("id",i);
        button.setAttribute("name", 5)
        button.appendChild(node);
        container.appendChild(button);
        button.style.backgroundColor = 'green';
        document.getElementById(i).addEventListener("click", change_color.bind(undefined, i))
    }
}

function change_color(id){
    console.log(id)
    var clicks = document.getElementById(id).name;
    console.log(clicks);
    
    document.getElementById(id).style.backgroundColor = colors[document.getElementById(id).name-2];
    document.getElementById(id).setAttribute("name", clicks = clicks -1)
}

button_creation()