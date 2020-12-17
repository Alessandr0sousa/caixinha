const express = require('express');
const routes = express.Router();
// Rotas da tabela pessoa
const PessoaController = require('./controllers/PessoaController');

routes.get('/pessoa', PessoaController.index);
routes.get('/pessoa/:id', PessoaController.show);
routes.get(`/pessoa/:nome/:senha`, PessoaController.login);
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
//Rotas da tabela Emprestimo
const EmprestimoController = require('./controllers/EmprestimoController');

routes.get('/emprestimo', EmprestimoController.index);
routes.get('/emprestimo/:id', EmprestimoController.show);
routes.delete('/emprestimo/:id', EmprestimoController.destroy);
routes.post('/emprestimo', EmprestimoController.store);
routes.put('/emprestimo/:id', EmprestimoController.update);
//Rotas da tabela Pagamento
const PagamentoController = require('./controllers/PagamentoController');

routes.get('/pagamento', PagamentoController.index);
routes.get('/pagamento/:id', PagamentoController.show);
routes.delete('/pagamento/:id', PagamentoController.destroy);
routes.post('/pagamento', PagamentoController.store);
routes.put('/pagamento/:id', PagamentoController.update);
//Rotas da tabela grupo
const GrupoController = require('./controllers/GrupoController');

routes.get('/grupo', GrupoController.index);
routes.get('/grupo/:id', GrupoController.show);
routes.delete('/grupo/:id', GrupoController.destroy);
routes.post('/grupo', GrupoController.store);
routes.put('/grupo/:id', GrupoController.update);

module.exports = routes;