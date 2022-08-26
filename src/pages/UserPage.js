import React, { useContext } from 'react'
import Chat from '../Componenets/Chat'
import mainContext from '../context/MainContext'
const UserPage = () => {
  const {singleChat} = useContext(mainContext)
  console.log(singleChat);
  return (
    <div className='flex  flex-col item-center justify-center h-screen text-center'>
        <div className="header">
            <h1>UserPage: user1</h1>
        </div>
        <div>
         {singleChat && <Chat chat ={singleChat}/>}
        </div>
    </div>
  )
}

export default UserPage