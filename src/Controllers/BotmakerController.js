const { botmakerService } = require('../Services/botmaker.service')

module.exports ={

    async index(request, response) {
        console.log('::::: Requisição via get');
        const resp = 'Conexão ok';

        return response.status(200).json(resp);
     },


    async store(request, response) {
        console.log('::::: Requisição via post');
        const resp = await botmakerService(request.body);
                
        return response.status(200).json(resp);
    }
};