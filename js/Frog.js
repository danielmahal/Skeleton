var Frog = function(x,y) {
	var frog = this;
	
	frog.x = x;
	frog.y = y;
	frog.angle = 0;
	
	frog.joints = {};
	
	frog.skeleton = null;
	
	frog.update = function(mouse) {
		frog.angle = 0.2;
		//atan2(y2 - y1, x2 - x1)
		frog.skeleton.rootJoint.angle = Math.atan2(mouse.y - frog.y,mouse.x - frog.x);
		frog.skeleton.rootJoint.x = frog.x;
		frog.skeleton.rootJoint.y = frog.y;
		
		frog.skeleton.update();
	};
	
	frog.draw = function(context) {
		frog.skeleton.debug(context);
	};
	
	(function() {
		var pelvis = new Joint({
			angle: 0
		});
		
		var body = new Joint({
			distance: 15,
			angleDelay: 3
		});
		
		var head = new Joint({
			distance: 10
		});
		
		var arm1 = new Joint({
			distance: 10,
			angle: Math.PI * .5,
			angleDelay: 3
		});
		
		var underArm1 = new Joint({
			distance: 5,
			angle: Math.PI*1.5,
			angleDelay: 3
		});
		
		var arm2 = new Joint({
			distance: 10,
			angle: Math.PI * 1.5,
			angleDelay: 5
		});
		
		var underArm2 = new Joint({
			distance: 5,
			angle: Math.PI*0.5,
			angleDelay: 3
		});
		
		var leg1 = new Joint({
			distance: 15,
			angle: Math.PI * 0.8,
			angleDelay: 5
		});
		
		var leg2 = new Joint({
			distance: 15,
			angle: Math.PI * 1.2,
			angleDelay: 3
		});
		
		var tail = [];
		for(var i = 0; i < 5; i++) {
			var parent = i == 0 ? pelvis : tail[i-1];
			var angle = i == 0 ? Math.PI : 0;
			tail[i] = new Joint({
				angle: angle,
				angleDelay: 5,
				distance: 10
			});
			parent.addJoint('tail'+i, tail[i]);
		}
		
		pelvis.addJoint('body', body);
		body.addJoint('head', head);
		body.addJoint('arm1', arm1);
		arm1.addJoint('underArm1', underArm1);
		body.addJoint('arm2', arm2);
		arm2.addJoint('underArm2', underArm2);
		pelvis.addJoint('leg1', leg1);
		pelvis.addJoint('leg2', leg2);
		
		frog.skeleton = new Skeleton(pelvis);
	})();
}