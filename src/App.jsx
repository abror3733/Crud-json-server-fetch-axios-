import React, { useEffect, useState } from 'react'
import './App.css'
import AddPage from './pages/AddPage'
import List from './components/List'
import { Route, Routes } from 'react-router-dom'


function App() {
  
 return(
  <>
 
   <Routes>
    <Route path='/' element={<List/>}/>
    <Route path='/add-cars' element={<AddPage/>}/>
   </Routes>
  </>
 )
}

export default App
