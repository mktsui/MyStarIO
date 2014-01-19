var echo = function(str, callback) {
	cordova.exec(callback, function(err) {
		callback('Nothing to echo.');
	}, "MyStarIO", "echo", [str]);
};
module.exports = echo;
