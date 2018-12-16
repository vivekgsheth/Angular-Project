var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var url=require('url')
var cors=require('cors')
mongoose.Promise=Promise

var app=express()
app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://127.0.0.1:27017/justdial',err=>{
    if(err)
        console.error("error"+err)
    else
        console.log("mongo connected")
})
var MongoClient = require('mongodb').MongoClient;
url1="mongodb://127.0.0.1:27017/";
var User=require('./schema/user_schema')
app.get('/gethotels',function(req,res){
     console.log("get Restaurants called ")
     var x;
     MongoClient.connect(url1, function(err, db) {
         if (err) throw err;
         var dbo = db.db("justdial");
         dbo.collection("restaurants").find({}).toArray(function(err, result) {
           if (err) throw err;
           x=result;
           res.status(200).send(x);
           db.close();
         });
       });
 })
 app.get('/getsearch',function(req,res){
    console.log("get Search called ")
    var x;
    MongoClient.connect(url1, function(err, db) {
        if (err) throw err;
        var dbo = db.db("justdial");
        var place1=req.query.resname;
        dbo.collection("restaurants").find({place:place1}).toArray(function(err, result) {
          if (err) throw err;
          x=result;
          console.log("place name is "+place1)
          console.log(x);
          res.status(200).send(x);
          db.close();
        });
      });
})
app.get('/getcount',function(req,res){
    console.log("get Count called ")
    var x;
    MongoClient.connect(url1, function(err, db) {
        if (err) throw err;
        var dbo = db.db("justdial");
        dbo.collection("restaurants").find({}).toArray(function(err, result) {
          if (err) throw err;
          var x=result.length;
          console.log("length is "+x)
          res.status(200).send(x.toString());
          db.close();
        });
      });
}) 
app.post('/register',function(req,res){
    console.log("POST Request")
    var userData=req.body
    var user=new User(userData)
    user.save((err,registeredUser)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(registeredUser)
    })
})
app.post('/login',function(req,res){
    //console.log("POST Request For Login")
    var userData=req.body
    console.log(userData.username)
    //console.log(userData)
    User.findOne({username:userData.username},(erro,user)=>{
        if(erro)
            console.log(erro)
        else
        { 
            if(!user)
            {
                res.status(401).send('invalid username')
            }
            else if(user.password1!=userData.password)
            {
                res.status(401).send('invalid password')
            }
            else
            {
                res.status(200).send(user)
            }
        }
    })
})
app.listen(8081,()=>console.log("server listening at 8081"))