FrogSkeleton = function() {
	var frogSkeleton = this;
	
	frogSkeleton.rig = {
		pelvis: { options: { angle: 0 },
			body: { options: { distance: 15, angleDelay: 3 },
				head: { options: { distance: 10 }},

				leftArm: { options: { distance: 10, angle: Math.PI*.5, angleDelay: 3},
					underArm: { options: { distance: 5, angle: Math.PI*1.5, angleDelay: 3 }}
				},

				rightArm: { options: {distance: 10, angle: Math.PI * 1.5,angleDelay: 3},
					underArm: { options: {distance: 5, angle: Math.PI*1.5, angleDelay: 3}}
				}
			},

			leftLeg: { options: { distance: 15, angle: Math.PI * 0.8, angleDelay: 5 },
				thigh: { options: { distance: 10 },
					foot: { options: { distance: 5 }}
				}
			},

			rightLeg: { options: { distance: 15, angle: Math.PI * 1.2, angleDelay: 5 },
				thigh: { options: { distance: 10 },
					foot: { options: { distance: 5 }}
				}
			}
		}
	};
	
	this.setup();
};

FrogSkeleton.prototype = new Skeleton;