import React, { useContext } from 'react'
import Chat from '../Componenets/Chat'
import mainContext from '../context/MainContext'
import ProgressBar from '../Componenets/ProgressBar'


const AdminPage = () => {

    const {chats}= useContext(mainContext)
    console.log(chats);

  return (
    <div className='flex m-5 flex-col justify-between h-screen'>
        <div className='grow'>
          <ProgressBar/>
        <h2>Online users: {chats.length}</h2>
        </div>

        <div className='grow flex flex-wrap gap-2 justify-center items-center'>
          {chats.map( x => <Chat key={x.id} chat={x}/> )}
     
        </div>
      

    </div>
  )
}

export default AdminPage