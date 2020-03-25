const express = require('express');
const ongController = require('./Controller/OngController');
const incidentController = require('./Controller/incidentController');
const profileController = require('./Controller/profileController');
const sectionController = require('./Controller/sectionController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.post('/section',sectionController.create);

module.exports = routes;