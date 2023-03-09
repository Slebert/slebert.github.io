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
	options["777"] = jackpot;
	options["123"] = underTheSeaBert;
	options["000000000"] = inverted;
	options["7532378"] = slebert;
	options["69"] = sixtyNine;
	options["4848"] = bgRandColor;
	options[submission]();
}
function minMax(id) {
	const popOut = document.getElementById(id);
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
function underTheSeaBert(){
	const spanCheck = document.getElementById("dot");
	if (spanCheck){
		document.getElementById("body").classList.remove("bgUnderTheSeaBert");
		document.getElementById("body").classList.add("bgLinearGradient");
		document.getElementById("wrapper").innerHTML = "";
	}else{
		document.getElementById("body").classList.remove("bgLinearGradient");
		document.getElementById("body").classList.add("bgUnderTheSeaBert");
		for (let i = 0; i < 14; i++){
			const div = document.createElement("div");
			const span = document.createElement("span");
			span.classList.add('dot');
			div.innerHTML = '<span id="dot" class="dot"></span>';
			document.getElementById("wrapper").appendChild(div);
		}
	}
}
function jackpot(){
	const huhu1 = document.getElementById("huhu1");
	if (huhu1.style.animationName != "jackpot"){
		huhu1.style.animationName = "jackpot";
	}else{
		huhu1.style.animationName = "move";
	}
}