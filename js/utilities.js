/** @jsx React.DOM */

var extend = function(target, source) {
  if (typeof target != "object") return source;
	var properties = Object.getOwnPropertyNames(source);
	for (var j = 0; j < properties.length; j ++) {
		var property = properties[j];
		target[property] = extend(target[property], source[property]);
  }
  return target;
};

var PubSub = function() {
	var listeners = {};
	return {
		listen: function(event, callback) {
			if (!listeners[event]) listeners[event] = [];
			listeners[event].push(callback);
			return function() {
				var index = listeners.indexOf(callback);
				if (index != -1) listeners.splice(index, 1);
			};
		},
		publish: function(event, data) {
			if (!listeners[event]) listeners[event] = [];
			for (var i = 0; i < listeners[event].length; i ++) {
				listeners[event][i](data);
			}
		}
	};
};

// global pubsub (poor man's flux)
var Events = new PubSub();