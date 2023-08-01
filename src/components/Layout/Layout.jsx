import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from 'components/AppBar/AppBar'

const Layout = () => {
  return (
    <>
          <ResponsiveAppBar />
          <Outlet/>
    </>
  )
}

export default Layout
