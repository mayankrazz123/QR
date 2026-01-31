import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (rating === 0) {
      setSubmitStatus('Please select a rating!')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    // EmailJS configuration
    // You need to replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    const templateParams = {
      from_name: name,
      from_email: email,
      rating: rating,
      message: comment,
      to_email: 'your-email@example.com' // Replace with your email
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitStatus('Thank you for your feedback! 🎉')
      // Reset form
      setRating(0)
      setName('')
      setEmail('')
      setComment('')
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('Oops! Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app-container">
      <div className="rating-card">
        <h1 className="title">Rate Our Product</h1>
        <p className="subtitle">We'd love to hear your feedback!</p>

        <form onSubmit={handleSubmit} className="rating-form">
          {/* Star Rating */}
          <div className="rating-section">
            <label className="label">Your Rating</label>
            <div className="stars-container">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <FaStar
                      className="star"
                      color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                      size={40}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                )
              })}
            </div>
            {rating > 0 && (
              <p className="rating-text">
                {rating === 1 && '😞 Poor'}
                {rating === 2 && '😕 Fair'}
                {rating === 3 && '😊 Good'}
                {rating === 4 && '😃 Very Good'}
                {rating === 5 && '🤩 Excellent'}
              </p>
            )}
          </div>

          {/* Name Input */}
          <div className="form-group">
            <label className="label" htmlFor="name">Name (Optional)</label>
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label className="label" htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Comment Textarea */}
          <div className="form-group">
            <label className="label" htmlFor="comment">Your Feedback</label>
            <textarea
              id="comment"
              className="textarea-field"
              placeholder="Tell us what you think..."
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>

          {/* Status Message */}
          {submitStatus && (
            <p className={`status-message ${submitStatus.includes('Thank you') ? 'success' : 'error'}`}>
              {submitStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default App
