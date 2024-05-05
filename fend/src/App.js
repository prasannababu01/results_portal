import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Gc from './Gc'
import Addres from './Addres'
import DisRes from './DisRes'
import Logout from './Logout'
import Update from './Update'

const App = () => {
  let [data,setData]=useState({"name":"","token":""})
  let fun=(obj)=>{
    setData(obj)

  }
  let obj={"data":data,"fun":fun}
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <Gc.Provider value={obj}>
      <Routes>
    <Route path="/admin" element={<Login/>}/>
    <Route path='/admin/add' element={<Addres/>}/>
    <Route path="/admin/disp" element={<DisRes/>}/>
    <Route path='/admin/logout' element={<Logout/>}/>
    <Route path='/admin/update' element={<Update/>}/>
    </Routes>
    </Gc.Provider>
   
 
  
  </BrowserRouter>
    
  )
}

export default App