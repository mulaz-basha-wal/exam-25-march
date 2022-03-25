// Create a User table where you have email(varchar100),password(varchar100), userinfo(text) and dob(date type) . Create table using express api with mysql
// For the above table now create API where you can create user, view user, view all users, delete user, delete all users, modify one user.
// using react integrate with the user api where you can create user, delete user, delete all user
var express = require("express");
var router = express.Router();
const connector = require("../connect");

router.get("/createtable", function (req, res) {
  connector.query(
    "CREATE TABLE users (id int, email VARCHAR(100), password VARCHAR(100), userInfo VARCHAR(100), dob DATE);",
    function (err, results, fields) {
      res.json({ err, results, fields });
    }
  );
});

router.post("/", (req, res) => {
  const { id, email, password, userInfo, dob } = req.body;
  const sql = `INSERT INTO users VALUES( "${id}","${email}", "${password}","${userInfo}", "${dob}");`;
  connector.query(sql, (error, result, fields) => {
    res.json({ error, result, fields });
  });
});

router.get("/", (req, res) => {
  const sql = "select * from users";
  connector.query(sql, (error, result, fields) => {
    res.json({ error, result, fields });
  });
});

router.put("/:id", (req, res) => {
  const { email, password, userInfo, dob } = req.body;
  const sql = `update authors set email="${email}", last_name="${password}", dob="${userInfo}",dod="${dob}" where id="${req.params.id}";`;
  connector.query(sql, (error, result, fields) => {
    res.json({ error, result, fields });
  });
});

router.delete("/:id", (req, res) => {
  const sql = `delete from users where id="${req.params.id}";`;
  connector.query(sql, (error, result, fields) => {
    res.json({ error, result, fields });
  });
});

router.delete("/delete/all", (req, res) => {
  const sql = "truncate table users";
  connector.query(sql, (error, result, fields) => {
    res.json({ error, result, fields });
  });
});
module.exports = router;
