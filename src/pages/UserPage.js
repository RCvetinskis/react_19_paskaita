import React from 'react'
import UserChat from '../Componenets/UserChat'
const UserPage = () => {
  return (
    <div className='flex  flex-col item-center justify-center h-screen text-center'>
        <div className="header">
            <h1>UserPage: user1</h1>
        </div>
        <div>
         <UserChat/>
        </div>
    </div>
  )
}

export default UserPage