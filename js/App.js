var App = function(aCanvas) {
	var canvas = aCanvas,
		context,
		frog;
	
	this.update = function() {
		
	};
	
	this.draw = function() {
		
	};
	
	(function() {
		frog = new Frog(200,100);
		context = canvas.getContext('2d');
	})();
}