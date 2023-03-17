fetch('opdracht2_bijlage.json')
   .then(response => response.json())
   .then(data => {
     for(const element of data){
          for(item in element){
              document.write(`${item}: ${element[item]} <br>`) 
          }  
          document.write('<br>')
     }

      });
 