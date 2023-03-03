function backgroundColour() {
	switch (document.getElementById('body').className){
		case "backgroundLinearGradientBlue":
			document.getElementById('body').className = "backgroundLinearGradientGreen";
			break;
		case "backgroundLinearGradientGreen":
			document.getElementById('body').className = "backgroundLinearGradientRed";
			break;
		case "backgroundLinearGradientRed":
			document.getElementById('body').className = "backgroundLinearGradientBlue";
			break;
	}
};