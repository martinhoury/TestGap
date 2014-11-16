if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var infopos= "<h2>Position déterminée<br></h2>";
		infopos+= "Latitude : "+position.coords.latitude+"<br>";
		infopos+= "Longitude: "+position.coords.longitude+"<br>";
		infopos+= "Altitude : "+position.coords.altitude+"<br>";
		document.getElementById("localisation").innerHTML= infopos;
	});
}