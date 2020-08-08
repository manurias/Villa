var vp = document.getElementById("villaManurias");
var foglio = vp.getContext("2d");
var map = "tile.png";

var imagine = new Image();
imagine.src = map; 
imagine.addEventListener("load", disegnare);

function disegnare()
{
	foglio.drawImage(imagine, 0, 0);
}


function random(min, maxi)
{
	var risultato; 
	risultato = Math.floor(Math.random() * (maxi - min + 1)) + min; 
	return risultato; 
}

