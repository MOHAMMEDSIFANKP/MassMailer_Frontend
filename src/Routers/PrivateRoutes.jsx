import React from 'react'
import { Outlet } from 'react-router-dom'
import Homepage from '../Pages/Homepage'

function PrivateRoutes() {
    const token = localStorage.getItem('token')
    if (token){
        return <Homepage/>
    }
    return <Outlet/> 
}

export default PrivateRoutes