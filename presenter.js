var request = false;
var xmlHttpTimeout = null;
request = new XMLHttpRequest();
request.onreadystatechange=function() {
    if (request.readyState==4) {
        var status = document.getElementById("statusbar");
        if (request.status == 200) {
            status.innerHTML='<div class="status_success">'+request.responseText+'</div>';
        }
        else {
            status.innerHTML='<div class="status_error">'+request.responseText+'</div>';
        }
    }
};
function exec(op) {
	request.open("GET", "/do/"+op, true);
	request.send();
}

/* updateOrientation checks the current orientation, sets the body's
   class attribute to portrait, landscapeLeft, or landscapeRight, and
   displays a descriptive message on "Handling iPhone or iPod touch
   Orientation Events".  */
function updateOrientation()
{
	/*window.orientation returns a value that indicates whether iPhone
	  is in portrait mode, landscape mode with the screen turned to
	  the left, or landscape mode with the screen turned to the
	  right. */
	var orientation=window.orientation;
	output=document.getElementById("currentOrientation");
	var cont = document.getElementById("container");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	cont.style.height="100px";
	output.innerHTML="" +window.innerHeight+ "x" +window.innerWidth+ "";
	cont.style.bottom=window.innerHeight  + "px";
	cont.style.right=window.innerWidth  + "px";

	next.style.height=window.innerHeight + "px";
	next.style.width=window.innerWidth/2  + "px";

	prev.style.height=window.innerHeight  + "px";
	prev.style.width=window.innerWidth/2  + "px";


	switch(orientation)
	{
		case 0:
				/* If in portrait mode, sets the body's class
				   attribute to portrait. Consequently, all style
				   definitions matching the body[class="portrait"]
				   declaration in the iPhoneOrientation.css file will
				   be selected and used to style "Handling iPhone or
				   iPod touch Orientation Events". */
				//document.body.setAttribute("class","portrait");

				/* Add a descriptive message on "Handling iPhone or
				 * iPod touch Orientation Events"  */
			//				output.innerHTML="Now in portrait orientation (Home button on the bottom).";
				break;

		case 90:
				/* If in landscape mode with the screen turned to the
				   left, sets the body's class attribute to
				   landscapeLeft. In this case, all style definitions
				   matching the body[class="landscapeLeft"]
				   declaration in the iPhoneOrientation.css file will
				   be selected and used to style "Handling iPhone or
				   iPod touch Orientation Events". */
			//				document.body.setAttribute("class","landscapeLeft");

			//				output.innerHTML="Now in landscape orientation and turned to the left (Home button to the right).";
				break;

		case -90:
				/* If in landscape mode with the screen turned to the
				   right, sets the body's class attribute to
				   landscapeRight. Here, all style definitions
				   matching the body[class="landscapeRight"]
				   declaration in the iPhoneOrientation.css file will
				   be selected and used to style "Handling iPhone or
				   iPod touch Orientation Events". */
				//document.body.setAttribute("class","landscapeRight");
				
			//				output.innerHTML="Now in landscape orientation and turned to the right (Home button to the left).";
				break;
	}

}

var touchbeginx= 0;

function onTouchStart(event) {
	touchbeginx = event.changedTouches[0].pageX;

};


function onTouchMove(event) {
	event.preventDefault();
};

function onTouchEnd(event) {
	var td = touchbeginx - event.changedTouches[0].pageX;
	if (td>50) {
		exec('prev');
	} else if (td < -50) {
		exec('next');
	}
};


// Point to the updateOrientation function when iPhone switches
// between portrait and landscape modes.

window.onorientationchange=updateOrientation;

window.ontouchstart=onTouchStart;
window.ontouchend=onTouchEnd;
window.ontouchmove=onTouchMove;
