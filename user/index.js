var db = require('../node_modules/bd')
db.connect();
var log = require('logger') (module);

function Index(name) {
    this.name = name;
};

Index.prototype.hello = function (who) {
    log(db.getPhrases("Hello") + ", " + who.name )
};

console.log("user.js is required!");

module.exports = Index;
// global.Index = Index;

//console.log(module);
