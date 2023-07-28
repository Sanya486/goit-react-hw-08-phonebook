import ResponsiveAppBar from 'components/AppBar/AppBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
          <ResponsiveAppBar />
          <Outlet/>
    </>
  )
}

export default Layout
