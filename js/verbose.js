// Verbose.js 
// for Verbose v0.1
// (c) Bryce Mercines 2017


var search_state = "succent search mode";  

var capp; //current app onpened.


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

// control for right menu buttons
var capp = "dapp";
var ctab = "dtab";
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;

function setm() {
  close_tab();
   document.getElementById(capp).style.display = "none";
  //document.getElementById("settings").onclick = function() { close_settings() };
  s2 ++;
   s1 = 0;
  s3 = 0;
  s4 = 0;
  var x = document.getElementById("settings");
   x.className = x.className.replace(" widget"," widget-focus"); 
    document.getElementById("setmenu").style.display = "block";
    capp = "setmenu";
    ctab = "settings";
    menuchk();
}

function close_settings() {
 // document.getElementById("settings").onclick = function() { setm() };
  var x = document.getElementById("settings");
   x.className = x.className.replace(" widget-focus"," widget"); 
    document.getElementById("setmenu").style.display = "none";
}

function scc() {
  close_tab();
  document.getElementById(capp).style.display = "none";
//  document.getElementById("sct").onclick = function() { scc_settings() };
     s1++;
      s2 = 0;
      s3 = 0;
      s4 = 0;
  var x = document.getElementById("sct");
   x.className = x.className.replace(" widget"," widget-focus"); 
    document.getElementById("sc1").style.display = "block";
    capp = "sc1";
    ctab = "sct";
    menuchk();
}

function scc_settings() {
//  document.getElementById("sct").onclick = function() { scc() };
  var x = document.getElementById("sct");
   x.className = x.className.replace(" widget-focus"," widget"); 
    document.getElementById("sc1").style.display = "none";
}

function shh() {
  close_tab();
 document.getElementById(capp).style.display = "none";
  //document.getElementById("widgets").onclick = function() { shh_settings() };
  s3++;
  s1 = 0;
  s2 = 0;
  s4 = 0;
  var x = document.getElementById("widgets");
   x.className = x.className.replace(" widget"," widget-focus"); 
    document.getElementById("sh1").style.display = "block";
    capp = "sh1";
    ctab = "widgets";
    menuchk();
}

function shh_settings() {
//  document.getElementById("widgets").onclick = function() { shh() };
  var x = document.getElementById("widgets");
   x.className = x.className.replace(" widget-focus"," widget"); 
    document.getElementById("sh1").style.display = "none";
}

function sff() {
  close_tab();
  document.getElementById(capp).style.display = "none";
  s4++;
   s1 = 0;
  s3 = 0;
  s2 = 0;
 // document.getElementById("add").onclick = function() { sff_settings() };
  var x = document.getElementById("add");
   x.className = x.className.replace(" widget"," widget-focus"); 
    document.getElementById("sf1").style.display = "block";
    capp = "sf1";
    ctab = "add";
    menuchk();
}

function sff_settings() {
 // document.getElementById("add").onclick = function() { sff() };
  var x = document.getElementById("add");
   x.className = x.className.replace(" widget-focus"," widget"); 
    document.getElementById("sf1").style.display = "none";
}

function close_tab() {
  var x = document.getElementById(ctab);
   x.className = x.className.replace(" widget-focus"," widget"); 
}

function menuchk() {
if ( s1 == 2 ){
  s1 = 0;
  scc_settings();
}
if ( s2 == 2 ){
  close_settings();
  s2 = 0;
}
if ( s3 == 2 ){
  shh_settings();
  s3 = 0;
}
if ( s4 == 2 ){
  sff_settings();
  s4 = 0;
}
}

//controls for settings tab..
var cs = "ss1";

function bs1() {
var x1 = document.getElementById("ss1");
var y = document.getElementById(cs);
y.className = y.className.replace("w3-text-green fa fa-toggle-on","w3-text-grey fa fa-toggle-off");
x1.className = x1.className.replace("w3-text-grey fa fa-toggle-off","w3-text-green fa fa-toggle-on");
cs = "ss1";
 setTimeout("close_settings()",1000);
 s2=0;
settings = 0;
// call grid mode
document.getElementById("smode").innerHTML = "<b class='w3-text-white'>Search Mode:</b> Grid Mode";
}

function bs2() {
var x2 = document.getElementById("ss2");
var y = document.getElementById(cs);
y.className = y.className.replace("w3-text-green fa fa-toggle-on","w3-text-grey fa fa-toggle-off");
x2.className = x2.className.replace("w3-text-grey fa fa-toggle-off","w3-text-green fa fa-toggle-on");
cs = "ss2";  
setTimeout("close_settings()",1000);
s2=0;
settings = 1;
// set smode  banner to feed search
document.getElementById("smode").innerHTML = "<b class='w3-text-white'>Search Mode:</b> Feed Mode";
}

function bs3() {
var x3 = document.getElementById("ss3");  
var y = document.getElementById(cs);
y.className = y.className.replace("w3-text-green fa fa-toggle-on","w3-text-grey fa fa-toggle-off");
x3.className = x3.className.replace("w3-text-grey fa fa-toggle-off","w3-text-green fa fa-toggle-on");
cs = "ss3";  
setTimeout("close_settings()",1000);
s2=0;
settings = 2;
  
}

function bs4() {
 var x4 = document.getElementById("ss4");
 var y = document.getElementById(cs);
y.className = y.className.replace("w3-text-green fa fa-toggle-on","w3-text-grey fa fa-toggle-off");
x4.className = x4.className.replace("w3-text-grey fa fa-toggle-off","w3-text-green fa fa-toggle-on");
cs = "ss4";   
setTimeout("close_settings()",1000);
s2=0;
settings = 3;  
}

function bs5() {
  var x5 = document.getElementById("ss5");
  var y = document.getElementById(cs);
y.className = y.className.replace("w3-text-green fa fa-toggle-on","w3-text-grey fa fa-toggle-off");
x5.className = x5.className.replace("w3-text-grey fa fa-toggle-off","w3-text-green fa fa-toggle-on");
cs = "ss5";  
setTimeout("close_settings()",1000);
s2=0;
settings = 4;  
}


function download(){
  window.location = "https://github.com/quadroloop/Verbose";
}

function about(){
  window.location = "about.html";
}

function disclaim(){
  window.location = "disclaimer.html";
}