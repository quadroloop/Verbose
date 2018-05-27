// verbose-search.js
// Bryce Mercines 2017
var uid = 0;
var wn = 0;
var sw = 0; // array window.
var cquery;
var smode = "Wikipedia";
var settings = 0; // settings default.

var searchquery = document.getElementById("query");
searchquery.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    	if ($('#query')[0].value.length == 0){
    // do nothing if query is empty.
}else{
	var squery = searchquery.value;
	var arrayquery = (squery.match(/,/g) || []).length;
	if (arrayquery > 2) {
	arraysearch();
	}else{
       normalsearch(e); // no array search intent is detected.   
    } // do normal search,,
}
}
});

function normalsearch(e) {
  fbar();
	//check settings 
	if (settings == 0) {
   
    
	var str = document.getElementById("query").value;
	// capitalization
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   var query1 = splitStr.join(' ');
	//captalization end
	localStorage.setItem('qball', query1);
    var results = document.getElementById("results");
    var div = document.createElement('div');

    //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ query1 +"&apos;;csearch();' style='cursor:pointer;'  class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ query1 +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";
    
 document.getElementById("results").style.display = "none"; // close auto complete   
div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  searchquery.value +  "</b></span><iframe id='" + "fra" + uid + "' src='framer.html' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "margin:0px;font-weight:100;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-col m5 w3-margin w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner();
}else if (settings == 1){
 // call settings feed mode (center div)
 feedsearch();
}else if (settings == 2){
// call mode 3	list mode (catalogue results)
 listsearch();
 }
}

 function autoc() {
 	document.getElementById("results").style.display = "block";
 }

 function qdelta() {
 var qs = document.getElementById("results");
 var sq = document.getElementById("query");

  if ( sq.value == [ ] ) {
  	qs.style.display = "none";
  }
  // call banner
  cbanner();
}


 function csearch() { //search by click of autocomplete
   fbar();
    //check settings 
	if (settings == 0) {
    
    
     var csearchquery = cquery.replace(new RegExp('%20', 'g')," ");
      localStorage.setItem('qball', cquery);
 	 var results = document.getElementById("results");
    var div = document.createElement('div');
    
 //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ csearchquery +"&apos;;csearch();' style='cursor:pointer;' class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ csearchquery +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";

 document.getElementById("results").style.display = "none"; // close auto complete   
div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  csearchquery +  "</b></span><iframe id='" + "fra" + uid + "' src='framer.html' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "margin:0px;font-weight:100;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-col m5 w3-margin w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner(); // canner banner if search space is blank.
}else if (settings == 1){
 // call settings feed mode (center div)
 feedsearchclick();
}else if (settings == 2){
// call mode 3	list mode (catalogue results)
 listsearchclick();
 }
 }

 function cbanner() {
  var r = document.getElementsByClassName("window");
   if (r.length == 0) {
   	document.getElementById("banner").style.display = "block";
   }else{
   	document.getElementById("banner").style.display = "none";
   }
 }

 function arraysearch() {
   fbar();
  //check settings 
	if (settings == 0) {	
    
    
 	// chain search for array intent.
  var w = document.getElementsByClassName("loader")
  w[0].style.display = "block";
  var qi = document.getElementById("query").value;
  var qm = qi.split(',');
  for (var i=0; i < qm.length; i++) {

  	var str = qm[i];
	// capitalization
     var splitStr = str.toLowerCase().split(' ');
   for (var j = 0; j < splitStr.length; j++) {
       splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);     
   }
   var query1 = splitStr.join(' ');
	//captalization end
    var results = document.getElementById("results");
    var div = document.createElement('div');

     //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ query1 +"&apos;;csearch();' style='cursor:pointer;' class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ query1 +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";
    
 document.getElementById("results").style.display = "none"; // close auto complete   
div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  str +  "</b></span><iframe onload='wcount();' id='" + "fra" + uid + "' src='https://www.wikipedia.org/wiki/"+str+"' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "margin:0px;font-weight:100;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-col m5 w3-margin w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner();

  } // and of loop
  }else if (settings == 1){
 // call settings feed mode (center div)
 feedsearcharray();
}else if (settings == 2){
// call mode 3	list mode (catalogue results)
 listsearcharray();
 }
 }


