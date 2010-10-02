var Skeleton = function(rootJoint) {
	var skeleton = this;
	
	skeleton.rootJoint = rootJoint;
	
	skeleton.update = function(joint, parent) {
		if(!joint) {
			joint = skeleton.rootJoint;
		} else {
			if(joint.options.angle === undefined) {
				joint.options.angle = parent.options.angle;
			}
			
			var targetAngle = parent.angle + joint.options.angle;
			joint.angle += (targetAngle - joint.angle) / (joint.options.angleDelay || 1);
			
			joint.x = parent.x + Math.cos(joint.angle) * joint.options.distance;
			joint.y = parent.y + Math.sin(joint.angle) * joint.options.distance;
		}
		
		for(i in  joint.joints) {
			skeleton.update(joint.joints[i], joint);
		}
	}
	
	skeleton.debug = function(context, joint, parent) {
		if(!joint) {
			joint = skeleton.rootJoint;
		}
		
		context.strokeRect(joint.x-2,joint.y-2,4,4);
		
		if(parent) {
			context.beginPath();
			context.moveTo(parent.x, parent.y);
			context.lineTo(joint.x, joint.y);
			context.closePath();
			context.stroke();
		}
		
		for(i in  joint.joints) {
			skeleton.debug(context, joint.joints[i], joint);
		}
	};
}