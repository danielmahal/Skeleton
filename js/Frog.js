var Frog = function(x,y) {
	var frog = this;
	
	frog.x = x;
	frog.y = y;
	frog.angle = 0;
	
	frog.skeleton = null;
	
	frog.update = function(mouse) {
		frog.angle = Math.atan2(mouse.y - frog.y,mouse.x - frog.x);
		
	};
	
	frog.draw = function(context) {
		//frog.skeleton.debug(context);
	};
	
	(function() {
		frog.skeleton = new FrogSkeleton();
	})();
}