//your JS code here. If required.
let counter=0;
let val=document.getElementById('para');
let but=document.querySelector('#butt');

function solve(){
	counter++;
	val.innerHTML=counter;
	alert(counter)
}

but.addEventListener('click',solve);