# 📋 DEPLOYMENT CHECKLIST

Use this checklist to ensure everything is ready before and after deployment.

## Pre-Deployment Checklist

### Content & Design
- [ ] Logo added to `/public` folder
- [ ] Logo references updated in Navigation.tsx and Footer.tsx
- [ ] All page content matches Figma designs
- [ ] All images optimized and added to `/public`
- [ ] All placeholder text replaced with actual content
- [ ] Contact form fields match requirements
- [ ] Newsletter form tested

### Technical Setup
- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Local dev server runs without errors (`npm run dev`)
- [ ] All pages load correctly on localhost
- [ ] Navigation works between all pages
- [ ] Forms render properly (will be functional after deployment)
- [ ] Responsive design tested (mobile, tablet, desktop)

### Configuration
- [ ] `.env.local` file exists with all required variables
- [ ] Brevo API key is correct
- [ ] Google Analytics ID is correct
- [ ] Booking URL is correct (ld.xperiencewave.com)
- [ ] Brand colors match design (#7677EA, #3F3E49, #100F0F, #F24646)

### Git & GitHub
- [ ] Git initialized (`git init`)
- [ ] All files committed (`git add . && git commit -m "Initial commit"`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub (`git push -u origin main`)
- [ ] `.env.local` is in `.gitignore` (already configured)

## Deployment Checklist

### Vercel Setup
- [ ] Vercel account created/logged in
- [ ] Project imported from GitHub
- [ ] Environment variables added to Vercel:
  - [ ] NEXT_PUBLIC_BREVO_API_KEY
  - [ ] NEXT_PUBLIC_BREVO_LIST_ID
  - [ ] NEXT_PUBLIC_GA_MEASUREMENT_ID
  - [ ] NEXT_PUBLIC_BOOKING_URL
- [ ] Initial deployment successful
- [ ] Deployment URL received (e.g., xperiencewave.vercel.app)

### Domain Configuration
- [ ] Custom domain added in Vercel (www.xperiencewave.com)
- [ ] DNS records obtained from Vercel
- [ ] A Record updated at Hostinger (@ → 76.76.21.21)
- [ ] CNAME Record updated at Hostinger (www → cname.vercel-dns.com)
- [ ] DNS propagation completed (check with https://dnschecker.org)
- [ ] SSL certificate issued by Vercel
- [ ] Both www and non-www versions work
- [ ] HTTPS redirect working

## Post-Deployment Testing

### Functionality Testing
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] "Book Strategy Call" button redirects properly
- [ ] Contact form submits successfully
- [ ] Contact form data appears in Brevo
- [ ] Newsletter signup works
- [ ] Newsletter emails added to Brevo
- [ ] Form validation working
- [ ] Success/error messages display correctly

### Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge (desktop)

### Device Testing
- [ ] iPhone (multiple sizes)
- [ ] Android phone
- [ ] iPad/Tablet
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)

### Performance & SEO
- [ ] Google Analytics tracking working (check real-time)
- [ ] Page load speed acceptable (<3 seconds)
- [ ] Images loading properly
- [ ] Sitemap accessible (yoursite.com/sitemap.xml)
- [ ] Robots.txt accessible (yoursite.com/robots.txt)
- [ ] Meta tags correct (check with View Page Source)
- [ ] Open Graph tags working (test with https://www.opengraph.xyz)

### SEO Setup
- [ ] Google Search Console added
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Analytics property created
- [ ] GA4 tracking code verified

## Security Checklist

### Post-Launch Security
- [ ] Brevo API key regenerated (since it was shared in chat)
- [ ] New API key updated in Vercel environment variables
- [ ] `.env.local` never committed to GitHub
- [ ] No sensitive data in public repository
- [ ] API routes tested for security
- [ ] Form spam protection considered (add reCAPTCHA later if needed)

## Ongoing Maintenance

### Weekly
- [ ] Check Google Analytics for traffic
- [ ] Monitor form submissions in Brevo
- [ ] Check for any error emails/notifications

### Monthly
- [ ] Review site performance
- [ ] Check for broken links
- [ ] Update content as needed
- [ ] Review and respond to contact form submissions

### Quarterly
- [ ] Update dependencies (`npm update`)
- [ ] Security audit (`npm audit`)
- [ ] Backup site code
- [ ] Review SEO performance

## Emergency Contacts

**Hosting Issues:**
- Vercel Support: https://vercel.com/support

**Domain Issues:**
- Hostinger Support: https://www.hostinger.com/contact

**Form Issues:**
- Brevo Support: https://www.brevo.com/support/

**Analytics Issues:**
- Google Analytics Help: https://support.google.com/analytics

---

## 🎉 Launch Day!

When everything above is checked:

1. Announce on social media
2. Send newsletter to existing contacts
3. Update all marketing materials with new URL
4. Monitor closely for first 24 hours

**Congratulations on your launch! 🚀**

---

Last Updated: [Date of deployment]
Deployed URL: www.xperiencewave.com
Vercel Project: [Add Vercel project name]
