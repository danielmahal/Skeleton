var Skeleton = function(rootJoint) {
	
	this.update = function(joint, parent) {
		if(!joint) {
			joint = this.rig;
		} else {
			if(joint.options.angle === undefined) {
				joint.options.angle = 0;
			}
			
			var targetAngle = parent.angle + joint.options.angle;
			joint.angle += (targetAngle - joint.angle) / (joint.options.angleDelay || 1);
			
			joint.x = parent.x + Math.cos(joint.angle) * joint.options.distance;
			joint.y = parent.y + Math.sin(joint.angle) * joint.options.distance;
			
		}
		
		for(i in joint.joints) {
			this.update(joint.joints[i], joint);
		}
	};
	
	this.draw = function(context, joint, parent) {
		if(!joint) {
			joint = this.rig;
		}
		
		
		
		if(parent) {
			var angle = Math.atan2(joint.y - parent.y, joint.x - parent.x);
			var length = joint.options.distance/2;
			context.strokeStyle = 'red';
			context.beginPath();
			context.moveTo(joint.x,joint.y);
			context.lineTo(joint.x + Math.cos(angle + Math.PI)*length,joint.y +  Math.sin(angle + Math.PI)*length);
			context.closePath();
			context.stroke();
			
			context.strokeStyle = 'green';
			context.beginPath();
			context.moveTo(parent.x,parent.y);
			context.lineTo(parent.x + Math.cos(angle)*length,parent.y +  Math.sin(angle)*length);
			context.closePath();
			context.stroke();
			
			// context.beginPath();
			// context.moveTo(parent.x, parent.y);
			// context.lineTo(joint.x, joint.y);
			// context.closePath();
			// context.stroke();
		}
		
		for(i in  joint.joints) {
			this.draw(context, joint.joints[i], joint);
		}
	}
	
	this.debug = function(context, joint, parent) {
		if(!joint) {
			joint = this.rig;
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
			this.debug(context, joint.joints[i], joint);
		}
	};
	
	this.recursiveRigSorter = function(object) {
		var newObj = {};
		newObj.joints = {};
		for(i in object) {
			if(i != 'options') {
				newObj.joints[i] = this.recursiveRigSorter(object[i]);
			} else {
				newObj.x = 0;
				newObj.y = 0;
				newObj.angle = 0;
				newObj.options = object[i];
			}
		}
		
		return newObj;
	}
	
	this.setup = function(object) {
		this.rig = this.recursiveRigSorter(this.rig);
		console.log('Fixed rig:',this.rig);
	};
};