function wcount(){
	//search array window processor
	 var qi = document.getElementById("query").value;
  var qm = qi.split(',');
	sw++
	if ( sw == qm.length ) {
	  loadarray();
	  sw = 0; // reset the count of window.	
	}
}

//something to do.. Hot key!
keyui = 0;
var main = document.getElementById("vbody");
main.addEventListener("keydown", function (k) {
    if (k.keyCode === 112) { 
    keyui++;
}
// change search function
if ( keyui == 2 ){
	document.getElementById('sfm').style.display = "block";
	document.getElementById('query').blur();
	document.getElementById('intsearch').focus();
	keyui = 0;
}
// change search function
if ( keyui == 2 ){
	alert("change search function");
	keyui = 0;
}

});

//mode 2 search functions
function feedsearch(){
//alert("feed search");
var feedbody = document.getElementById("searchfeed");
var str = document.getElementById("query").value;
	// capitalization
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   var query1 = splitStr.join(' ');
	//captalization end
	localStorage.setItem('qball', query1);
    var results = document.getElementById("results");
    var div = document.createElement('div');
    results.style.display = "none";
    //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ query1 +"&apos;;csearch();' style='cursor:pointer;'  class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ query1 +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";
   //create feed
   var div = document.createElement('div');
   div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  searchquery.value +  "</b></span><iframe id='" + "fra" + uid + "' src='framer.html' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "font-weight:100;margin-right:269px;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-center sfeed w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner();

}

function feedsearchclick(){
//alert("feed search click");
 var csearchquery = cquery.replace(new RegExp('%20', 'g')," ");
      localStorage.setItem('qball', cquery);
 	 var results = document.getElementById("results");
    var div = document.createElement('div');
      results.style.display = "none";
    //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ csearchquery +"&apos;;csearch();' style='cursor:pointer;'  class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ csearchquery +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";
   //create feed
   var div = document.createElement('div');
   div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  csearchquery +  "</b></span><iframe id='" + "fra" + uid + "' src='framer.html' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "font-weight:100;margin-right:269px;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-center sfeed w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner();

}

function feedsearcharray(){
 var w = document.getElementsByClassName("loader")
  w[0].style.display = "block";
  var qi = document.getElementById("query").value;
  var qm = qi.split(',');
  for (var i=0; i < qm.length; i++) {

  	var str = qm[i];
	// capitalization
     var splitStr = str.toLowerCase().split(' ');
   for (var j = 0; j < splitStr.length; j++) {
       splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);     
   }
   var query1 = splitStr.join(' ');
	//captalization end
    var results = document.getElementById("results");
    var div = document.createElement('div');
    //close autom complete
    results.style.display = "none";
     //add to history!
    document.getElementById("history").innerHTML +=  "<a onclick='cquery=&apos;"+ query1 +"&apos;;csearch();' style='cursor:pointer;' class='w3-text-dark-grey'><i class='w3-text-indigo fa fa-file-text-o'></i> "+ query1 +" <span class='w3-text-grey'>/"+smode+"/</span></a><br>";
    //array search append.
    document.getElementById("results").style.display = "none"; // close auto complete   
div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).remove();cbanner();" + " class='fa fa-times-rectangle w3-padding-small w3-text-black w3-hover-text-red w3-right window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-dark-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  str +  "</b></span><iframe onload='wcount();' id='" + "fra" + uid + "' src='https://www.wikipedia.org/wiki/"+str+"' style='margin:0px;height:420px;width:100%;border:0px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "font-weight:100;margin-right:269px;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-center sfeed w3-container w3-white w3-card-2 w3-round window frames'); 
document.body.appendChild(div);
cbanner();

}
}

//bar ui
function fbar() {
  var bar1 = document.getElementById("lb");
  var bar2 = document.getElementById("rb");
  if (settings == 0){
    bar1.style.display = "none";
    bar2.style.display = "none";
  }else{
    bar1.style.display = "block";
    bar2.style.display = "block";
  }
}