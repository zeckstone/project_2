const db = require('../models');
const path = require('path');

module.exports = function(app){
app.get("/api/events", function(req, res){

    db.Products.Findall({}).then(function(response, error){

        if(error){
            res.json(error);
        }

        res.json(response);
        
    });
});

app.post("/api/events", function(req, res){

    res.json("hello world!");

    db.Products.create(req.body).then(function(){


    });
});

app.get("/api/events/:id", function(req, res){

    db.Products
});

};