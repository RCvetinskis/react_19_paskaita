import React from 'react'
import AdminLogin from '../Componenets/AdminLogin'
import UserLogin from '../Componenets/UserLogin'

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center  h-screen '>
        <AdminLogin/>
        <UserLogin/>
    </div>
  )
}

export default RegisterPage