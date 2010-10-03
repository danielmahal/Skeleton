FrogSkeleton = function() {
	var frogSkeleton = this;
	
	frogSkeleton.rig = {
		options: { angle: 0 },
		body: { options: { distance: 15, angleDelay: 3 },
			head: { options: { distance: 10 }},

			leftArm: { options: { distance: 10, angle: Math.PI*.5, angleDelay: 3},
				underArm: { options: { distance: 5, angle: Math.PI*1.5, angleDelay: 3 }}
			},

			rightArm: { options: {distance: 10, angle: Math.PI * 1.5,angleDelay: 3},
				underArm: { options: {distance: 5, angle: Math.PI*0.5, angleDelay: 3}}
			}
		},

		leftLeg: { options: { distance: 15, angle: Math.PI * 0.6, angleDelay: 10 },
			thigh: { options: { distance: 10, angle: 1.8 },
				foot: { options: { distance: 5, angle: Math.PI * 1.4 }}
			}
		},

		rightLeg: { options: { distance: 15, angle: Math.PI * 1.4, angleDelay: 10 },
			thigh: { options: { distance: 10, angle: Math.PI * 1.5 },
				foot: { options: { distance: 5, angle: Math.PI * 0.6 }}
			}
		}
	};
	
	// Tail
	var parent = frogSkeleton.rig;
	for(var i = 0; i < 5; i++) {
		var angle = i == 0 ? Math.PI : 0;
		parent = parent['tail'+i] = {options:{
			angle: angle,
			distance: 10,
			angleDelay: 10
		}};
	}
	
	this.setup();
};

FrogSkeleton.prototype = new Skeleton;