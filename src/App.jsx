import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Works from './pages/Works'
import { SmoothCursor } from './components/ui/smooth-cursor'

function isTouchDevice() {
  return (
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  )
}

function App() {
  const showCursor = !isTouchDevice()

  return (
    <>
      {showCursor && (
        <div className="cursor-none" aria-hidden="true">
          <SmoothCursor />
        </div>
      )}

      <div className="theme-surface min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<Works />} />
        </Routes>
      </div>
    </>
  )
}

export default App
