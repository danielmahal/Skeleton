var App = function(aCanvas) {
	var canvas = aCanvas,
		context,
		frog,
		mouse = {x:0,y:0};
	
	this.update = function() {
		frog.update(mouse);
	};
	
	this.draw = function() {
		context.clearRect(0,0,canvas.width,canvas.height);
		frog.draw(context);
	};
	
	this.mousemove = function(e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	};
	
	this.mousedown = function() {
		frog.momentum = 4;
	};
	
	this.mouseup = function() {
		frog.momentum = 0;
	};
	
	(function() {
		frog = new Frog(200,100);
		context = canvas.getContext('2d');
	})();
}