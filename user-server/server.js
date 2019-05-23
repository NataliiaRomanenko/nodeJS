//for exports User
var User = require('./user');
var bd= require('./bd');


function run() {
    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);
    console.log(bd.getPhrases("Run successful"));
}
if(module.parent){
    exports.run = run;
}else{
    run();
}


//for global User
// require('./user');
//
// var vasya = new User("Vasya");
// var petya = new User("Petya");
//
// vasya.hello(petya);
