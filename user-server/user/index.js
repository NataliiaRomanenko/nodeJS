var db = require('../bd')
db.connect();
var log = require('logger') (module);

function User(name) {
    this.name = name;
};

User.prototype.hello = function (who) {
    log(db.getPhrases("Hello") + ", " + who.name )
};

console.log("user.js is required!");

module.exports = User;
// global.User = User;

//console.log(module);
