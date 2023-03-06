const express = require('express');
const router = express.router();
const db = require('../../config/connection');

// GET all departments
// Need to convert to ROUTER
db.query(`SELECT * FROM department`, (err, rows) => {
  console.log(rows);
});


// GET single department
// Need to convert to ROUTER
db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});


// CREATE single department
// Need to convert to ROUTER
const sql = (`INSERT INTO department (id, department_name)
            VALUES (?, ?)`);

const params = [1,'Executive Leadership Team'];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


// Delete single department
// Need to convert to ROUTER
db.query(`DELETE FROM department WHERE ID = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


module.exports = router;