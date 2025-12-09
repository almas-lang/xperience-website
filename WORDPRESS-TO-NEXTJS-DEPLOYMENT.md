# WordPress to Next.js Deployment Guide

## 🎯 Current Situation
- **Live Site**: xperiencewave.com (WordPress)
- **New Site**: Next.js (this repository)
- **Goal**: Replace WordPress with Next.js

---

## 🚀 Recommended Deployment Strategy

### Phase 1: Deploy to Vercel (Test Environment)

#### Step 1: Push to GitHub
```bash
# Create a new repository on GitHub (github.com/new)
# Name it: xperiencewave-website

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/xperiencewave-website.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_BREVO_API_KEY`
   - `NEXT_PUBLIC_BREVO_LIST_ID`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_BOOKING_URL`
5. Click "Deploy"

**Result**: You'll get a URL like `xperiencewave-website.vercel.app`

---

### Phase 2: Test Everything

Test on the Vercel preview URL:
- ✅ All pages load correctly
- ✅ Forms work (contact, newsletter, hiring request)
- ✅ Analytics tracking works
- ✅ All images and assets load
- ✅ Mobile responsive design
- ✅ Navigation works
- ✅ External links work (booking URL, LinkedIn, etc.)

---

### Phase 3: Set Up Custom Domain

#### Option A: Gradual Migration (Recommended)
Deploy to a subdomain first to test:

1. **In Vercel Dashboard**:
   - Go to your project → "Settings" → "Domains"
   - Add domain: `new.xperiencewave.com`

2. **In WordPress Hosting/Domain Provider**:
   - Add CNAME record:
     - Name: `new`
     - Value: `cname.vercel-dns.com`
   - Wait for DNS propagation (5-60 minutes)

3. **Test at**: `new.xperiencewave.com`

4. **Once satisfied**, switch main domain

#### Option B: Direct Replacement
Replace WordPress immediately:

1. **In Vercel Dashboard**:
   - Add domain: `xperiencewave.com`
   - Add domain: `www.xperiencewave.com`

2. **In WordPress Hosting/Domain Provider**:
   - Update DNS records:
     - A record: `76.76.21.21` (Vercel)
     - CNAME for www: `cname.vercel-dns.com`

3. **WordPress Backup** (CRITICAL):
   - Export all content from WordPress
   - Download media files
   - Keep WordPress backup for 30 days

---

## 📋 Pre-Deployment Checklist

### Environment Variables
Make sure these are set in Vercel:
- [x] `NEXT_PUBLIC_BREVO_API_KEY` - Email service
- [x] `NEXT_PUBLIC_BREVO_LIST_ID` - Newsletter list
- [x] `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- [x] `NEXT_PUBLIC_BOOKING_URL` - External booking URL

### Content Migration from WordPress
- [ ] Blog posts exported to `/src/data/blogs.ts`
- [ ] All images migrated to `/public/assets/`
- [ ] Team photos added
- [ ] Partner logos added
- [ ] Designer profiles added

### SEO Setup
- [ ] Google Analytics ID configured
- [ ] Sitemap generated (`/sitemap.xml`)
- [ ] Robots.txt configured (`/robots.txt`)
- [ ] Meta tags on all pages
- [ ] Open Graph images

### Functionality Tests
- [ ] Contact form submits successfully
- [ ] Newsletter signup works
- [ ] Hiring request modal works
- [ ] All navigation links work
- [ ] Programme recommendation quiz works
- [ ] Mobile menu works
- [ ] All external links work

---

## 🔄 DNS Configuration Details

### Current Setup (WordPress)
Your domain is currently pointing to WordPress hosting.

### New Setup (Vercel)

#### For Root Domain (xperiencewave.com)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

#### For WWW Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### For Email (Keep existing)
Keep your existing MX records unchanged if you use email with this domain.

---

## ⚠️ Important Notes

### Before Switching DNS:
1. **Backup WordPress**:
   - Download all content
   - Export database
   - Save media files

2. **Test Vercel Deployment**:
   - Use the `.vercel.app` URL
   - Test all features
   - Check mobile responsiveness

3. **Prepare for Downtime**:
   - DNS changes take 5-60 minutes
   - Some users may see old site longer (DNS caching)

### After Switching DNS:
1. **Monitor**:
   - Check analytics for traffic
   - Test contact form submissions
   - Monitor error logs in Vercel

2. **Keep WordPress**:
   - Don't delete WordPress for 30 days
   - Keep it as backup
   - You can redirect it to Vercel later

---

## 🆘 Rollback Plan

If something goes wrong:

1. **Immediate Rollback**:
   - Change DNS back to WordPress hosting
   - Usually takes 5-15 minutes

2. **Identify Issue**:
   - Check Vercel logs
   - Test specific failing feature
   - Fix and redeploy

3. **Gradual Migration Alternative**:
   - Keep WordPress on main domain
   - Run Next.js on subdomain
   - Migrate page by page using redirects

---

## 📊 Post-Deployment Monitoring

### Week 1:
- [ ] Check Google Analytics daily
- [ ] Monitor form submissions
- [ ] Check for broken links
- [ ] Monitor Vercel performance metrics

### Week 2-4:
- [ ] Compare traffic to WordPress baseline
- [ ] Check SEO rankings
- [ ] Gather user feedback
- [ ] Fix any issues found

---

## 🎉 Success Criteria

- ✅ All pages load in <2 seconds
- ✅ Forms working and receiving submissions
- ✅ No broken links
- ✅ Mobile traffic equivalent to before
- ✅ Analytics tracking properly
- ✅ No increase in bounce rate

---

## 🛠️ Quick Commands Reference

```bash
# Local development
npm run dev

# Production build test
npm run build

# Start production server locally
npm start

# Check for errors
npm run lint

# Push changes
git add .
git commit -m "Your message"
git push
```

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **DNS Help**: Contact your domain registrar support

---

**Last Updated**: 2025-12-09
**Build Status**: ✅ Successful
**Repository**: Ready for deployment
