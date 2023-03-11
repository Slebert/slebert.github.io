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
	options["nice!"] = sixtyNine;
	options["4848"] = bgRandColor;
	options["420"] = weedRain;
	options["0"] = dvdVideo;
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
		nice.innerHTML = "";
		nice.outerHTML = "";
		setScreen("69");
	}else{
		setScreen("nice!");
		const niceDivBro = document.createElement("div");
		niceDivBro.id = "nice";
		niceDivBro.classList.add("center");
		niceDivBro.classList.add("nice");
		niceDivBro.innerHTML = "nice!";
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
		setScreen("SLEBERT");
	}
}
function underTheSeaBert(){
	const spanCheck = document.getElementById("wrapper");
	if (spanCheck){
		document.getElementById("body").classList.remove("bgUnderTheSeaBert");
		document.getElementById("body").classList.add("bgLinearGradient");
		document.getElementById("wrapper").outerHTML = "";
		setScreen("123");
	}else{
		const wrapper = document.createElement("div");
		wrapper.id = "wrapper";
		wrapper.classList.add("wrapper");
		document.getElementById("huhu1").appendChild(wrapper);
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
function dvdVideo(){
	dvdVisible = document.getElementById('dvd_video').style.visibility;
	if (dvdVisible == "visible"){
		document.getElementById('dvd_video').style.visibility = "hidden";
	}else{
		document.getElementById('dvd_video').style.visibility = "visible";
		setInterval(renderDvdVideo,880);
	}
}

function renderDvdVideo(){
	dvdVisible = document.getElementById('dvd_video').style.visibility;

	document.getElementById("dvd_video").src="images/dvd_video" + dvdVideoNumber +".png";
	incrementDvdVideoNumber();

}

function incrementDvdVideoNumber(){
	dvdVideoNumber++;
		if (dvdVideoNumber>4){
			dvdVideoNumber=1;
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
function rain(drops, count){
	const check = document.getElementById("rainWrapper");
	if(check){
		check.outerHTML = "";
	}else{
		const wrapper = document.createElement("div");
		wrapper.classList.add("rainWrapper");
		wrapper.id = "rainWrapper";
		document.getElementById("body").appendChild(wrapper);
		for(let i = 0; i < count; i++){
			const div = document.createElement("div");
			div.id = "rain";
			div.classList.add("rain");
			div.classList.add(drops);
			let position = ((Math.random()*105)-5);
			div.style.left = position+"vw";
			let duration = ((Math.random()*2)+0.5);
			div.style.animationDuration = duration+"s";
			let delay = ((Math.random()*2));
			div.style.animationDelay = delay+"s";
			if (Math.random() > 0.5){
				div.style.animationName = "rainClockwise";
			}else{
				div.style.animationName = "rainCounterClockwise"
			}
			document.getElementById("rainWrapper").appendChild(div);
		}
	}
}
function weedRain(){
	rain("weedDrops", 100);
}