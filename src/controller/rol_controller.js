const { request, response } = require('express');

const rolGET = (req, res = response)=>{
   res.render('roles/rol.hbs');

};

module.exports={

    rolGET
}