import React, { useContext, useRef } from 'react'
import mainContext from '../context/MainContext'
import ScrollToBottom from "react-scroll-to-bottom"

const UserChat = () => {

  const {socket, users} = useContext(mainContext)
  const messageRef = useRef()


  function sendMessageToAdmin(){
    
    socket.emit("message_to_admin",messageRef.current.value )
    messageRef.current.value= ""

  }
  return (
    <div className='chat window h-96 m-5  '>

<ScrollToBottom className='message-container'>
   {users.map((x,i)=>
   <div className='chat-body' key={i}>
  
     {x.messages.map((x,i)=>
               <div className='message-content' key={i}>
               
                     <p>{x.message}</p>
                     <p>sent by: {x.sender}</p>
                 
               </div>
                 )}
                 </div>)}
     
                 </ScrollToBottom>
        <div className='send-message'>
        <input ref={messageRef}
         onKeyPress={(e)=> {e.key === "Enter" && sendMessageToAdmin()}}
         className='w-2/4' type="text" placeholder='Hello...' />
        <button onClick={sendMessageToAdmin} className='w-1/4'>Send</button>
        </div>
     

    </div>
  )
}

export default UserChat