if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var infopos= "<h2>Position déterminée<br></h2>";
		infopos+= "Latitude : "+position.coords.latitude+"<br>";
		infopos+= "Longitude: "+position.coords.longitude+"<br>";
		infopos+= "Altitude : "+position.coords.altitude+"<br>";
		document.getElementById("localisation").innerHTML= infopos;
	});
}

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', devOrientHandler, false);
	document.getElementById("doEvent").innerHTML = "DeviceOrientation";
	window.addEventListener('deviceorientation', function(eventData) {

    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;
    var dir = eventData.alpha
	
    deviceOrientationHandler(tiltLR, tiltFB, dir);
	}, false);
} else {
  document.getElementById("doEvent").innerHTML = "Not supported."
}

document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
document.getElementById("doDirection").innerHTML = Math.round(dir);

// Apply the transform to the image
var logo = document.getElementById("imgLogo");
logo.style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
logo.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";

function deviceMotionHandler(eventData) {
  var info, xyz = "[X, Y, Z]";

  // Grab the acceleration from the results
  var acceleration = eventData.acceleration;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  document.getElementById("moAccel").innerHTML = info;

  // Grab the acceleration including gravity from the results
  acceleration = eventData.accelerationIncludingGravity;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  document.getElementById("moAccelGrav").innerHTML = info;

  // Grab the rotation rate from the results
  var rotation = eventData.rotationRate;
  info = xyz.replace("X", rotation.alpha);
  info = info.replace("Y", rotation.beta);
  info = info.replace("Z", rotation.gamma);
  document.getElementById("moRotation").innerHTML = info;

  // // Grab the refresh interval from the results
  info = eventData.interval;
  document.getElementById("moInterval").innerHTML = info;       
}