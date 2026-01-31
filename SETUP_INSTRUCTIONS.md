# QR Code Rating System - Setup Instructions

## 📋 Overview
This is a responsive React-based rating system with a QR code display page. When users scan the QR code with their phone, it opens a rating page where they can rate your product (1-5 stars), leave comments, and submit feedback directly to your email.

## 🎯 How It Works
1. **Main Page (/)** - Displays a QR code that users can scan
2. **Rating Page (/rate)** - Opens when QR code is scanned, allows users to submit ratings
3. **Email Delivery** - Ratings are sent directly to your email via EmailJS

## 🚀 Quick Start

### 1. Install Dependencies
Already done! The project has all necessary packages installed.

### 2. Set Up EmailJS (FREE Email Service)

#### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a FREE account
3. Verify your email address

#### Step 2: Create Email Service
1. In EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the connection steps
4. Copy your **Service ID** (e.g., `service_abc123`)

#### Step 3: Create Email Template
1. Go to **"Email Templates"** section
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Product Rating - {{rating}} Stars

From: {{from_name}}
Email: {{from_email}}

Rating: {{rating}} / 5 Stars

Feedback:
{{message}}
```

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

#### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

#### Step 5: Update RatingPage.jsx
Open `src/RatingPage.jsx` and replace these values (around line 28-30):

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

Also update line 37 with your email:
```javascript
to_email: 'your-email@example.com'       // Replace with your actual email
```

### 3. Run the Application

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### 4. Test Locally

1. **View QR Code**: Open `http://localhost:5173` - You'll see the QR code display page
2. **Test Rating Page**: Open `http://localhost:5173/rate` - You'll see the rating form
3. **Test QR Code**: Use your phone to scan the QR code on screen (it will open the rating page)

### 5. Deploy Your App (FREE Options)

#### Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
```
Follow the prompts, and you'll get a live URL like `https://your-app.vercel.app`

#### Netlify
```bash
npm run build
```
Then drag the `dist` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop)

### 6. After Deployment

Once deployed, your app will have two pages:
- **Main Page**: `https://your-app.vercel.app/` - Shows the QR code (display this on your computer/tablet)
- **Rating Page**: `https://your-app.vercel.app/rate` - Opens when QR code is scanned

The QR code automatically updates to point to your deployed URL!

## 📱 Features

✅ **Responsive Design** - Works perfectly on phones, tablets, and desktops
✅ **Star Rating** - Interactive 5-star rating system with hover effects
✅ **Email Integration** - Submissions sent directly to your email
✅ **User Feedback** - Name, email, and comment fields
✅ **Beautiful UI** - Modern gradient design with smooth animations
✅ **Form Validation** - Ensures rating is selected before submission
✅ **Success Messages** - User-friendly feedback after submission

## 🎨 Customization

### Change Colors
Edit `src/QRCodePage.css` and `src/RatingPage.css`:
- Background gradient
- Button colors
- Card styling

### Change Text
Edit `src/QRCodePage.jsx` to customize:
- Main title
- Instructions
- Step descriptions

### Add Your Logo
1. Add your logo image to `src/assets/`
2. Import and display it in `QRCodePage.jsx` or `RatingPage.jsx`

## 🔧 Troubleshooting

**Email not sending?**
- Check EmailJS credentials are correct
- Verify your EmailJS account is verified
- Check browser console for errors
- Make sure you're not on the free tier limit (200 emails/month)

**QR Code not working?**
- Make sure you're using the deployed URL, not localhost
- Test the URL in a browser first
- Ensure the QR code is high quality when printed

## 📞 Support

If you need help, check:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- React Documentation: [https://react.dev/](https://react.dev/)

## 🎉 You're All Set!

Once configured, users can:
1. Scan your QR code
2. Rate your product (1-5 stars)
3. Leave feedback
4. Submit - and you'll receive it via email!

Happy collecting feedback! 🚀

