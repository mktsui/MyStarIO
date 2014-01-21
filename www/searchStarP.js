var searchP = function(str, callback) {
        cordova.exec(callback, function(err) {
                callback('Cannot Search.');
        }, "MyStarIO", "searchP", [str]);
};
module.exports = searchP;
