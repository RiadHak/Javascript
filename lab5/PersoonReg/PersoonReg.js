var array = [];
var Container = document.getElementById('Container');
fetch('opdracht1_bijlage.json')
   .then(response => response.json())
   .then(data => {
       for(var x in data){
            document.write(`${x}: ${data[x]}<br>`)
       }
      });
 