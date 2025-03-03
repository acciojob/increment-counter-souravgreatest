//your JS code here. If required.
let counter=0;
let val=document.getElementbyId('para');
let but=document.getElementbyId('butt');

function solve(){
	counter++;
	val.textContent=counter;
	alert(counter)
}

but.addEventListener('click',solve);