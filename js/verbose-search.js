// verbose-search.js
// Bryce Mercines 2017

var uid = 0;
var wn = 0;

var searchquery = document.getElementById("query");
searchquery.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {

	
	
    var results = document.getElementById("results");
    var div = document.createElement('div');
    
div.innerHTML = "<i onclick=document.getElementById(&apos;" + "fr" + uid + "&apos;).style.display=&apos;none&apos;" + " class='fa fa-close w3-text-black w3-hover-text-red window_widget' title='Close this Window.'></i> <i onclick='fw = " + "&quot;fr" + uid + "&quot;" + "; edit();'" + " class='fa fa-pencil w3-text-black w3-hover-text-blue window_widget' title='Edit this Window.'></i> <span class='w3-small w3-text-grey'><b class='w3-text-dark-grey'>Title:</b> </b>" +  searchquery.value +  "</b></span><iframe id='" + "fra" + uid + "' src='https://Wikipedia.org/wiki/" + searchquery.value + "' style='margin:0px;height:420px;width:100%;border-radius:10px;' onclick='close();'></iframe><i class='fa fa-close' stlye='cursor:default;'></i>"; 
div.style = "margin:0px;font-weight:100;border-radius:10px;";
div.id = "fr" + uid;
uid++
div.setAttribute('class', 'w3-col m5 w3-margin w3-container w3-white w3-card-2 w3-round'); 
document.body.appendChild(div);
}
