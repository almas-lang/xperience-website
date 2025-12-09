# 🚀 Quick Deploy Guide - START HERE

## ✅ You're Ready to Deploy!

Your build passed successfully. Follow these steps:

---

## Step 1: Push to GitHub (5 minutes)

```bash
# 1. Create new repo on GitHub: https://github.com/new
#    Name: xperiencewave-website
#    Make it private or public (your choice)

# 2. Run these commands:
git remote add origin https://github.com/YOUR_USERNAME/xperiencewave-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel (5 minutes)

1. **Go to**: https://vercel.com/new
2. **Click**: "Import Git Repository"
3. **Select**: Your GitHub repo
4. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_BREVO_API_KEY=your_brevo_api_key_here
   NEXT_PUBLIC_BREVO_LIST_ID=your_list_id_here
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id_here
   NEXT_PUBLIC_BOOKING_URL=your_booking_url_here
   ```

6. **Click**: "Deploy"

---

## Step 3: Test Your Site (10 minutes)

You'll get a URL like: `xperiencewave-website.vercel.app`

**Test these**:
- [ ] Homepage loads
- [ ] Contact form works
- [ ] Newsletter signup works
- [ ] All navigation links work
- [ ] Mobile view looks good
- [ ] Programmes page works
- [ ] Hire Designers page works

---

## Step 4A: Gradual Migration (RECOMMENDED)

### Test on Subdomain First

**Add subdomain in Vercel**:
1. Project → Settings → Domains
2. Add: `new.xperiencewave.com`
3. Vercel shows DNS instructions

**Update DNS** (in your domain provider):
```
Type: CNAME
Name: new
Value: cname.vercel-dns.com
```

**Wait 10-30 minutes** → Test at `new.xperiencewave.com`

**When ready**, switch main domain ⬇️

---

## Step 4B: Direct Migration

### Replace WordPress Site

**In Vercel**:
1. Add domain: `xperiencewave.com`
2. Add domain: `www.xperiencewave.com`

**Update DNS** (in your domain provider):
```
# Root domain
Type: A
Name: @
Value: 76.76.21.21

# WWW subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ⚠️ Before You Switch DNS

### Backup WordPress
1. Download all content
2. Export database
3. Save all images

### Double Check
- [ ] Test Vercel site thoroughly
- [ ] All forms work
- [ ] All images load
- [ ] Mobile works perfectly

---

## 🎉 You're Done!

**Monitor for 24 hours**:
- Check Google Analytics
- Test contact form
- Watch for any errors in Vercel dashboard

---

## 🆘 Troubleshooting

**Site not loading?**
- Wait 30 minutes (DNS propagation)
- Clear browser cache
- Try incognito mode

**Forms not working?**
- Check Vercel environment variables
- Check browser console for errors

**Need to rollback?**
- Change DNS back to WordPress
- Usually works in 5-15 minutes

---

## 📖 Detailed Guide

See: `WORDPRESS-TO-NEXTJS-DEPLOYMENT.md` for complete guide

---

**Status**: ✅ Ready to deploy
**Build**: ✅ Successful
**Git**: ✅ Initialized and committed
