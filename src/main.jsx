import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Call from './components/call/call.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Call />
  </StrictMode>,
)
