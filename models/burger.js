const orm = require("../config/orm");

let burger = {

    getAll: function(callback) {
        orm.selectAll(function(res){
            callback(res);
        });
    },
    
    createBurger: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res){
            callback(res);
        });
    }

}

module.exports = burger;