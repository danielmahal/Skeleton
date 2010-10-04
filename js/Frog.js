var Frog = function(x,y) {
	var frog = this;
	
	frog.x = x;
	frog.y = y;
	frog.angle = 0;
	frog.momentum = 0;
	
	frog.skeleton = null;
	
	frog.update = function(mouse) {
		var targetAngle = Math.atan2(mouse.y - frog.y,mouse.x - frog.x);
		var angleDiff = targetAngle - frog.angle;
		
		while(angleDiff < -Math.PI) {
			angleDiff += Math.PI * 2;
		}
		while(angleDiff > Math.PI) {
			angleDiff -= Math.PI * 2;
		}
		
		frog.angle += 0.15 * angleDiff;
		
		frog.x += Math.cos(frog.angle) * frog.momentum;
		frog.y += Math.sin(frog.angle) * frog.momentum;
		
		frog.skeleton.rig.x = frog.x;
		frog.skeleton.rig.y = frog.y;
		frog.skeleton.rig.angle = frog.angle;
		frog.skeleton.update();
	};
	
	frog.draw = function(context) {
		//frog.skeleton.debug(context);
		frog.skeleton.draw(context);
	};
	
	(function() {
		frog.skeleton = new FrogSkeleton();
	})();
}