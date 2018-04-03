var express = require('express');
var app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');


//public folder
app.use(express.static('app/public'));

app.use(require('./routes/dishes'));

app.get('/newdish',function(req,res){
  res.render('newdish');
});


  
  app.get('/',function(req,res){
    res.send('hello world');
  })

var server = app.listen(2002, function(){
    console.log('Example app listening on port 2002 ');
});




