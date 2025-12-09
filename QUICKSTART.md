# 🚀 QUICK START GUIDE

## Step 1: Copy to Your Computer
Copy the entire `xperiencewave-website` folder to your desired location.

## Step 2: Open in VS Code
```bash
# Open terminal/command prompt and navigate to the folder
cd path/to/xperiencewave-website

# Open in VS Code
code .
```

## Step 3: Install Dependencies
In VS Code terminal (View → Terminal):
```bash
npm install
```

## Step 4: Add Your Logo
1. Place your logo file in the `/public` folder
2. Update logo references in:
   - `src/components/Navigation.tsx`
   - `src/components/Footer.tsx`

## Step 5: Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

## Step 6: Test Everything
- ✅ Navigation works between pages
- ✅ "Book Strategy Call" button redirects to ld.xperiencewave.com
- ✅ Forms are functional (will work after Vercel deployment)

## Step 7: Push to GitHub
```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial Xperience Wave website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/xperiencewave-website.git
git push -u origin main
```

## Step 8: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Add environment variables (from .env.local):
   - NEXT_PUBLIC_BREVO_API_KEY
   - NEXT_PUBLIC_BREVO_LIST_ID
   - NEXT_PUBLIC_GA_MEASUREMENT_ID
   - NEXT_PUBLIC_BOOKING_URL
6. Click "Deploy"

## Step 9: Point Domain to Vercel
See full instructions in README.md under "Domain Migration"

---

## Need Help?

**Common Issues:**

**"npm not found"**
→ Install Node.js from https://nodejs.org (version 18+)

**"Port 3000 already in use"**
→ Run: `npm run dev -- -p 3001` (uses port 3001 instead)

**Forms not working locally**
→ Forms need Vercel deployment to work (they use API routes)

**Changes not showing**
→ Stop the server (Ctrl+C) and run `npm run dev` again

---

## What's Next?

1. Share Figma designs/wireframes for other pages
2. I'll provide updated code for each page
3. You copy-paste and test locally
4. Push to GitHub → Auto-deploys to Vercel

**Current Pages Status:**
- ✅ Home (basic structure - needs Figma refinement)
- ⏳ Programmes (waiting for design)
- ⏳ About (waiting for design)
- ⏳ Resources (waiting for design)
- ⏳ Products (waiting for design)
- ⏳ Hire Designers (waiting for design)
- ⏳ Contact (waiting for form field specs)

Ready to continue? Share your next page design! 🎨
