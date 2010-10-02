var Frog = function(x,y) {
	var frog = this;
	
	frog.x = x;
	frog.y = y;
	
	frog.joints = {};
	
	frog.skeleton = null;
	
	(function() {
		frog.joints.body = new Joint({
			angle: 0,
			parent: null
		});
		console.log(frog.joints.body);
		frog.skeleton = new Skeleton();
	})();
}