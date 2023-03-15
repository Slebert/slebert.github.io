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
	options["0"] = dvdVideo;
	options["000000000"] = inverted;
	options["64"] = lichessTV;
	options["69"] = sixtyNine;
	options["123"] = underTheSeaBert;
	options["420"] = weedRain;
	options["777"] = jackpot;
	options["4848"] = bgRandColor;
	options["7532378"]= slebert;
	options["nice!"] = sixtyNine;
	options["JACKPOT!"] = jackpot;
	options["lichessTV"] = lichessTV;
	options["SeaBert"] = underTheSeaBert;	
	options["SLEBERT"]= slebert;
	try	{
		options[submission]();
	} catch(err){
		setScreen("Try Again");
	}
}
function minMax(id) {
	const win = document.getElementById(id);
	if (win.style.display == 'inline'){
		win.style.display = 'none';
	}else{
		win.style.display = 'inline';
	}
}
function sixtyNine() {
	const nice = document.getElementById("nice")
	if(nice){
		nice.remove();
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
		body.style.filter = null;
		body.style.background = null;
	}else{
		body.style.filter = "invert(100%)"
		body.style.background = "black";
	}
}
function slebert(){
	const huhu = document.getElementById("slebert");
	if(huhu){
		huhu.remove();
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
		document.getElementById("wrapper").remove();
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
	const check = document.getElementById("outerMarq");
	if(check){
		check.remove();
	}else{
		const marq = document.createElement("marquee");
		marq.setAttribute("behavior", "alternate");
		marq.setAttribute("scrollamount", "30");
		marq.id = "outerMarq";
		marq.classList.add("dvdMarquee");
		document.getElementById("huhu1").appendChild(marq);
		const marqIn = document.createElement("marquee");
		marqIn.setAttribute("behavior", "alternate");
		marqIn.setAttribute("scrollamount", "30");
		marqIn.direction = "down";
		marqIn.id = "innerMarq";
		marqIn.classList.add("dvdMarquee");
		document.getElementById("outerMarq").appendChild(marqIn);
		const div = document.createElement("div");
		div.id = "dvd_video";
		div.classList.add("dvd");
		document.getElementById("innerMarq").appendChild(div);
	}
}
function lichessTV(){
	const check = document.getElementById("lichessTV");
	if (check){
		check.remove();
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
		check.remove();
	}else{
		const wrapper = document.createElement("div");
		wrapper.classList.add("rainWrapper");
		wrapper.id = "rainWrapper";
		document.getElementById("body").appendChild(wrapper);
		for(let i = 0; i < count; i++){
			const span = document.createElement("span");
			span.id = "rain";
			span.classList.add("rain", drops);
			let position = ((Math.random()*105)-5);
			span.style.left = position+"vw";
			let duration = ((Math.random()*2)+0.5);
			span.style.animationDuration = duration+"s";
			let delay = ((Math.random()*2));
			span.style.animationDelay = delay+"s";
			if (Math.random() > 0.5){
				span.style.animationName = "rainClockwise";
			}else{
				span.style.animationName = "rainCounterClockwise"
			}
			document.getElementById("rainWrapper").appendChild(span);
		}
	}
}
function weedRain(){
	rain("weedDrops", 100);
}