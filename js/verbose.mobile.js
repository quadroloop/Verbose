// Verbose mobile.js 
// Bryce Mercines 2018

 var searchcount = 0;

 window.onload = function(){
 	document.getElementById('search').focus();
 }

function menu(object) {
	var menubtn = object;
	menubtn.className = "animated bounceReset"
	kernel(menubtn.id);
	menubtn.onclick="clickReset()";
}

function clickReset(object) {
	var menubtn = object;
	menubtn.className = "animated bounceIn";
	menubtn.onclick= "menu()";
}

var vcount = 0;
function kernel(item) {	
  switch(item) {
  	case 'verbose' :
  	    toggle_widgets();
  	break;
  	case 'preferences' :
  	    toggle_widgets();
  	break;
  	case 'qr' :
  	    toggle_widgets();
  	break;
  	case 'sbar' :
  	    toggle_widgets();
  	break;
  }
}

function open1(){
	if(vcount == 0){
	    document.getElementById('sbar').style.display="block";
    }else{
        document.getElementById('sbar').classList.add('bounceOut');	
    }
}

function open2(){
	if(vcount == 0){
	    document.getElementById('preferences').style.display="block";
    }else{
        document.getElementById('preferences').classList.add('bounceOut');	
    }
}

function open3(){
	if(vcount == 0){
	    document.getElementById('qr').style.display="block";
    }else{
        document.getElementById('qr').classList.add('bounceOut');	
    }
}

function toggle_widgets() {
	 if(vcount == 0){
           setTimeout('open1()',100);
           setTimeout('open2()',200);
           setTimeout('open3()',300);
           vcount++;
       }else{
           setTimeout('open1()',100);
           setTimeout('open2()',200);
           setTimeout('open3()',300);
           vcount=0;
           document.getElementById('sbar').classList.remove('bounceOut');
           document.getElementById('preferences').classList.remove('bounceOut');
           document.getElementById('qr').classList.remove('bounceOut');
       }
}

function readMode() {
	document.getElementById('bg').classList.add('fadeOut');
}

function searchMode() {
	var data = document.getElementById('search');
	    if(data.value){
	          document.getElementById('bg').classList.add('fadeOut');
	          document.getElementsByClassName('mobile-banner')[0].classList.add('fadeOutUp');
	          document.getElementsByClassName('margin-input')[0].classList.remove('fadesearchdown');
	          document.getElementsByClassName('margin-input')[0].classList.add('fadesearch');
	    }else{
	    	home();
	    }      
}

function home() {
	document.getElementById('bg').classList.remove('fadeOut');
	document.getElementById('bg').classList.add('fadeIn');
	document.getElementsByClassName('mobile-banner')[0].classList.remove('fadeOutUp');
	document.getElementsByClassName('mobile-banner')[0].classList.add('fadeInDown');
	document.getElementsByClassName('margin-input')[0].classList.remove('fadesearch');
    document.getElementsByClassName('margin-input')[0].classList.add('fadesearchdown');

}