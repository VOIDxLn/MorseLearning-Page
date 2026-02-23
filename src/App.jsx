import { useState } from 'react'
import { Navigate ,Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from "./Components/homePage/HomePage";
import MasInfo from "./Components/MasInfo/MasInfo";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<HomePage />}>
        </Route>
        <Route path="MasInfo" element={<MasInfo/>} />
        
      </Routes>
    </div>
  )
}

export default App
