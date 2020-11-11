const con = require('../db');
const uniqid = require('uniqid');

const ins = 'INSERT INTO cotas set ?';

const up = 'UPDATE cotas Set ? where id_cota = ?';

module.exports = {
    async index(req, res) {
        const id = uniqid();
        con.query('select * from cotas', (err, rows) => {
            try {
                res.json([id, rows]);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async show(req, res) {
        con.query('select * from cotas where id_cota = ?', [req.params.id], (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async destroy(req, res) {
        con.query('Delete from cotas where id_cota = ?', [req.params.id], (err, rows) => {
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