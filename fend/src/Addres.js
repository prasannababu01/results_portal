import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Addres.css"

const Addres = () => {
    let obj=useContext(Gc)
    let navigate=useNavigate()
    let [data,setData]=useState({})
    let [err,setErr]=useState("")
    let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
      axios.post("http://localhost:5000/addres",data,{"headers":{"Authorization":obj.data.token}}).then((res)=>{
        if(res.data.err==undefined)
        {
          navigate("/admin/disp")
        }
        else
        {
          setErr(res.data.err)
        }

      })
    }
    useEffect(()=>{
        if(obj.data.token=="")
        {
            navigate("/admin")
        }

    },[])
  return (
    <div>
        <Nav/>
        <div className='regform'>
          <div className='det'>
            <h2 style={{"color":"red"}}>{err}</h2>
            <div> Hall Ticket No: <input type='text' name="_id" onChange={fun}/></div>
            <div> Name: <input type='text' name="name" onChange={fun}/></div>
            <div> DOB: <input type='date' name="dob" onChange={fun}/></div>
            <div> Male<input type='radio' name="gen" value="male" onChange={fun}/></div>
            <div> Female<input type='radio' name="gen" value="female" onChange={fun}/></div>
            <div> Python: <input type='text' name="sub1" onChange={fun}/></div>
            <div> HTML: <input type='text' name="sub2" onChange={fun}/></div>
            <div> CSS: <input type='text' name="sub3" onChange={fun}/></div>
            <div> JavaScript: <input type='text' name="sub4" onChange={fun}/></div>
            <div> ReactJs: <input type='text' name="sub5" onChange={fun}/></div>
            <div> ExpressJs: <input type='text' name="sub6" onChange={fun}/></div>
            <button onClick={add}>Add Student</button>
          </div>

        </div>
    </div>
  )
}

export default Addres