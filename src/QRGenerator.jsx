import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './QRGenerator.css'

function QRGenerator() {
  const [url, setUrl] = useState('http://localhost:5173')
  const [size, setSize] = useState(256)

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    canvas.width = size
    canvas.height = size
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'rating-qr-code.png'
      downloadLink.href = pngFile
      downloadLink.click()
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  return (
    <div className="qr-container">
      <div className="qr-card">
        <h1 className="qr-title">QR Code Generator</h1>
        <p className="qr-subtitle">Generate a QR code for your rating page</p>

        <div className="qr-form">
          <div className="form-group">
            <label className="label">Enter Your Rating Page URL</label>
            <input
              type="url"
              className="input-field"
              placeholder="https://your-app.vercel.app"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <small className="hint">
              💡 Deploy your app first, then paste the URL here
            </small>
          </div>

          <div className="form-group">
            <label className="label">QR Code Size: {size}px</label>
            <input
              type="range"
              min="128"
              max="512"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="qr-preview">
            <QRCodeSVG
              id="qr-code-svg"
              value={url}
              size={size}
              level="H"
              includeMargin={true}
            />
          </div>

          <button onClick={downloadQR} className="download-btn">
            📥 Download QR Code
          </button>

          <div className="instructions">
            <h3>📋 Next Steps:</h3>
            <ol>
              <li>Deploy your rating app (use Vercel, Netlify, etc.)</li>
              <li>Paste the deployed URL above</li>
              <li>Download the QR code</li>
              <li>Print and display it near your product!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRGenerator

