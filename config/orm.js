const connection = require("./connection");

const orm = {
  selectAll: function (callback) {
    let query = "SELECT * FROM burgers";
    connection.query(query, function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },

  insertOne: function (burger_name, callback) {
    let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    connection.query(query, burger_name, function (err, res) {
      if (err) throw err;
      callback(res);
    });
    console.log("inserting a burger!");
  },

  updateOne: function (id, boolean, callback) {
    let query = "UPDATE burgers SET ? WHERE ?";
    let update = [{ devoured: boolean }, { id: id }];
    connection.query(query, update, function (err, res) {
      if (err) throw err;
      callback(res);
    });
    console.log("Updating burger status!");
  },

  deleteOne: function (id, callback) {
    let query = "DELETE FROM burgers WHERE ?";
    connection.query(query, { id: id }, function (err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
};

module.exports = orm;
