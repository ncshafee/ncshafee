// App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Works from './pages/works'
import { SmoothCursor } from './components/ui/smooth-cursor'

function App() {
  // detect touch devices (works on most phones/tablets)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // guard for SSR / test environments
    if (typeof window !== 'undefined') {
      const touch =
        'ontouchstart' in window ||
        (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
      setIsTouchDevice(Boolean(touch))
    }
  }, [])

  return (
    <>
      {/* remove global "cursor-none" wrapper on mobile */}
      <div className="cursor-none">
        {/* Render SmoothCursor only on non-touch (desktop) devices */}
        {!isTouchDevice && <SmoothCursor />}

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
