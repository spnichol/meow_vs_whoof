

var newbub = $(".bubble");
var logo = $(".logo");
var subhead = $(".logoSubhead");
var tl;
var tl1;
bubbleMotion = new TimelineMax({repeat: 3});
bubbleMotion.to(newbub, .10, {ease: Linear.easeNone, scaleX: 1, scaleY: 1})
bubbleMotion.to(newbub, .40, {ease: Linear.easeNone, scaleX: 1.05, scaleY: 0.95})
bubbleMotion.to(newbub, .40, {ease: Linear.easeNone, scaleX: 0.9, scaleY: 1.1})
bubbleMotion.to(newbub, .40, {ease: Linear.easeNone, scaleX: 1.02, scaleY: 0.98})
bubbleMotion.to(newbub, .40, {ease: Linear.easeNone, scaleX: .98, scaleY: 1.02})
bubbleMotion.to(newbub, .40, {ease: Linear.easeNone, scaleX: 1, scaleY: 1});

/* Integrated Timeline */
bubbleMovement = new TimelineMax();
bubbleMovement.set(newbub, {yPercent: -500, xPercent: 100});
bubbleMovement.set(logo, {yPercent: -50});
bubbleMovement.set(subhead, {xPercent: -50, opacity: 0, "shortRotationX":90});


bubbleMovement.to(newbub, 8, {ease:Linear.easeNone, yPercent: 4, xPercent: 0})
    .to(newbub, .75, {ease: Linear.easeNone, bottom: "40%"})
    .to(newbub, .30, {ease: Linear.easeNone, scaleX: 1.3, scaleY: 0.70}, "-=1.0")
    .to(newbub, .10, {ease: Linear.easeNone, display: "none"})
    .to(logo, .40, {ease: Linear.easeNone, display: "block"})
    .to(logo, .70, {ease: Bounce.easeOut, yPercent: 0, xPercent: 0})
    .to(subhead, .1, {display: "block"})
    .to(subhead, 1, { "shortRotationX":0, opacity: 1});





/*
if(maincont.length > 0){
    var offsetMain = maincont.position();
    function mouse(evt){
        console.log(offsetMain);
        var mouse_x = evt.pageX; 
        var mouse_y = evt.pageY;
        var body_half = maincont.width()/2;
        var vertical_half = maincont.height()/2;
        if (mouse_x < body_half) {
        	var leftshift = (body_half  -mouse_x) * - .1;
        	var leftrotate = (body_half  -mouse_x) *  .02;
        	TweenMax.to(leftGroup, 0.2, {xPercent: leftshift, rotationY: leftrotate}), .01;
        	console.log(leftshift);
        }
        else {
        	mouse_x == (mouse_x * 10);
        	var rightshift = (body_half  -mouse_x) * -.1;
        	var rightrotate = (body_half  -mouse_x) *  .02;
        	TweenMax.to(rightGroup, .2, {xPercent: rightshift, rotationY: rightrotate}), .01;
			console.log(rightshift);
       
        }

        if (mouse_y < vertical_half) {
        	var upshift = (vertical_half -mouse_y) * -.06;
        	TweenMax.to(rightGroup, .1, {yPercent: upshift}), .071;
        }
        	else {
        	var downshift = (vertical_half -mouse_y) * -.06;
        	TweenMax.to(leftGroup, .1, {yPercent: downshift}), .071;
        	}
     
      

        
        
        
   

    }
    $(document).mousemove(mouse);

}
*/