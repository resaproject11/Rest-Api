const mysql = require("mysql");

//create mysql connection

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_project",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Sucessfull!");
});

module.exports = dbConn;