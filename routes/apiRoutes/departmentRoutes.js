const express = require('express');
const router = express.router();
const db = require('../../config/connection');

// GET all departments
// Need to convert to ROUTER
// GET all departments
app.get('/api/departments', (err, res) => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success',
            data: rows
        });
    });
});


// GET single department
// Need to convert to ROUTER
app.get('/api/department/:id', (req, res) => {
    const sql = `SELECT * FROM department WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success',
            data: row
        });
    });
});


// CREATE single department
// Need to convert to ROUTER
app.post('/api/department', ({ body }, res) => {
    const sql = `INSERT INTO department (department_name) 
    VALUES (?)`;
    const params = [body.department_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.json({
            message: 'Department created successfully!',
            data: body
        });
    });
});


// Delete single department
// Need to convert to ROUTER
app.delete('/api/department/:id', (req, res) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found!'
            });
        } else {
            res.json({
                message: 'Department Successfully Deleted', 
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});


module.exports = router;