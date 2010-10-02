var Skeleton = function() {
	var skeleton = this;
	var rootBone;
	
	
	skeleton.addJoint = function(joint) {
		if(!joint.parentJoint) {
			rootJoint = joint;
		}
	}
	
	skeleton.update = function() {
		
	}
	
	skeleton.draw = function() {
		
	};
}