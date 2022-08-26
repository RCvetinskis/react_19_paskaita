import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mainContext from '../context/MainContext'

const AdminLogin = () => {
  
  const {setAdminUser, socket}= useContext(mainContext)
  const [errorMsg, setErrorMsg]= useState("")

    const nav = useNavigate()
    const nameRef = useRef()
    const passRef = useRef()


    function loginAdmin(){

      const adminObj={
          username: nameRef.current.value,
          password: passRef.current.value
      }
    
fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminObj)
      })
      .then(response => {
        return response.json( )
      })
      .then(data => {
         console.log(data)
         if(data.error){
          setErrorMsg(data.message)

         }else{
          setAdminUser(data.user)
          nav("/admin")
          socket.emit("admin_login" )
         }
       
      
     

      }

      );



    }
  return (
    <div className='flex flex-col items-center justify-center gap-5 m-5 grow'>
        <h3>Admin Login</h3>
        <input ref={nameRef} type="text" placeholder='username' />
        <input ref={passRef} type="password" placeholder='password' />
        <button onClick={loginAdmin}>login</button>
        <div className="error">
          <h1 className='text-red-500'>{errorMsg}</h1>
        </div>
    </div>
  )
}

export default AdminLogin