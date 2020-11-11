const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: true
})

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return;
    }
    console.log('Connection established!')
})

module.exports = con;