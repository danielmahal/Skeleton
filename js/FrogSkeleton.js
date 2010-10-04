FrogSkeleton = function() {
	var frogSkeleton = this;
	
	frogSkeleton.rig = {
		options: { angle: 0,stiffness: .1, size: 20 },
		body: { options: { distance: 10, stiffness: 1, size: 16 },
			head: { options: { distance: 8, stiffness: .6, size: 8 }} ,
			leftArm: { options: { distance: 10, angle: Math.PI*.5, stiffness: 1, size: 4 },
				underArm: { options: { distance: 4, angle: Math.PI*1.5, stiffness: 1, size: 2 },
					hand: 	{ options: { distance: 4, angle: 0, stiffness: 1, size:4 }}
				}
			},

			rightArm: { options: {distance: 10, angle: Math.PI * 1.5,stiffness: 1, size: 4 },
				underArm: { options: {distance: 4, angle: Math.PI*0.5, stiffness: 1, size: 2  },
					hand: 	{ options: { distance: 4, angle: 0, stiffness: 1, size:4 }}
				}
			}
		} ,
		
		rightLeg: { options: { distance: 15, angle: 2.0, stiffness: 0.1, minAngle: 1.6, maxAngle: 2.8, size: 8 },
			thigh: { options: { distance: 15, angle: 1.5, stiffness: 0.3, minAngle: 0, maxAngle: 2.5, size: 4 },
				foot: { options: { distance: 8, angle: Math.PI * 1.4, stiffness: .4, minAngle: 4, maxAngle: 5.5, size: 6 }}
			}
		},

		leftLeg: { options: { distance: 15, angle: -2, stiffness: .1, minAngle: -3, maxAngle: -1.8, size: 8 },
			thigh: { options: { distance: 15, angle: -1.5, stiffness: .3, maxAngle: 0, minAngle: -2.5, size: 4 },
				foot: { options: { distance: 8, angle: 1.5, stiffness: .4, minAngle: 1, maxAngle: 2, size: 6 }}
			}
		}
	};
	
	// Tail
	var parent = frogSkeleton.rig;
	var nTail = 10;
	for(var i = 0; i < nTail; i++) {
		var angle = i == 0 ? Math.PI : 0;
		
		var maxAngle = i == 0 ? 4 : .8;
		var minAngle = i == 0 ? 2 : -0.8;
		
		// parent = parent['tail'+i] = {options:{
		// 	angle: angle,
		// 	maxAngle: maxAngle,
		// 	minAngle: minAngle,
		// 	distance: 5,
		// 	stiffness: 0.2,
		// 	size: 8 - i*0.8
		// }};
	}
	
	this.setup();
};

FrogSkeleton.prototype = new Skeleton;