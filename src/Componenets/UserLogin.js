import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import mainContext from '../context/MainContext'

const UserLogin = () => {

  const {socket, chats, spaceLeft} = useContext(mainContext)
  const nav = useNavigate()
  const nameRef= useRef()
  const colorRef= useRef()



    function startUserChat(){
        const userObj ={
          username: nameRef.current.value,
          color: colorRef.current.value
        }
        if(spaceLeft >= 0){
          socket.emit("user_login",userObj )
          nav("/user")
        }
   

    }
  return (

    <div className='grow flex justify-center 
    items-center flex-col m-5  '>
        <h3>Regular User Login</h3>
        <div className='flex flex-col items-center justify-center gap-2 m-3'>

          <input ref={nameRef} type="text" placeholder='username' />
          <input ref={colorRef} type="color" placeholder='pick your color' />
        <button className='w-40 p-3 m-5' onClick={startUserChat}>Start Chat</button>
        </div>
        <div>
          <h3>Online: {chats.length}
          <br /> 
          <span>space left:{spaceLeft}</span>
          </h3>
        </div>
    </div>
  )
}

export default UserLogin