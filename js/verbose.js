// Verbose.js 
// for Verbose v0.1
// (c) Bryce Mercines 2017


var search_state = "succent search mode";  




function wikipedia() {


  
  var logo = document.getElementById("logo");
  var searchbar = document.getElementById("query");
  search_state = logo.className;
  logo.className = logo.className.replace(search_state ,"fa fa-wikipedia-w fa-4x w3-bar-item w3-text-white");
  search_state = logo.className;
  searchbar.placeholder = "Search Wikipedia...";
}

function verbose() {
     
	var logo = document.getElementById("logo");
  var searchbar = document.getElementById("query");
  document.getElementById("navbar").style="background-color:rgba(0, 0, 0, 0.7)";
  	logo.className = logo.className.replace(search_state,"fa fa-sitemap fa-4x w3-bar-item w3-text-amber");
  	search_state = logo.className
  searchbar.placeholder = "Search Verbose...";
     document.getElementById("verbose-style").innerHTML =".widget i {-moz-transition: all 0.3s;-webkit-transition: all 0.3s;transition: all 0.3s;}.widget:hover i {-moz-transform: scale(1.1);-webkit-transform: scale(1.1);transform: scale(1.1);background-color:rgba(94, 165, 237, 0.7);color:white;cursor:pointer;}i{color:white;}.circle{padding: 5px 10px;display: inline-block;-moz-border-radius: 100px;-webkit-border-radius: 100px;border-radius: 100px;-moz-box-shadow: 0px 0px 2px #fff;-webkit-box-shadow: 0px 0px 2px #fff;box-shadow: 0px 0px 2px #fff;}";

}

function setm() {
	document.getElementById("settings").onclick = function() { close_settings() };
	var x = document.getElementById("settings");
	 x.className = x.className.replace(" widget"," widget-focus"); 
    document.getElementById("setmenu").style.display = "block";
}

function close_settings() {
	document.getElementById("settings").onclick = function() { setm() };
	var x = document.getElementById("settings");
	 x.className = x.className.replace(" widget-focus"," widget"); 
    document.getElementById("setmenu").style.display = "none";
}

var holdFocus;

function updateFocus(x)
{
    holdFocus = x;
    alert(holdFocus);
}

function appendTextToLastFocus(text)
{
    holdFocus.value += text;
}

function close() {
  document.getElementById('sll').style.display = "none";
}

function edit() {

 var subject_window = document.getElementById(fw);
 subject_window.className = subject_window.className.replace = ("w3-col m5 w3-margin w3-container w3-white w3-card-2 w3-round","w3-col m5 w3-margin w3-container w3-blue w3-card-2 w3-round"); 
  
	
}

