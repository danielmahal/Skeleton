FrogSkeleton = function() {
	var frogSkeleton = this;
	
	frogSkeleton.rig = {
		options: { angle: 0,stiffness: .1, size: 16 },
		body: { options: { distance: 10, stiffness: 1, size: 16 },
			head: { options: { distance: 4.5, stiffness: 1, size: 10 }} ,
			rightArm: { options: { distance: 10, angle: 1.5, stiffness: .2, size: 4, minAngle: 1.5, maxAngle: 2.7},
				underArm: { options: { distance: 4, angle: -1.8, stiffness: .1, size: 2, maxAngle: 0, minAngle: -1.8 },
					hand: 	{ options: { distance: 4, angle: 0, stiffness: 1, size:4 }}
				}
			},
	
			leftArm: { options: {distance: 10, angle: -1.5,stiffness: .2, size: 4, minAngle: -2.7, maxAngle: -1.5 },
				underArm: { options: {distance: 4, angle: 1.8, stiffness: .1, size: 2, maxAngle: 1.8, minAngle: 0  },
					hand: 	{ options: { distance: 4, angle: 0, stiffness: 1, size:4 }}
				}
			}
		} ,
		
		rightLeg: { options: { distance: 12, angle: 1.6, stiffness: 0.2, minAngle: 1.6, maxAngle: 2.8, size: 5 },
			thigh: { options: { distance: 10, angle: 2.2, stiffness: 0.1, minAngle: 0, maxAngle: 2.5, size: 4 },
				foot: { options: { distance: 10, angle: 3.6, stiffness: .05, minAngle: 3.6, maxAngle: 5.5, size: 2 }}
			}
		},
	
		leftLeg: { options: { distance: 12, angle: -1.8, stiffness: .2, minAngle: -3, maxAngle: -1.8, size: 5 },
			thigh: { options: { distance: 10, angle: -2.2, stiffness: .1, maxAngle: 0, minAngle: -2.5, size: 4 },
				foot: { options: { distance: 10, angle: 2.5, stiffness: .05, minAngle: 1, maxAngle: 2.5, size: 2 }}
			}
		}
	};
	
	// Tail
	// var parent = frogSkeleton.rig;
	// var nTail = 10;
	// for(var i = 0; i < nTail; i++) {
	// 	var angle = i == 0 ? Math.PI : 0;
	// 	
	// 	var maxAngle = i == 0 ? 4 : .8;
	// 	var minAngle = i == 0 ? 2 : -0.8;
	// 	
	// 	parent = parent['tail'+i] = {options:{
	// 		angle: angle,
	// 		maxAngle: maxAngle,
	// 		minAngle: minAngle,
	// 		distance: 3,
	// 		stiffness: 0.2,
	// 		size: 5 - i*0.5
	// 	}};
	// }
	
	this.setup();
};

FrogSkeleton.prototype = new Skeleton;