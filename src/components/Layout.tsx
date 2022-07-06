import React from 'react'
import { Outlet } from 'react-router-dom'
import Calender from '../Pages/Calender'


const Layout = () => {
  return (
    <div className='container'>  
      <Outlet />
    </div>
  )
}

export default Layout