const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log('middleware 1');
    next();
})

app.use(function(req, res, next){
    console.log('middleware 2');
    next();
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res, next) {
    return next(new Error("something went wrong"))
})

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('Something broke!')
    
})

app.listen(3000)