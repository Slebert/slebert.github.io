function setScreen(x) {
	document.getElementById("screen").innerHTML = x; 
}
function keyPressed(key){
	const current = String(document.getElementById("screen").innerHTML);
	if (current.length < 10){
		document.getElementById("screen").innerHTML += key;
	}

}
function submit(){
	const submission = document.getElementById("screen").innerHTML;
	/* cheater :p */
	switch(submission){
		case '69':
			break;
		case '420':
			break;
		case '4848':
			bgRandColor();
			break;
	}
}
function minMax() {
	if (document.getElementById('popOut').style.display == 'inline'){
		document.getElementById('popOut').style.display = 'none';
	}else{
		document.getElementById('popOut').style.display = 'inline';
	}
}
