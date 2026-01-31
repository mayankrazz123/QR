import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QRCodePage from './QRCodePage.jsx'
import RatingPage from './RatingPage.jsx'
import QRDownloader from './QRDownloader.jsx'

// Simple routing based on URL path
const path = window.location.pathname

let component
if (path === '/rate') {
  component = <RatingPage />
} else if (path === '/download') {
  component = <QRDownloader />
} else {
  component = <QRCodePage />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {component}
  </StrictMode>,
)
