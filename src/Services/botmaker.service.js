const venom = require('venom-bot');

let botWhatsApp;

const botmakerService = async (req) => {
    if(!req.cel || !req.interval || !req.timeout) 
        return 'Dados Inválidos, verifique o JSON';

    if (!botWhatsApp) botWhatsApp = await venom.create();

    console.log('Início do envio de mensagens para', req.cel);
    const mensInterval = setInterval(() =>{
        if(req.message) botWhatsApp.sendText(`${req.cel}@c.us`, req.message);
        if(req.image) botWhatsApp.sendImageAsSticker(`${req.cel}@c.us`, req.image);
        if(req.gif) botWhatsApp.sendImageAsStickerGif(`${req.cel}@c.us`, req.gif);
      },req.interval);

    setTimeout (
      () => {
        console.log('Fim do envio de mensagens para', req.cel);
        clearInterval(mensInterval);
      }
    , req.timeout); 

    const botmaker = () => {
        mensInterval;
    } 

    botmaker()

    return 'ok';
  }
  
  module.exports = {
    botmakerService,
  };
