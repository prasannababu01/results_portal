import axios from 'axios'
import React, { useState } from 'react'
import "./Home.css"

const Home = () => {
    let [hno,setHno]=useState()
    let [data,setData]=useState({})
    let [err,setErr]=useState()
    let fun=(e)=>{
        setHno(e.target.value)
    }
    let getres=()=>{

        axios.get(`http://localhost:5000/getbyhno/${hno}`).then((res)=>{
            if(res.data.err==undefined)
            {
                setErr("")
                setData(res.data)

            }
            else{
                setErr(res.data.err)
            }
        })
    }
  return (
    <div className='con'>
        <div className='nav'> FINAL ASSESSMENT RESULTS</div>
        <div className='hall'>
            Hall Ticket Number<input type='text' placeholder='Enter HNO' onChange={fun} value={hno}/>
            <button onClick={getres}>Get Results</button>
            {err!=""&& <h1 style={{"color":"red"}}>{err}</h1>}
        </div>
     {err==""&&<div className='results'>
        <table border="1" width="200px">
            <tr><th>Name</th><td>{data.name}</td></tr>
            <tr><th>HNO</th><td>{data._id}</td></tr>
            <tr><th>DOB</th><td>{new Date(data.dob).toLocaleDateString()}</td></tr>
            <tr><th>Gen</th><td>{data.gen}</td></tr>
            <tr><th>Python</th><td>{data.sub1}</td></tr>
            <tr><th>HTML</th><td>{data.sub2}</td></tr>
            <tr><th>CSS</th><td>{data.sub3}</td></tr>
            <tr><th>JavaScript</th><td>{data.sub4}</td></tr>
            <tr><th>ReactJs</th><td>{data.sub5}</td></tr>
            <tr><th>ExpressJs</th><td>{data.sub6}</td></tr>
            <tr><th>Total</th><td>{data.sub1+data.sub2+data.sub3+data.sub4+data.sub5+data.sub6}</td></tr>
        </table>
        
      </div>}
    </div>
  )
}

export default Home