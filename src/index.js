const express = require('express');
const cors = require('cors');

// Partials



class server {

    constructor() {

        this.app = express();

        const hbs = require('hbs');
        // Midlewares 
        hbs.registerPartials(__dirname + '/views/partials', function (err){});
        this.app.set('view engine', 'hbs');
        this.app.set("views", __dirname + "/views");
        this.app.use(cors());
        this.app.use(express.static("src/public"))
        
    

        //Port
        this.port = process.env.PORT;

        //router
        this.routers();


    }

    routers() {
        //HOME
        this.app.get('/', require('./routers/home-routers'));
        this.app.get('/log', require('./routers/home-routers'));
        this.app.get('/home', require('./routers/home-routers'));
        this.app.get('/contact', require('./routers/home-routers'));
        this.app.get('/about', require('./routers/home-routers'));
        this.app.get('/shop', require('./routers/home-routers'));
        this.app.get('/shops', require('./routers/home-routers'));
        this.app.get('/product_order',require ('./routers/home-routers'));
        this.app.get('/icons',require('./routers/home-routers'));
        this.app.get('/tables',require ('./routers/home-routers'));

    
        // SUPPLIES
        this.app.get('/supplies',require ('./routers/supplies-routers'));
        this.app.get('/history',require ('./routers/supplies-routers'));

         // SALES
         this.app.get('/sales',require ('./routers/sales-routers'));

        //CONFIGURATION
        this.app.get('/user',require ('./routers/user-routers'));
        this.app.get('/rol',require ('./routers/rol-routers'));
        this.app.get('/client',require ('./routers/client-routers'));

        
        //ORDER
        this.app.get('/order', require('./routers/order-routers'));
        this.app.get('/newOrder', require('./routers/order-routers'));

        //ANALYTIC
        this.app.get('/analytic', require('./routers/dashboard_routers'));


        //PRODUCT
        this.app.get('/product', require('./routers/product_routers'));
        this.app.get('/product_new', require('./routers/product_routers'));
        

        //CATEGORIES 
        this.app.get('/categories', require('./routers/categories_routers'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port  http://localhost:${this.port}`);
        });
    }


};
module.exports=server;