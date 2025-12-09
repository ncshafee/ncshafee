import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Works from './pages/works'
import { SmoothCursor } from './components/ui/smooth-cursor'

function App() {

  return (
    <>
<div className="cursor-none">
  <SmoothCursor />
  {/* your app */}
     <div className="theme-surface min-h-screen transition-colors duration-300">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/work' element={<Works />} />
        </Routes>
      </div>
      </div> 
    </>
  )
}

export default App
