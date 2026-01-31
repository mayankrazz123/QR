import { QRCodeSVG } from 'qrcode.react'
import './QRCodePage.css'

function QRCodePage() {
  // Get the current URL and create the rating page URL
  const currentUrl = window.location.origin
  const ratingUrl = `${currentUrl}/rate`

  return (
    <div className="qr-page-container">
      <div className="qr-display-card">
        <div className="header">
          <h1 className="main-title">📱 Scan to Rate Our Product</h1>
          <p className="main-subtitle">
            We value your feedback! Scan the QR code below with your phone camera
          </p>
        </div>

        <div className="qr-code-wrapper">
          <div className="qr-code-container">
            <QRCodeSVG
              value={ratingUrl}
              size={300}
              level="H"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
          <p className="scan-instruction">
            👆 Point your phone camera at this QR code
          </p>
        </div>

        <div className="info-section">
          <div className="info-card">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Open Camera</h3>
                <p>Use your phone's camera app</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Scan QR Code</h3>
                <p>Point at the code above</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Rate & Review</h3>
                <p>Share your experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="direct-link">
          <p className="or-text">Or click here on your phone:</p>
          <a href="/rate" className="rating-link">
            Open Rating Page →
          </a>
        </div>

        <div className="footer-note">
          <p>🔒 Your feedback is valuable and will be sent directly to us</p>
        </div>
      </div>
    </div>
  )
}

export default QRCodePage

