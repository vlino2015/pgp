var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/database.js');

const pgp = db.$config.pgp;


router.use(bodyParser.urlencoded({extended :false}))

router.post('/dishes',function(req,res){

    let title = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let course = req.body.course;
    let imageURL = req.body.imageURL;
  
    db.none('INSERT INTO dishes(title,description,price,course,"imageURL") values($1,$2,$3,$4,$5)',[title,description,price,course,imageURL]).then(function(){
  
      db.any('SELECT * FROM dishes').then(function(data){
        // res.render(page to render, object to pass to the page)
        res.render('dishes', {'dishes' : data});
      })
  
    }

    )// end of 'then' promise
  
  });
  
  router.get('/dishes',function(req,res){
  
    
    // fetch dishes from the database
    db.any('SELECT * FROM dishes').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('dishes',{'dishes' : data});
    })
  });
  
 router.get('/dishes/json',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM dishes').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.status(200).json({
        status : 'success',
        dishes : data
      })
    })
  
  });

module.exports = router;