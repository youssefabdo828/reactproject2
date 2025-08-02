import React from 'react'
import { Outlet } from 'react-router-dom'
import ReactNav from '../Navbar/Navbar';
import Sitefooter1 from '../Sitefooter/Sitefooter';

export default function Layout() {
  return (
    <>
    <ReactNav/>

<Outlet/>

    <Sitefooter1/>
    </>
  )
}
