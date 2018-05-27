// Verbose mobile.js 
// Bryce Mercines 2018

function menu(object) {
	var menubtn = object;
	menubtn.className = "animated bounceReset";
	menubtn.onclick="clickReset()";
}

function clickReset(object) {
	var menubtn = object;
	menubtn.className = "animated bounceIn";
	menubtn.onclick= "menu()";
}