# Xperience Wave Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS for Xperience Wave - Design Career Development & Mentoring.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Plus Jakarta Sans
- **Animations:** Framer Motion
- **Forms:** Brevo API Integration
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- Brevo account (for forms)
- Google Analytics account

## 🛠️ Local Setup Instructions

### 1. Copy Project Files

Copy the entire `xperiencewave-website` folder to your local machine.

### 2. Install Dependencies

```bash
cd xperiencewave-website
npm install
```

### 3. Add Your Logo

Replace the logo placeholder in the following files:
- `/public/logo.png` (or .svg)
- Update the logo references in:
  - `src/components/Navigation.tsx`
  - `src/components/Footer.tsx`

### 4. Environment Variables

The `.env.local` file is already configured with your credentials:
- Brevo API Key
- Brevo List ID: 50
- Google Analytics ID: G-26R787N9N5
- Booking URL: https://ld.xperiencewave.com

**IMPORTANT SECURITY NOTE:**
After final deployment, regenerate your Brevo API key from your Brevo dashboard for security.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
xperiencewave-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── globals.css           # Global styles
│   │   ├── programmes/           # Programmes page
│   │   ├── about/                # About page
│   │   ├── resources/            # Resources page
│   │   ├── products/             # Products page
│   │   ├── hire-designers/       # Hire Designers page
│   │   ├── contact/              # Contact page
│   │   ├── api/
│   │   │   ├── contact/          # Contact form API
│   │   │   └── newsletter/       # Newsletter API
│   │   ├── sitemap.ts            # SEO sitemap
│   │   └── robots.ts             # SEO robots.txt
│   └── components/
│       ├── Navigation.tsx        # Header navigation
│       ├── Footer.tsx            # Footer component
│       ├── ContactForm.tsx       # Contact form
│       └── NewsletterSignup.tsx  # Newsletter form
├── public/                       # Static assets (add your logo here)
├── .env.local                    # Environment variables
├── .env.example                  # Example env file
├── package.json
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.js                # Next.js configuration
```

## 🎨 Brand Colors

- Primary: `#7677EA`
- Text Body: `#3F3E49`
- Text Header: `#100F0F`
- Accent: `#F24646`

## 🚢 Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   ```

2. **Create a new repository on GitHub** (e.g., `xperiencewave-website`)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/xperiencewave-website.git
   git push -u origin main
   ```

4. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables in Vercel dashboard:
     - `NEXT_PUBLIC_BREVO_API_KEY`
     - `NEXT_PUBLIC_BREVO_LIST_ID`
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - `NEXT_PUBLIC_BOOKING_URL`
   - Click "Deploy"

5. **Your site will be live at:** `your-project-name.vercel.app`

### Option 2: Deploy Directly from CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 🌐 Domain Migration from Hostinger to Vercel

### Step 1: Deploy to Vercel
Complete the Vercel deployment first (you'll get a URL like `xperiencewave.vercel.app`)

### Step 2: Add Custom Domain in Vercel
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add `www.xperiencewave.com` and `xperiencewave.com`
4. Vercel will provide DNS records

### Step 3: Update DNS at Hostinger
1. Login to Hostinger
2. Go to your domain management
3. Navigate to DNS Zone Editor
4. Update the following records:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 4: Verify Domain
- Wait 24-48 hours for DNS propagation (usually takes 1-2 hours)
- Vercel will automatically issue SSL certificate
- Your site will be live at www.xperiencewave.com

## 📝 Next Steps After Deployment

1. **Test all forms:**
   - Contact form submission
   - Newsletter signup
   - Verify emails arrive in Brevo

2. **Check Google Analytics:**
   - Verify tracking is working
   - Monitor real-time users

3. **Test on all devices:**
   - Mobile (iOS/Android)
   - Tablet
   - Desktop (Chrome, Firefox, Safari)

4. **SEO Verification:**
   - Submit sitemap to Google Search Console: `https://www.xperiencewave.com/sitemap.xml`
   - Verify robots.txt: `https://www.xperiencewave.com/robots.txt`

5. **Security:**
   - Regenerate Brevo API key after deployment
   - Update `.env.local` with new key
   - Never commit `.env.local` to GitHub

## 🔄 Making Updates

### For Code Changes:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Vercel will automatically deploy the changes

### For Content Updates:
Share the page name and updated design/wireframe, and I'll provide the updated code.

## 📞 Support

For any issues or questions during setup:
1. Check the error messages in the terminal
2. Verify all environment variables are set correctly
3. Ensure Node.js version is 18+

## 🎯 Current Status

✅ Home page built (needs Figma design refinement)
⏳ Programmes page (waiting for wireframe)
⏳ About page (waiting for wireframe)
⏳ Resources page (waiting for wireframe)
⏳ Products page (waiting for wireframe)
⏳ Hire Designers page (waiting for wireframe)
⏳ Contact page (waiting for form field specifications)

## 📧 Brevo Integration

Both contact form and newsletter signup send data to:
- **List ID:** 50
- **API:** Brevo REST API v3

Contact form also sends email notifications to `info@xperiencewave.com`

## 🎨 Adding Micro-interactions

To add micro-interactions using Framer Motion:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

Share reference websites for specific animations you want to implement.

---

Built with ❤️ for Xperience Wave
