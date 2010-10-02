var Joint = function(options) {
	var joint = this;
	joint.options = options;
	
	joint.draw = function(context) {
		
	};
	
	(function() {
		for(i in options) {
			joint[i] = options[i];
		}
	})();
}