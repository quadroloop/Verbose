// Verbose mobile.js 
// Bryce Mercines 2018

 var searchcount = 0;

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
	          document.getElementById('results').classList.remove('faderesultsdown');
	          document.getElementById('results').classList.add('faderesults');
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
	document.getElementById('results').classList.add('fadesearchdown');

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
            $("#results").append("<div style='cursor:pointer;' onclick='cquery=&apos;" + encodeURIComponent(item.title) + "&apos;;csearch();'  class='w3-hover-pale-blue w3-padding w3-round'><a class='w3-text-indigo' style='text-decoration:none;'><b>" + item.title + "</b></a><br>" + item.snippet + "<br><br></div>");
          });
        });
      });

   function tester(){
   	//  https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow
    axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow')
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error);
  });


   }
