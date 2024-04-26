const {Router} = require('express');
const {clientGET}= require('../controller/client_controller');
const router= Router();

router.get('/client',clientGET);

module.exports=router;