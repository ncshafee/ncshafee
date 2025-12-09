import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

if (typeof window !== 'undefined') {
  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    document.documentElement.dataset.theme = storedTheme;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter><App /></BrowserRouter> 
  </StrictMode>,
)
