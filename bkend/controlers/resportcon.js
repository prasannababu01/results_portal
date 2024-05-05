let bcrypt=require('bcrypt')
let admin=require("../models/adminmodel")
let stdres=require("../models/stdresmodel")
let jwt=require('jsonwebtoken')
let addadmin=async(req,res)=>{
    let det=req.body
    let hcode=await bcrypt.hash(det.password,10)
    det={...det,"password":hcode}
    let data=new admin(det)
    data.save().then(()=>{
        res.send("admin added")
    }).catch((err)=>{
        res.send(err)
    })

}
let login=async(req,res)=>{
    let data=await admin.findById({"_id":req.body._id})
    if(data)
    {
        let f=await bcrypt.compare(req.body.password,data.password)
        if(f)
        {
            res.json(
                {
                    "token":jwt.sign({"_id":data._id},"123456"),
                    "name":data.name
                }
            )

        }
        else{
            res.json({"err":"check password"})
        }
    }
    else{
        res.json({"err":"check userid"})
    }
}
let islogin=(req,res,next)=>{
    try{
    jwt.verify(req.headers.authorization,"123456")
    next()
    }
    catch(err)
    {
        res.json({"err":"plz login"})
    }


}
let addres=(req,res)=>{
    let data=new stdres(req.body)
    data.save().then(()=>{
        res.json({
            "msg":"record added"
        })
    }).catch(()=>{
        res.json({
            "err":"error in adding record"
        })

    })

}
let getres=async(req,res)=>{
    try{
  let data=await  stdres.find()
  res.json(data)
    }
    catch(err)
    {
        console.log(err)
    }
}
let getresbyhno=async(req,res)=>{
    let data=await stdres.findById({"_id":req.params.hno})
    if(data)
    {
        res.json(data)
    }
    else{
        res.json({"err":"check hno"})
    }
}
let update=async(req,res)=>{
try{
    await stdres.findByIdAndUpdate({"_id":req.body._id},req.body)
    res.json({"msg":"updation done"})
}
catch(err)
{
    res.json({"err":"error in updation"})
}

}
let del=async(req,res)=>{
    try{
    await stdres.findByIdAndDelete({"_id":req.params.hno})
    res.json({"msg":"del done"})
    }
    catch(err)
    {
        console.log(err)
    }

}

module.exports={addadmin,login,islogin,addres,getres,getresbyhno,update,del}