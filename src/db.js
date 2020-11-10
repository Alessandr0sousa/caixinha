const mysql = require('mysql');

const con = mysql.createConnection({
    host: '192.185.177.26',
    user: 'bolao251_ale',
    password: 'olafe281',
    database: 'bolao251_caixinha',
    port: 3306,
    ssl: true
})

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

module.exports = con;