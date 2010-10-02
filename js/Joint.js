var Joint = function(options) {
	var joint = this;
	
	joint.x = 0;
	joint.y = 0;
	joint.angle = 0;
	
	joint.options = options;
	joint.joints = {};
	
	joint.addJoint = function(jointName,j) {
		joint.joints[jointName] = j;
	};
	
	joint.addJoints = function(joints) {
		for(i in joints) {
			joint.joints[i] = joints[i];
		}
	};
	
	(function() {
		
	})();
}