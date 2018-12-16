var mongoose = require('mongoose');
var userSchema=new mongoose.Schema({
    username:String,
    emailid:String,
    password1:String,
    password2:String
})
var User=mongoose.model('user',userSchema);
module.exports=User;