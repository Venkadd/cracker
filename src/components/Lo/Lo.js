import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Layout from "../Layout/Layout"

const Lo = () => {
  return (
      <div>
          <Routes>
          <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/la" element={<Layout/>}/>
          </Routes>
    </div>
  )
}

export default Lo