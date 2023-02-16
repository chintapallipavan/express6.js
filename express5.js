const express=require('express');
const bodyparser=require('bodyparser');
const app=express();
app.use(bodyParser.urlencoded({extend:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<from action="/product" method="POST"> <input type="text" name="title"><button type="submit")')});
    app.use('/product',(req,res,next)=> {
        console.log(req.body);
        res.redirect('/');

    });
    app.use('/',(req,res,next) =>{
        res.send('<h1>hi</h1>')
    });
app.listen(3000);