import React, { useContext } from 'react'
import Chat from '../Componenets/Chat'
import mainContext from '../context/MainContext'


const AdminPage = () => {

    const {users}= useContext(mainContext)

  return (
    <div className='flex m-5 flex-col justify-between h-screen'>
        <div className='grow'>
        <h2>Online users: {users.length}</h2>
        </div>

        <div className='grow flex flex-wrap gap-2 justify-center items-center'>
          {users.map((x,i)=>
             <Chat key={i} user={x}/>
          )}
     
        </div>
      

    </div>
  )
}

export default AdminPage