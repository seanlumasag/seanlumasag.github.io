import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const isResumePath =
  window.location.pathname.replace(/\/+$/, '') === '/resume'

if (isResumePath) {
  window.location.replace('/Sean_Lumasag_Resume.pdf')
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
