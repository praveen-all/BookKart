const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "praveeNA@123.,.,",
  database: "book",
});

module.exports = connection;
