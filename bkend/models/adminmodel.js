let mongoose=require('mongoose')
let adminsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String
})
module.exports=mongoose.model("admin",adminsch)