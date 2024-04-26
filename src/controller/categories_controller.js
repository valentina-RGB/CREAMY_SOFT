const { response, request} = require('express')

const categories=(req, res=response )=>{
    res.render('categories/categorie-list')
}

module.exports ={
    categories
}