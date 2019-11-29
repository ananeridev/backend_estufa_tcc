const { Router } = require('express');

const routes = new Router();

const estufaController = require('./controllers/EstufaController');

routes.get('/readEstufa', estufaController.read);

routes.post('/createEstufa', estufaController.create);
routes.post('/updateEstufa/:id', estufaController.update);
routes.post('/deleteEstufa/:id', estufaController.delete);

module.exports = routes;
