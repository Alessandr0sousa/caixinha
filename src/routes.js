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
routes.patch('/cota/:id', CotaController.update);
//Rotas da tabela Eprestimo
const EmprestimoController = require('./controllers/EmprestimoController');

routes.get('/emprestimo', EmprestimoController.index);
routes.get('/emprestimo/:id', EmprestimoController.show);
routes.delete('/emprestimo/:id', EmprestimoController.destroy);
routes.post('/emprestimo', EmprestimoController.store);
routes.put('/emprestimo/:id', EmprestimoController.update);

module.exports = routes;