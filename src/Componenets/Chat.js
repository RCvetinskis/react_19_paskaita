import React, {useContext, useRef, useState, useEffect} from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import mainContext from '../context/MainContext'

const Chat = ({chat}) => {

  const { socket} = useContext(mainContext)

  console.log(chat);


  

  const messageRef = useRef()

    function sendMessage(){
      socket.emit("message", {
        message: messageRef.current.value,
        id: chat.id
      })
      messageRef.current.value= ""
    }
  return (
    <div className='chat-window' style={{backgroundColor:chat.color}}>
    <div className="chat-header">
          <p>User: {chat.username}</p>

      </div> 
     
    <div className="chat-body">

       <ScrollToBottom className='message-container'>
      
               <div>
               {chat.messages.map((x,i)=>
               <div className='message-content flex items-center m-4' style={x.from === "admin" ?   {justifyContent: "flex-start"} :   {justifyContent: "flex-end"} } key={i}>
               
                   <p>{x.value}</p>
                     <div className='ml-3'>
                     <b>{x.from}</b>
                     <b> {x.time}</b>  
                     </div>
                          
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
       onKeyPress={(e)=> {e.key === "Enter" && sendMessage()}} />
       <button onClick={sendMessage}>&#9658;</button>
       </div>   
   </div>
  )
}

export default Chat