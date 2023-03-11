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
	options["64"] = lichessTV;
	options["lichessTV"] = lichessTV;
	options["777"] = jackpot;
	options["JACKPOT!"] = jackpot;
	options["123"] = underTheSeaBert;
	options["SeaBert"] = underTheSeaBert;
	options["000000000"] = inverted;
	options["7532378"]= slebert;
	options["SLEBERT"]= slebert;
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
	setScreen("nice!");
	const nice = document.getElementById("nice")
	/*if(nice){
		nice.outerHTML = "";
	}else{
		const niceDivBro = document.createElement("div");
		niceDivBro.id = "nice";
		document.body.appendChild(niceDivBro);
	}
	*/
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
		setScreen("SLEBERT");
	}
}
function underTheSeaBert(){
	const spanCheck = document.getElementById("dot");
	if (spanCheck){
		document.getElementById("body").classList.remove("bgUnderTheSeaBert");
		document.getElementById("body").classList.add("bgLinearGradient");
		document.getElementById("wrapper").innerHTML = "";
		setScreen("123");
	}else{
		document.getElementById("body").classList.remove("bgLinearGradient");
		document.getElementById("body").classList.add("bgUnderTheSeaBert");
		for (let i = 0; i < 15; i++){
			const div = document.createElement("div");
			const span = document.createElement("span");
			span.classList.add('dot');
			div.innerHTML = '<span id="dot" class="dot"></span>';
			document.getElementById("wrapper").appendChild(div);
		}
		setScreen("SeaBert");
	}
}
function jackpot(){
	
	const huhu1 = document.getElementById("huhu1");
	if (huhu1.style.animationName != "jackpot"){
		huhu1.style.animationName = "jackpot";
		setScreen("JACKPOT!");
	}else{
		huhu1.style.animationName = "move";
		setScreen("777");
	}
}
function lichessTV(){
	const check = document.getElementById("lichessTV");
	if (check){
		check.outerHTML = "";
		setScreen("64");
	}else{
		const div = document.createElement("div");
		div.innerHTML = "<iframe src='https://lichess.org/tv/frame?theme=wood4&bg=dark' style='width: 400px; height: 444px;' allowtransparency='true' frameborder='0'></iframe>";
		div.id = 'lichessTV';
		div.classList.add("center");
		document.getElementById("huhu1").appendChild(div);
		setScreen("lichessTV");
	}
}