import axios from 'axios'
import React, { useContext, useState } from 'react'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    let [data,setData]=useState({})
    let [err,setErr]=useState("")
    let navigate=useNavigate()
    let obj=useContext(Gc)
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    let login=()=>{
        axios.post("http://localhost:5000/login",data).then((res)=>{
            if(res.data.token!=undefined)
            {
               obj.fun(res.data)
               navigate("/admin/disp")


            }
            else{
                setErr(res.data.err)
            }
        })
    }
  return (
    <div className='login'>
        <div className='admin'>Admin protal</div>
        <h1 style={{"color":"red"}}>{err}</h1>
        <div> User ID <input type='text' name="_id" onChange={fun}/></div>
        <div> Password <input type='password' name="password" onChange={fun}/></div>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login