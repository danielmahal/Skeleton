var runLoop = function() {
	app.update();
	app.draw();
}

var app = new App(document.getElementById('canvas'));
setInterval(runLoop, 30);