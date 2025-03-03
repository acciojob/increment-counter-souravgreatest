//your JS code here. If required.
let counter=0;
let val=document.getElementById('counter');
let but=document.querySelector('#incrementBtn');

function solve(){
	alert(counter)
	counter++;
	val.innerHTML=counter;
}

but.addEventListener('click',solve);