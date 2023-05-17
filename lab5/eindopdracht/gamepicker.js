var cartlijst = [];
var container = document.getElementById('output');
var items = [];
function home(){
    items =[];
    document.getElementById('output').innerHTML="<br>";
    fetch('games.json')
   .then(response => response.json())
   .then(data => {
    items = [];
    document.getElementById('output').innerHTML="<br>";
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
        var num=0;
         for(const element of data){
             
            var item = [];
        
            document.getElementById('output').innerHTML+=`
                <div class="item" id="item">
                    <input class="messageCheckbox" type="checkbox" id="${num}" name="checkbox" value="${num}">
                    <label> name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating} </label>
                    <br><br><br>
                </div>
                `;
            item.push(element.title,element.price,element.genre,element.rating);
            items.push(item);
            num =num + 1;
              }

         })
         document.getElementById('output').innerHTML+=`<button class="sub_button" type="submit" onclick="get_elements()">Submit</button>`;
        
        })}


 function genre_sort(naam){
    items = [];
    document.getElementById('output').innerHTML="<br>";
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
        var num=0;
         for(const element of data){
             
             var item = [];
             if(element.genre == naam){
                 document.getElementById('output').innerHTML+=`
                    <div class="item" id="item">
                        <input class="messageCheckbox" type="checkbox" id="${num}" name="checkbox" value="${num}">
                        <label> name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating} </label>
                        <br><br><br>
                    </div>
                    `;
                item.push(element.title,element.price,element.genre,element.rating);
                items.push(item);
                num =num + 1;
             } }
         });
        document.getElementById('output').innerHTML+=`<button class="sub_button" type="submit" onclick="get_elements()">Submit</button>`;

 }

 function get_elements(){
    alert("item/s added to u cart");
     for(var i=0; i<36; i++){
        var form = document.getElementById(`${i}`);
        if (form.checked == true) {
            cartlijst.push(items[i]);
            console.log(cartlijst);
         }
     }

 }
 
function prijs_filter(){
    items = [];
    var inp = document.getElementById('prijs');
    console.log(inp);

    document.getElementById('output').innerHTML="<br>";
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
        var num=0;
         for(const element of data){
             var item = [];
             if(element.price <= inp.value){
                 document.getElementById('output').innerHTML+=`
                    <div class="item" id="item">
                        <input class="messageCheckbox" type="checkbox" id="${num}" name="checkbox" value="${num}">
                        <label> name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating} </label>
                        <br><br><br>
                    </div>
                    `;
                 item.push(element.title,element.price,element.genre,element.rating);
                items.push(item);
            num =num + 1;
             } }
         });
        document.getElementById('output').innerHTML+=`<button class="sub_button" type="submit" onclick="get_elements()">Submit</button>`;
        

}

function rating_filter(){
    items = [];
    var inp = document.getElementById('rating');
    console.log(inp);

    document.getElementById('output').innerHTML="<br>";
    alert("item/s added to u cart");
    fetch('games.json')
    .then(response => response.json())
    .then(data => {
        var num=0;
         for(const element of data){
             var item = [];
             if(element.rating <= inp.value){
                 document.getElementById('output').innerHTML+=`
                    <div class="item" id="item">
                        <input class="messageCheckbox" type="checkbox" id="${num}" name="checkbox" value="${num}">
                        <label> name : ${element.title}<br> price : ${element.price}<br>  genre:${element.genre}<br> rating: ${element.rating} </label>
                        
                    </div>
                   
                    `;
                 item.push(element.title,element.price,element.genre,element.rating);
                items.push(item);
            num =num + 1;
             } }
         });
        document.getElementById('output').innerHTML+=`<button class="sub_button" type="submit" onclick="get_elements()">Submit</button>`;

}




function cart(){
    document.getElementById('carOutPut').innerHTML="<br>";
    document.getElementById('output').innerHTML="<br>";
    var CheckB = document.getElementById('messageCheckbox');
    var total = 0;
    console.log(CheckB)
    console.log(items[0]);
    cartlijst.forEach((item, index)=>{
        total = item[1] + total
        document.getElementById('carOutPut').innerHTML+=`
                    <div class="cart" id="cart">
                        <div> name : ${item[0]}<br> price : ${item[1]}<br>  genre:${item[2]}<br> rating: ${item[3]} </div>
                        <br>
                    </div>

                    `;
    })
    document.getElementById('totaal').innerHTML+=`<div class="total">totale bedrag: ${total}</div>`;

}

// home();
























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