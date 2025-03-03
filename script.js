//your JS code here. If required.
let counter=0;
let val=document.getElementById('counter');
let but=document.querySelector('#incrementBtn');

function solve(){
	counter++;
	val.innerHTML=counter;
	alert(counter)
}

but.addEventListener('click',solve);