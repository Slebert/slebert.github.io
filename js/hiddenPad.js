function setScreen(x) {
	document.getElementById("screen").innerHTML = x; 
}
function keyPressed(key){
	const current = String(document.getElementById("screen").innerHTML);
	if (current.length < 9){
		document.getElementById("screen").innerHTML += key;
	}

}
function submit(){
	const submission = document.getElementById("screen").innerHTML;
	/* cheater :p */
	const options = [];
	options["000000000"] = inverted;
	options["7532378"] = slebert;
	options["69"] = sixtyNine;
	options["4848"] = bgRandColor;
	options[submission]();
}
function minMax() {
	const popOut = document.getElementById('popOut');
	if (popOut.style.display == 'inline'){
		popOut.style.display = 'none';
	}else{
		popOut.style.display = 'inline';
	}
}
function sixtyNine() {
	const nice = document.getElementById("nice")
	if(nice){
		nice.outerHTML = "";
	}else{
		const niceDivBro = document.createElement("div");
		niceDivBro.id = "nice";
		document.body.appendChild(niceDivBro);
	}
}
function inverted(){
	const body = document.getElementById("body");
	if (body.style.filter == "invert(100%)"){
		body.style = "";
	}else{
		body.style.filter = "invert(100%)"
		body.style.background = "black";
	}
}
function slebert(){
	const huhu = document.getElementById("slebert");
	if(huhu){
		huhu.outerHTML = "";
	}else{
		const slebertDiv = document.createElement("div");
		slebertDiv.id = "slebert";
		slebertDiv.style.backgroundImage = "url(images/huhu.webp)"
		slebertDiv.style.width = "492px";
		slebertDiv.style.height = "466px";
		slebertDiv.classList.add('center');
		document.getElementById("huhu1").appendChild(slebertDiv);
	}
}
