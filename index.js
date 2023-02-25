const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vinojan@1999',
    database: 'crud_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Valimai', 'Good bikers movie');"
    db.query(sqlInsert, (err, result) => {
        if (err) throw err;
        console.log("Result: " + result);
    });
});


app.listen(3001, () => {
    console.log("Server started on PORT 3001")
})