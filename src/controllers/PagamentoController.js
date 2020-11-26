const con = require('../db');

const ins = 'INSERT INTO pagamentos set ?';

const up = 'UPDATE pagamentos Set ? where id_pag = ?';

module.exports = {
    async index(req, res) {
        con.query('select * from pagamentos', (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async show(req, res) {
        con.query('select * from pagamentos where id_pag = ?', [req.params.id], (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async destroy(req, res) {
        con.query('Delete from pagamentos where id_pag = ?', [req.params.id], (err, rows) => {
            try {
                res.send('Successfully deleted');
            } catch (error) {
                console.error(err);
            }
        });
    },
    async store(req, res) {
        con.query(ins, [req.body], (err, rows) => {
            try {
                console.log('Successfully inserted');
                res.json(rows);
            } catch (error) {
                res.json(err);
            }
        });
    },
    async update(req, res) {
        con.query(up, [req.body, req.params.id], (err, rows) => {
            try {
                console.log("Successfully changed");
                res.json(rows);
            } catch (error) {
                res.json(err);
            }
        });
    }
};
