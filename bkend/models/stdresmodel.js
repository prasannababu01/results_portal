let mongoose=require('mongoose')
let stdsch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "dob":Date,
    "gen":String,
    "sub1":Number,
    "sub2":Number,
    "sub3":Number,
    "sub4":Number,
    "sub5":Number,
    "sub6":Number,
})

module.exports=mongoose.model("student",stdsch)