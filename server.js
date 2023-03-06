const express = require("express");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET all departments
// db.query(`SELECT * FROM department`, (err, rows) => {
//   console.log(rows);
// });

// GET a SINGLE department
// db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE a SINGLE department
// db.query(`DELETE FROM department WHERE ID = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// CREATE a SINGLE department
// const sql = (`INSERT INTO department (id, department_name)
//             VALUES (?, ?)`);

// const params = [1,'Executive Leadership Team'];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
