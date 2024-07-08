import React from 'react'
import SideNav from '../Component/SideNav'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <SideNav/>

      <Outlet/>
    </div>
  )
}

export default MainLayout
