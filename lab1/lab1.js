
function get_num(){
	var getal = document.getElementById('number').value;
	Fibonacci(getal);
}
function Fibonacci(num){
	var before = 0;
	var actual = 1;
	var next = 1;
	var list = [];
	for(let i = 0; i < num; i++){
		list.push(next);
		before = actual + next;
		actual = next;
		next = before;
	}
	document.getElementById('head').innerHTML=list ;
}

Fibonacci(get_num);

