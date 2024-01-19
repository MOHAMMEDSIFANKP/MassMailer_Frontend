import React from 'react'
import Loginpage from '../Pages/Loginpage'
import { Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const token = localStorage.getItem('token')
    if (token){
        return <Outlet/>
    } else {
      return <Loginpage/>
    }
}

export default ProtectedRoutes