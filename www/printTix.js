var print = function(str, callback) {
	cordova.exec(callback, function(err) {
		callback('Cannot Print.');
	}, "MyStarIO", "print", [str0, str1]);
};
module.exports = print;
