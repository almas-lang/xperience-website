\# 🚀 Hostinger WordPress → Vercel Next.js Migration Guide

## Current Setup
- **Hosting**: Hostinger WordPress
- **Domain**: xperiencewave.com
- **New Stack**: Next.js on Vercel

---

## 📋 Pre-Migration Checklist

### 1. Backup Your WordPress Site on Hostinger

**Option A: Use Hostinger Backup (Easiest)**
1. Login to Hostinger control panel (hpanel)
2. Go to **Websites** → Select your site
3. Click **Backups** in the left menu
4. Click **Create Backup** → Download it
5. **Keep this backup safe!**

**Option B: Manual Backup**
1. Go to **File Manager** in hpanel
2. Navigate to `public_html` folder
3. Download all WordPress files
4. Go to **Databases** → phpMyAdmin
5. Export your database

### 2. Note Your DNS Settings
1. In hpanel, go to **Domains**
2. Click on your domain
3. Go to **DNS / Name Servers**
4. **Take screenshots of current DNS records**
5. Note which records are for:
   - Website (A record pointing to Hostinger)
   - Email (MX records - DON'T DELETE THESE!)
   - Other services

---

## 🚀 Deployment Steps

### Step 1: Deploy to Vercel First

```bash
# 1. Push to GitHub (if not done)
git remote add origin https://github.com/YOUR_USERNAME/xperiencewave-website.git
git push -u origin main

# 2. Deploy to Vercel
# Go to vercel.com → Import from GitHub
```

**Add environment variables in Vercel**:
```
NEXT_PUBLIC_BREVO_API_KEY=your_brevo_api_key_here
NEXT_PUBLIC_BREVO_LIST_ID=your_list_id_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id_here
NEXT_PUBLIC_BOOKING_URL=your_booking_url_here
```

**Result**: You get `xperiencewave-website.vercel.app`

---

### Step 2: Test on Subdomain (RECOMMENDED)

#### In Vercel Dashboard
1. Go to your project
2. Click **Settings** → **Domains**
3. Add domain: `new.xperiencewave.com`
4. Vercel will show you DNS instructions

#### In Hostinger (hpanel)
1. Go to **Domains** → Click your domain
2. Click **DNS / Name Servers**
3. Click **Manage DNS Records**
4. Add new record:
   ```
   Type: CNAME
   Name: new
   Value: cname.vercel-dns.com
   TTL: 3600 (or default)
   ```
5. Click **Add Record**

#### Test
Wait 10-30 minutes, then visit: `new.xperiencewave.com`

**Test everything thoroughly!**

---

### Step 3: Update DNS to Point to Vercel

⚠️ **IMPORTANT**: Do this ONLY after testing on subdomain!

#### In Vercel Dashboard
1. Add domains:
   - `xperiencewave.com`
   - `www.xperiencewave.com`
2. Vercel will show DNS instructions

#### In Hostinger (hpanel)

1. **Go to**: Domains → Your domain → DNS / Name Servers
2. **Click**: Manage DNS Records

3. **MODIFY** (don't delete) the A record for root domain:
   ```
   Type: A
   Name: @ (or blank)
   Points to: 76.76.21.21 (Vercel IP)
   TTL: 3600
   ```

4. **MODIFY** (or ADD) CNAME for www:
   ```
   Type: CNAME
   Name: www
   Points to: cname.vercel-dns.com
   TTL: 3600
   ```

5. **⚠️ KEEP YOUR EMAIL RECORDS**:
   - Don't touch MX records (mail)
   - Don't touch TXT records (SPF, DKIM)
   - Only modify website (A and CNAME) records

6. **Click**: Save changes

---

## 📧 Keep Email Working

### If you use email with xperiencewave.com

**In Hostinger DNS settings, KEEP these records**:

```
# Example MX records (yours may be different)
Type: MX
Name: @
Points to: mx1.hostinger.com
Priority: 10

Type: MX
Name: @
Points to: mx2.hostinger.com
Priority: 20

# SPF record
Type: TXT
Name: @
Value: v=spf1 include:_spf.hostinger.com ~all

# DKIM (if you have it)
Type: TXT
Name: default._domainkey
Value: [your DKIM key]
```

**These are safe to keep** - they won't conflict with website hosting on Vercel.

---

## ⏱️ Timeline

- **DNS propagation**: 5-60 minutes (usually 15-30)
- **Some users**: May see old site for up to 24 hours (DNS caching)
- **Email**: Should continue working (if you kept MX records)

---

## 🔍 Verify DNS Changes

### Check if DNS updated:

**Option 1: Online tool**
- Go to: https://dnschecker.org
- Enter: `xperiencewave.com`
- Should show: `76.76.21.21`

**Option 2: Command line**
```bash
# Mac/Linux
dig xperiencewave.com

# Windows
nslookup xperiencewave.com
```

---

## ⚠️ What Happens to WordPress?

### Hostinger Account
- WordPress files stay on Hostinger
- You're still paying for Hostinger hosting
- But website traffic goes to Vercel instead

### Options

**Option A: Keep as Backup (Recommended for 30 days)**
- Leave WordPress running
- Keep paying Hostinger
- Safety net if you need to rollback

**Option B: Cancel Hostinger Later**
- After 30 days of successful migration
- Cancel WordPress hosting
- Keep domain registration with Hostinger (or transfer)

**Option C: Use Hostinger for Email Only**
- Downgrade to email-only plan
- Cancel WordPress hosting
- Keep MX records for email

---

## 🆘 Rollback Plan

### If something goes wrong:

1. **In Hostinger DNS**:
   - Change A record back to Hostinger IP
   - You can find original IP in your backup screenshots
   - Usually shows as: `xxx.xxx.xxx.xxx` (Hostinger IP)

2. **Original Hostinger IP**:
   - Check your WordPress admin: Tools → Site Health
   - Or check hpanel: Websites → Details
   - Or contact Hostinger support

3. **Typical Hostinger IPs** (yours may differ):
   - Could be in range: `141.x.x.x` or `162.x.x.x`

4. **DNS reverts in 5-15 minutes usually**

---

## 📊 Hostinger-Specific Notes

### Analytics
- Hostinger has built-in analytics - you won't need this anymore
- Google Analytics (in your Next.js site) will track everything

### Hostinger Email
- If you use `hello@xperiencewave.com` via Hostinger:
  - Email keeps working (via MX records)
  - Access via: webmail.hostinger.com
  - Or use email client (Outlook, Gmail, etc.)

### SSL Certificate
- Vercel provides free SSL automatically
- Your site will have https:// immediately
- No need to manage SSL certificates

### File Manager
- After migration, you won't use Hostinger File Manager
- All updates happen via GitHub → Vercel auto-deploys
- Much easier and faster!

---

## 🎯 Post-Migration Checklist

### Day 1
- [ ] Site loads on xperiencewave.com
- [ ] SSL certificate working (https://)
- [ ] Contact form works
- [ ] Newsletter signup works
- [ ] Email still working
- [ ] Google Analytics tracking

### Week 1
- [ ] Monitor traffic in Google Analytics
- [ ] Check form submissions
- [ ] Monitor Vercel dashboard for errors
- [ ] Collect user feedback

### Month 1
- [ ] Compare traffic to WordPress baseline
- [ ] Decide on Hostinger plan
- [ ] Celebrate successful migration! 🎉

---

## 💰 Cost Comparison

### Current (Hostinger)
- WordPress hosting: ~$3-10/month
- Domain: ~$10-15/year

### New (Vercel + Hostinger)

**Option A: Free Tier** (Recommended for start)
- Vercel: **FREE** (Hobby plan)
  - 100GB bandwidth
  - Unlimited deployments
  - Custom domain
  - Free SSL
- Hostinger: Keep for email or cancel

**Option B: Pro Plan** (If you need more)
- Vercel Pro: $20/month
  - More bandwidth
  - Analytics
  - Priority support

**Savings**: Potentially $36-120/year!

---

## 🚀 Ready to Go!

1. ✅ Backup WordPress on Hostinger
2. ✅ Screenshot DNS settings
3. ✅ Deploy to Vercel
4. ✅ Test on subdomain
5. ✅ Update DNS when ready
6. ✅ Monitor for 24 hours

---

## 📞 Support

**Hostinger Support**:
- Live chat in hpanel
- Available 24/7
- Can help with DNS records

**Vercel Support**:
- Documentation: vercel.com/docs
- Community: github.com/vercel/next.js/discussions

---

**Last Updated**: 2025-12-09
**Your Status**: ✅ Ready to deploy from Hostinger to Vercel
