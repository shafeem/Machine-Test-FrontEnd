// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'

const UserRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<Login />} />
    </Routes>
    </>
  )
}

export default UserRoutes
