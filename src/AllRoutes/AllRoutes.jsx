import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import CodeDisplay from '../Components/CodeDisplay'

export default function AllRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Home />}></Route>
      <Route path='/:id' element={<CodeDisplay />} ></Route>
      {/* <Route to='*' element={<Details />} /> */}
    </Routes>
  )
}
