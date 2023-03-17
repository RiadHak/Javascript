var container = document.getElementById('output');

function test(){
   container.innerHTML='';
   var info = document.getElementById('user').value;
   fetch('opdracht2_bijlage.json')
   .then(response => response.json())
   .then(data => {
     for(const element of data){
         if(element.leeftijd > info){
            for(item in element){
              container.innerHTML +=  `${item}: ${element[item]} <br>`;
           }  
         }
         container.innerHTML += '<br>'
     }
      });

}


 
