const express = require('express');
const routes = express.Router();
// Rotas da tabela pessoa
const PessoaController = require('./controllers/PessoaController');

routes.get('/pessoa', PessoaController.index);
routes.get('/pessoa/:id', PessoaController.show);
routes.delete('/pessoa/:id', PessoaController.destroy);
routes.post('/pessoa', PessoaController.store);
routes.put('/pessoa/:id', PessoaController.update);
// Rotas da tabela Cotas
const CotaController = require('./controllers/CotaController');

routes.get('/cota', CotaController.index);
routes.get('/cota/:id', CotaController.show);
routes.delete('/cota/:id', CotaController.destroy);
routes.post('/cota', CotaController.store);
routes.put('/cota/:id', CotaController.update);

module.exports = routes;