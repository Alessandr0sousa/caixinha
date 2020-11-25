const con = require('../db');

const ins = 'INSERT INTO pessoa set ?';

const up = 'Update pessoa Set ? where id_pes ?';

module.exports = {
    async index(req, res) {
        con.query('SELECT * FROM cota_pessoa', (err, rows) => {
            try {
                res.json(rows);
            } catch (error) {
                console.error(err);
            }
        });
    },
    async show(req, res) {
        con.query('SELECT * FROM cota_pessoa where id_cota = ?', [req.params.id], (err, rows) => {
            try {
                const response = rows.map(row=> {
                    const{id_pes, id_cota, nome, ...parcela} = row;
                    return{
                        id_pes,
                        id_cota,
                        nome,
                        parcelas: Object.values(parcela)
                    }
                });
                return res.json(response);
            } catch (error) {
                res.json(err);
            }
        });
    },
    async destroy(req, res) {
        con.query('Delete from pessoa where id_pes = ?', [req.params.id], (err, rows) => {
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
                res.json([req.body]);
            } catch (error) {
                console.error("Erro: ", error);
            }
        });
    }
};