const options = {
	/* cheater :p */
	"000000000":invertItAll,
	25:snow,
	64:lichessTV,
	69:sixtyNine,
	123:underTheSeaBert,
	420:weedRain,
	636:slebertMen,
	777:jackpot,
	4848:bgRandColor,
	7532378:slebert,
	123456789:huRotate,
	"nice!":sixtyNine,
	"JACKPOT!":jackpot,
	"lichessTV":lichessTV,
	"SeaBert":underTheSeaBert,
	"SLEBERT":slebert
};
function setScreen(x) {
	document.getElementById("screen").innerHTML = x; 
}
function keyPressed(key){
	const current = String(document.getElementById("screen").innerHTML);
	if (current.length < 9){
		document.getElementById("screen").innerHTML += key;
	}

}
function kaypadSubmit(){
	const submission = document.getElementById("screen").innerHTML;
	try	{
		options[submission]();
	} catch(err){
		setScreen("Try Again");
	}
}
function scale(){
	let open = getComputedStyle(document.body).getPropertyValue('--keypadOpen');
	if (open==1){
		document.querySelector(':root').style.setProperty('--keypadOpen', 0);
		return;
	}
	document.querySelector(':root').style.setProperty('--keypadOpen', 1);
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
function invertItAll(){
	if (document.getElementById("html").style.filter == "invert(100%)"){
		document.getElementById("html").style.filter = "invert(0%)";
		return;
	}
	document.getElementById("html").style.filter = "invert(100%)";
	
}
function slebert(){
	const running = document.getElementById("slebert");
	if(running){
		running.remove();
		return;
	}
	const slebertDiv = document.createElement("div");
	slebertDiv.id = "slebert";
	slebertDiv.style.backgroundImage = "url(images/huhu.webp)"
	slebertDiv.style.width = "492px";
	slebertDiv.style.height = "466px";
	slebertDiv.classList.add('center');
	document.getElementById("huhu1").appendChild(slebertDiv);
	setScreen("SLEBERT");
}
function underTheSeaBert(){
	const running = document.getElementById("wrapper");
	if (running){
		document.body.classList.remove("bgUnderTheSeaBert");
		document.body.classList.add("bgLinearGradient");
		document.getElementById("wrapper").remove();
		setScreen("123");
		return;
	}
	const wrapper = document.createElement("div");
	wrapper.id = "wrapper";
	wrapper.classList.add("wrapper");
	document.getElementById("huhu1").appendChild(wrapper);
	document.body.classList.remove("bgLinearGradient");
	document.body.classList.add("bgUnderTheSeaBert");
	for (let i = 0; i < 15; i++){
		const div = document.createElement("div");
		const span = document.createElement("span");
		span.classList.add('dot');
		div.innerHTML = '<span id="dot" class="dot"></span>';
		document.getElementById("wrapper").appendChild(div);
	}
	setScreen("SeaBert");
}
function jackpot(){
	const huhu1 = document.getElementById("huhu1");
	if (huhu1.style.animationName != "jackpot"){
		huhu1.style.animationName = "jackpot";
		setScreen("JACKPOT!");
		return;
	}
	huhu1.style.animationName = "move";
	setScreen("777");
}
function lichessTV(){
	const running = document.getElementById("lichessTV");
	if (running){
		running.remove();
		setScreen("64");
		return;
	}
	const div = document.createElement("div");
	div.innerHTML = "<iframe src='https://lichess.org/tv/frame?theme=wood4&bg=dark' style='width: 400px; height: 444px;' allowtransparency='true' frameborder='0'></iframe>";
	div.id = 'lichessTV';
	div.classList.add("center");
	document.getElementById("huhu1").appendChild(div);
	setScreen("lichessTV");
}
function rain(drops, count = 100, durMult = 1){
	const running = document.getElementById("rainWrapper");
	if(running){
		running.remove();
		return;
	}
	const wrapper = document.createElement("div");
	wrapper.classList.add("rainWrapper");
	wrapper.id = "rainWrapper";
	document.body.appendChild(wrapper);
	for(let i = 0; i < count; i++){
		const span = document.createElement("span");
		span.id = "rain";
		span.classList.add("rain", drops);
		let position = ((Math.random()*105)-5);
		span.style.left = position+"vw";
		let duration = (((Math.random())+0.5)*durMult);
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
function animeJSRain(drops = "snowFlakes", count = 100, duration = 5000){
	const running = document.getElementById("rainWrapper");
	if(running){
		running.remove();
		return;
	}
	const wrapper = document.createElement("div");
	wrapper.classList.add("rainWrapper");
	wrapper.id = "rainWrapper";
	for (let i = 0; i < count; i++) {
		let drop = document.createElement('span');
		let position = ((Math.random()*110)-10);
		drop.classList.add('rain', drops);
		anime({
			targets: drop,
			left: [position+"vw", (position+10)+"vw"],
			top: [-32, '110vh'],
			rotate: ((Math.random()*640)-360),
			delay: (duration / count) * i,
			duration: (duration-((Math.random()*1000)-500)),
			easing: 'linear',
			loop: true
		});
		wrapper.appendChild(drop);
	}
	document.body.appendChild(wrapper);
}
function weedRain(){
	animeJSRain("weedDrops", 210, 2400);
}
function snow(){
	rain("snowFlakes", 200, 3);
}
function slebertMen(){
	const running = document.getElementById("huhu2");
	if(running){
		running.remove();
		return;
	}
	const div = document.createElement('div');
	const div2 = document.createElement('div');
	const h1 = document.createElement('h1');
	div.id = 'huhu2';
	div.classList.add('huhu2');	
	div2.id = 'banner';
	div2.classList.add('banner');
	h1.innerHTML = 'SLEBERT.MEN'
	div2.appendChild(h1);
	div.appendChild(div2);
	document.getElementById('huhu1').appendChild(div);
}
function huRotate(){
	const ani = document.getElementById("html").style.animationName;
	if(ani == "hueRotate"){
		document.getElementById("html").style.animationName = null;
		document.getElementById("html").style.animationDuration = null;
		document.getElementById("html").style.animationIterationCount = null;
		document.getElementById("html").style.animationTimingFunction = null;
		return;
	}
	document.getElementById("html").style.animationName = "hueRotate";
	document.getElementById("html").style.animationDuration = "2s";
	document.getElementById("html").style.animationIterationCount = "infinite";
	document.getElementById("html").style.animationTimingFunction = "linear";
}