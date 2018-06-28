// Import the ORM to create functions that will interact with the database.
var orm = require("../Config/orm.js");

var Burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    })
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    })
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    })
  },
 
};

// Export the database functions for the controller (catsController.js).
module.exports = Burger;