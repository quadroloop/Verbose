// Verbose mobile.js 
// Bryce Mercines 2018

 
 var searchcount = 0;
 var smode = 'snippets';
 var cquery;

 window.onload = function(){
 	document.getElementById('search').focus();
 	$('#loader').fadeOut('slow');
 }

function menu(object) {
	var menubtn = object;
	menubtn.classList.remove("bounceIn");
	menubtn.classList.add("bounceReset");
	kernel(menubtn.id);
	menubtn.onclick=function() {
		clickReset(this);
	}
}

function clickReset(object) {
	var menubtn = object;
	menubtn.classList.remove("bounceReset");
	menubtn.classList.add("bounceIn");
	menubtn.onclick = function(){
          menu(this);
	}
}

var vcount = 0;
function kernel(item) {	
  switch(item) {
  	case 'verbose' :
  	    toggle_widgets();
  	break;
  	case 'preferences' :
  	    toggle_widgets();
  	    setTimeout('openSidebar();',400);
  	break;
  	case 'qr' :
  	   tester();
  	    toggle_widgets();
  	break;
  	case 'sbar' :
        backtosearch();
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

function openSidebar(){
	document.getElementById('sidebar').style.display = "block";
}

function closeSidebar(){
	document.getElementById('sidebar').classList.add('hide-left');
 	setTimeout("document.getElementById('sidebar').style.display = 'none';",700);
 	setTimeout("document.getElementById('sidebar').classList.remove('hide-left')",700);
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
	          document.getElementById('results').style.display = "block";
	          document.getElementById('results').classList.remove('faderesultsdown');
	          document.getElementById('results').classList.add('faderesults');
	           document.getElementById('panel').classList.remove('hidepanel');
	          document.getElementById('panel').classList.add('fadepanel');
	    }else{
	    	home();
	    }      
}

function home() {
	document.getElementById('results').innerHTML='';
	document.getElementById('bg').classList.remove('fadeOut');
	document.getElementById('bg').classList.add('fadeIn');
	document.getElementsByClassName('mobile-banner')[0].classList.remove('fadeOutUp');
	document.getElementsByClassName('mobile-banner')[0].classList.add('fadeInDown');
	document.getElementsByClassName('margin-input')[0].classList.remove('fadesearch');
    document.getElementsByClassName('margin-input')[0].classList.add('fadesearchdown');
    document.getElementById('results').classList.remove('faderesults');
	document.getElementById('results').classList.add('faderesultsdown');
	 document.getElementById('panel').classList.remove('fadepanel');
	document.getElementById('panel').classList.add('hidepanel');

}

  $("#search").keyup(function(q){
        var q = $("#search").val();
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append("<p>Results for <b class='w3-text-indigo'>" + q + "</b></p>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div style='cursor:pointer;' onclick='cquery=&apos;" + encodeURIComponent(item.title) + "&apos;;search(this.innerHTML);'  class='w3-hover-pale-blue w3-padding w3-round'><a class='w3-text-indigo' style='text-decoration:none;'><b>" + item.title + "</b></a><br>" + item.snippet + "<br><br></div>");
          });
        });
      });



   function tester(){
   	
     $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          // srsearch: "Google",
          action: "query",
          format: "json",
          prop: "extracts",
          explaintext: 1,
          exintro: 1,
          titles: "Google"
          // list: "page"
        },
        function(data) {
            var pageid = Object.keys(data.query.pages)[0];
            alert(JSON.stringify(data.query.pages[pageid]));
            // alert(pageid);
        });

   }

function switchScr() {
	document.getElementById("results").classList.add("w3-card-4");
	document.getElementById("results").classList.add("hide-left");
	setTimeout('document.getElementById("results").style.display="none"',300);
	setTimeout('document.getElementById("results").classList.remove("w3-card-4");',700);
	setTimeout('document.getElementById("results").classList.remove("hide-left");',700);
}

function backtosearch() {
  document.getElementById('panel').style.display = "none";
  document.getElementById('search').click();
}


// TODO:: [array search], enter mode, iframe mode, parallax mode , snippet

function search(data) {
   var search_panel = document.getElementById('bg').style.display = "none";
   var panel = document.getElementById("panel");
   panel.style.display = "block";
   panel.innerHTML += '<div class="w3-container w3-margin w3-round w3-card-2 w3-white">'+data+'</div>';
}