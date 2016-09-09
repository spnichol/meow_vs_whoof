


var delay=1000; //1 second
setTimeout(function() {

function setProgress (percentage) {
  document.getElementById('grad').setAttribute('y1', (100 - percentage) + '%');
  
}

var loading = $("#loading");
var home = $("#homePage");

var x = 0;
var timer = setInterval(function(){ 
    					  setProgress(x);
    					  if (x == 100) {
 clearInterval(timer),
 $(loading).fadeTo(1000, 0);
 $(home).fadeTo(1000, 1);


}
                       

    					  x++;
                          }, 15);  
}, delay);






