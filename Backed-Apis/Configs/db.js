const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
    });

    db.connect((err) => {
        if (err) {
            console.error('Error Connecting To Database:', err);
            throw err; // 
        }
        console.log('Connected To Database!');
    });
module.exports = db;

