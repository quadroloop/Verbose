  $("#query").keyup(function(q){

       
        var q = $("#query").val();
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
            $("#results").append("<div style='z-index:99;cursor:pointer;' onclick='cquery=&apos;" + encodeURIComponent(item.title) + "&apos;;csearch();'  class='w3-hover-pale-blue'><a class='w3-text-indigo' style='text-decoration:none;'><b>" + item.title + "</b></a><br>" + item.snippet + "<br><br></div>");
          });
        });
      });

