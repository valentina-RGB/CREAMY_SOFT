const {Router}= require('express')
const router = Router();
const { categories }= require('../controller/categories_controller')

router.get('/categories',categories);

module.exports =router;