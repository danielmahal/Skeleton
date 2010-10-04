var Frog = function(x,y) {
	var frog = this;
	
	frog.x = x;
	frog.y = y;
	frog.angle = 0;
	
	frog.skeleton = null;
	
	frog.update = function(mouse) {
		frog.angle = Math.atan2(mouse.y - frog.y,mouse.x - frog.x);
		frog.skeleton.rig.x = frog.x;
		frog.skeleton.rig.y = frog.y;
		frog.skeleton.rig.angle = frog.angle;
		frog.skeleton.update();
	};
	
	frog.draw = function(context) {
		frog.skeleton.draw(context);
	};
	
	(function() {
		frog.skeleton = new FrogSkeleton();
	})();
}