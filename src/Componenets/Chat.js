import React, {useContext, useRef} from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import mainContext from '../context/MainContext'

const Chat = ({user}) => {

  const { socket} = useContext(mainContext)

  const messageRef = useRef()

 
  
    function sendMessage(sender){

      socket.emit("message_from_admin",messageRef.current.value, sender )
      messageRef.current.value=""
    }
  return (
    <div className='chat-window'>
    <div className="chat-header">
          <p>User: {user.id}</p>

      </div> 
     
    <div className="chat-body">

       <ScrollToBottom className='message-container'>
      
               <div>
               {user.messages.map((x,i)=>
               <div className='message-content' key={i}>
               
                     <p>{x.message}</p>
                     <p>sent by: {x.sender}</p>
                 
               </div>
                 )}

                </div>
          
    
               
 
       </ScrollToBottom>

       </div>   
    <div className="chat-footer">
       <input 
       type="text"
        placeholder='Hello...' 
        ref={messageRef}
       onKeyPress={(e)=> {e.key === "Enter" && sendMessage(user.id)}} />
       <button onClick={()=> sendMessage(user.id)}>&#9658;</button>
       </div>   
   </div>
  )
}

export default Chat