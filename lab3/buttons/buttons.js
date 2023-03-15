var color_array = ['green','red','blue'];

var container = document.getElementById('container')
var bgr = document.getElementById('bgc')
function button_creation(){
    for(var i=0; i<3; i++){
        var button = document.createElement("button");
        var node = document.createTextNode(color_array[i]);
        button.setAttribute("id",i);
        button.appendChild(node);
        container.appendChild(button);
        button.style.backgroundColor = color_array[i]
        document.getElementById(i).addEventListener("click", change_color.bind(undefined, color_array[i]))
    }

}

function change_color(color){
    console.log(color)

    document.getElementById('bgc').style.backgroundColor = color;
}


button_creation()