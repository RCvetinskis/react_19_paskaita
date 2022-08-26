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

    <div className='grow flex justify-center item-center flex-col gap-5 m-5 text-center'>
        <h3>Regular User Login</h3>
        <button onClick={startUserChat}>Start Chat</button>
    </div>
  )
}

export default UserLogin