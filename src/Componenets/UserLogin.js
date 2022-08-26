import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import mainContext from '../context/MainContext'

const UserLogin = () => {

  const {socket} = useContext(mainContext)
  const nav = useNavigate()
    function startUserChat(){

      socket.emit("user_login")
      nav("/user")

    }
  return (

    <div className='grow flex justify-center 
    items-center flex-col m-5  '>
        <h3>Regular User Login</h3>
        <div>

   
        <button className='w-40 p-3 m-5' onClick={startUserChat}>Start Chat</button>
        </div>
    </div>
  )
}

export default UserLogin