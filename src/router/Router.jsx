import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignUp from '../pages/Signup/SignUp'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/sign-up' element={<SignUp />}  />
        </Routes>
    </>
  )
}

export default Router