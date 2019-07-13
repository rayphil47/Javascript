var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul	=	document.querySelector('ul');

function inputLength(){
	return input.value.length;
}

button.addEventListener("click", function(){

	if(input.value.length > 0) {
	var	li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
})

input.addEventListener("keypress", function(event){

	if(input.value.length > 0 && event.which === 13) {
	var	li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
})
