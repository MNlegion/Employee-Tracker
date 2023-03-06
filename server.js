const express = require("express");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// db.query(`SELECT * FROM department`, (err, rows) => {
//   console.log(rows);
// });

// GET a SINGLE department
db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
