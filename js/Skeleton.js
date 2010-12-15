var Skeleton = function(rootJoint) {
	
	this.update = function(joint, parent) {
		if(!joint) {
			joint = this.rig;
		} else {
			if(joint.options.angle === undefined) {
				joint.options.angle = 0;
			}
			
			var targetAngle2 = parent.angle + joint.options.angle;
			var targetAngle = Math.atan2(joint.y - parent.y, joint.x - parent.x);
			var angleDiff = targetAngle - joint.angle;
			
			while(angleDiff < -Math.PI) {
				angleDiff += Math.PI * 2;
			}
			while(angleDiff > Math.PI) {
				angleDiff -= Math.PI * 2;
			}
			
			if(joint.angle > parent.angle + joint.options.maxAngle) {
				joint.angle = parent.angle + joint.options.maxAngle;
			}
			
			if(joint.angle < parent.angle + joint.options.minAngle) {
				joint.angle = parent.angle + joint.options.minAngle;
			}
			
			joint.angle += angleDiff;
			joint.angle += (joint.options.stiffness || 0) * (targetAngle2 - joint.angle);
			
			joint.x = parent.x + Math.cos(joint.angle) * joint.options.distance*2.5;
			joint.y = parent.y + Math.sin(joint.angle) * joint.options.distance*2.5;
			
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
			context.arc(joint.x, joint.y, (joint.options.size || 1), angle + Math.PI*1.5, angle + Math.PI*.5);
			context.arc(parent.x, parent.y, (parent.options.size || 1), angle + Math.PI*.5, angle + Math.PI*1.5);
			context.closePath();
			context.fill();
			
			// context.beginPath();
			// 			context.arc(parent.x, parent.y, (parent.options.size || 1), 0, Math.PI*2);
			// 			context.closePath();
			// 			context.stroke();
		}
		
		for(i in  joint.joints) {
			this.draw(context, joint.joints[i], joint);
		}
	}
	
	this.debug = function(context, joint, parent) {
		if(!joint) {
			joint = this.rig;
		}
		context.strokeStyle = 'red';
		context.strokeRect(joint.x-2,joint.y-2,4,4);
		
		if(parent) {
			context.beginPath();
			context.moveTo(parent.x, parent.y);
			context.lineTo(joint.x, joint.y);
			context.closePath();
			context.stroke();
		}
		
		if(joint.options.minAngle) {
			var angle = parent.angle + joint.options.minAngle;
			context.strokeStyle = 'red';
			context.beginPath();
			context.moveTo(parent.x, parent.y);
			context.lineTo(parent.x + Math.cos(angle)*10, parent.y + Math.sin(angle)*10);
			context.closePath();
			context.stroke();
		}
		
		if(joint.options.maxAngle) {
			var angle = parent.angle + joint.options.maxAngle;
			context.strokeStyle = 'red';
			context.beginPath();
			context.moveTo(parent.x, parent.y);
			context.lineTo(parent.x + Math.cos(angle)*10, parent.y + Math.sin(angle)*10);
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