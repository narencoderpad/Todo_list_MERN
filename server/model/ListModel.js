const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
   name:{
       type:String,
       required:true
   }
});

let userModel = module.exports = mongoose.model("userDetail",userSchema)