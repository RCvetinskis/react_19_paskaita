import React, { useContext, useRef } from 'react'
import mainContext from '../context/MainContext'


const UserChat = () => {

  const {socket, users} = useContext(mainContext)
  const messageRef = useRef()


  function sendMessageToAdmin(){
    
    socket.emit("message_to_admin",messageRef.current.value )
    messageRef.current.value= ""

  }
  return (
    <div className='user-chat flex flex-col justify-between '>
   {users.map((x,i)=>
   <div key={i}>

   
     {x.messages.map((x,i)=>
               <div className='message-content' key={i}>
               
                     <p>{x.message}</p>
                     <p>sent by: {x.sender}</p>
                 
               </div>
                 )}
                 </div>)}
     

        <div className='send-message'>
        <input ref={messageRef} className='w-2/4' type="text" placeholder='Hello...' />
        <button onClick={sendMessageToAdmin} className='w-1/4'>Send</button>
        </div>
     

    </div>
  )
}

export default UserChat