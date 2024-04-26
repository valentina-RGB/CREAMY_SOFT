const { request, response } = require('express');

const userGET = (req, res = response)=>{
   res.render('Users/user');

};

module.exports={

    userGET
}