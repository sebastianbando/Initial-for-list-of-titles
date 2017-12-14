$(document).ready(function() {
	
//var i=0, c="";
var previous = null;
$(".list > div > a").each( function(){
  if (!previous) {
    var this_initial = $(this).text().charAt(0)
    $(this).parent().before( "<div class='initial'>"+this_initial+"</div>" );
  }
  else {
    var previous_initial = previous.text().charAt(0)
    var this_initial = $(this).text().charAt(0)
    if ( previous_initial != this_initial ) {
      //c = c+ " pi="+previous_initial+" ti="+this_initial;
      $(this).parent().before( "<div class='initial'>"+this_initial+"</div>" );
    }
  }
  //i++;
  previous = $(this);
});

var previous = null;
$(".list > div").each( function(){
  //$(this).parent().before( "<div class='container'>div.container</div>" );
});

//$(".output").html(i + " " + c);
  
});
