var runLoop = function() {
	app.update();
	app.draw();
}

var app = new App(document.getElementById('canvas'));

document.addEventListener('mousemove', app.mousemove);
document.addEventListener('mousedown', app.mousedown);
document.addEventListener('mouseup', app.mouseup);

setInterval(runLoop, 30);