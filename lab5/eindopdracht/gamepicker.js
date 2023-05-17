var container = document.getElementById('output');

function home(){
    fetch('games.json')
   .then(response => response.json())
   .then(data => {
        for(const element of data){
            
                document.getElementById('output').innerHTML+=` name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating}`;
                // console.log(element.name);
                document.getElementById('output').innerHTML+="<br>"
                document.getElementById('output').innerHTML+="<br>"
                document.getElementById('output').innerHTML+="<br>"
            } 
        });
 
 }

 function genre_sort(naam){
    document.getElementById('output').innerHTML="<br>"
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
         for(const element of data){
             if(element.genre == naam){
                 document.getElementById('output').innerHTML+=` name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating}`;
                 // console.log(element.name);
                 document.getElementById('output').innerHTML+="<br>"
                 document.getElementById('output').innerHTML+="<br>"
                 document.getElementById('output').innerHTML+="<br>"
             } }
         });
 }
 



























 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}