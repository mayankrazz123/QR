import { useState, useEffect, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './QRDownloader.css'

function QRDownloader() {
  const [url, setUrl] = useState('https://qr-one-cyan.vercel.app/rate')
  const [size, setSize] = useState(512)
  const qrRef = useRef(null)

  const downloadQR = () => {
    const svg = qrRef.current.querySelector('svg')
    if (!svg) {
      alert('QR code not found!')
      return
    }

    // Create canvas
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = size
    canvas.height = size
    
    // Convert SVG to image
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url_obj = URL.createObjectURL(svgBlob)
    
    const img = new Image()
    img.onload = () => {
      // Draw white background
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, size, size)
      
      // Draw QR code
      ctx.drawImage(img, 0, 0, size, size)
      
      // Download
      canvas.toBlob((blob) => {
        const downloadUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = downloadUrl
        a.download = 'rating-qr-code.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(downloadUrl)
      })
      
      URL.revokeObjectURL(url_obj)
    }
    
    img.src = url_obj
  }

  return (
    <div className="downloader-container">
      <div className="downloader-card">
        <h1 className="downloader-title">📥 Download QR Code</h1>
        <p className="downloader-subtitle">Generate and download your rating page QR code</p>

        <div className="form-section">
          <div className="form-group">
            <label className="label">Your Rating Page URL:</label>
            <input
              type="text"
              className="input-field"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your deployed URL"
            />
          </div>

          <div className="form-group">
            <label className="label">QR Code Size: {size}px</label>
            <input
              type="range"
              className="slider"
              min="256"
              max="1024"
              step="64"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="qr-preview" ref={qrRef}>
          <QRCodeSVG
            value={url}
            size={Math.min(size, 400)}
            level="H"
            includeMargin={true}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        <div className="button-group">
          <button onClick={downloadQR} className="download-btn">
            📥 Download PNG ({size}x{size}px)
          </button>
        </div>

        <div className="info-box">
          <p>💡 <strong>Tip:</strong> After downloading, print this QR code and display it near your product. Customers can scan it to leave ratings!</p>
        </div>

        <div className="back-link">
          <a href="/">← Back to QR Display Page</a>
        </div>
      </div>
    </div>
  )
}

export default QRDownloader

