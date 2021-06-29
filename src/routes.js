const { Router } = require('express');
const BotmakerController = require ('./Controllers/BotmakerController')

const routes = Router();

routes.get('/', BotmakerController.index); 

routes.post('/', BotmakerController.store);

module.exports = routes;