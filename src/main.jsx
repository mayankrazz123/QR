import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QRCodePage from './QRCodePage.jsx'
import RatingPage from './RatingPage.jsx'

// Simple routing based on URL path
const path = window.location.pathname

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/rate' ? <RatingPage /> : <QRCodePage />}
  </StrictMode>,
)
