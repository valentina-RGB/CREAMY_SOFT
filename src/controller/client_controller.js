const { request, response } = require('express');

const clientGET = (req, res = response)=>{
   res.render('clients/client.hbs');

};

module.exports={

    clientGET
}