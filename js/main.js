var runLoop = function() {
	app.update();
	app.draw();
}

var app = new App(document.getElementById('canvas'));

document.addEventListener('mousemove', app.mousemove);

setInterval(runLoop, 30);