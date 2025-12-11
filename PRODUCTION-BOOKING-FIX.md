# Production Booking URL Fix

## Problem
The "Book a strategy call" buttons are not working in production and not pointing to `https://ld.xperiencewave.com/`

## Root Cause
The environment variable `NEXT_PUBLIC_BOOKING_URL` is not set in your Vercel production environment.

## Solution

### Step 1: Set Environment Variable in Vercel

1. Go to your Vercel dashboard: https://vercel.com/
2. Select your project: `xperiencewave-website`
3. Go to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_BOOKING_URL`
   - **Value**: `https://ld.xperiencewave.com`
   - **Environment**: Select **Production**, **Preview**, and **Development**
5. Click **Save**

### Step 2: Redeploy

After setting the environment variable, you need to redeploy:

1. Go to the **Deployments** tab in Vercel
2. Find your latest production deployment
3. Click the three dots (•••) menu
4. Click **Redeploy**
5. Make sure to check **Use existing Build Cache** is UNCHECKED to ensure the new environment variable is picked up

**OR** simply push a new commit to trigger a deployment.

### Step 3: Verify

After deployment completes:

1. Visit your production site
2. Check the following buttons work and redirect to `https://ld.xperiencewave.com`:
   - ✅ Navigation "Book a strategy call" button (top right)
   - ✅ Video section "Book free personal consultation" button
   - ✅ Programme page "Book a free strategy call" buttons
   - ✅ FAQ page "Book a strategy call" button
   - ✅ Growth Journey "Explore growth path" buttons (for Surge programme)

## Technical Details

### All booking buttons use the environment variable:

**Navigation** ([src/components/Navigation.tsx](src/components/Navigation.tsx#L154-L160)):
```tsx
<a
  href={process.env.NEXT_PUBLIC_BOOKING_URL}
  target="_blank"
  rel="noopener noreferrer"
>
  Book a strategy call
</a>
```

**Video Section** ([src/components/home/VideoSection.tsx](src/components/home/VideoSection.tsx#L66-L72)):
```tsx
<a
  href={process.env.NEXT_PUBLIC_BOOKING_URL}
  target="_blank"
  rel="noopener noreferrer"
>
  Book free personal consultation
</a>
```

**Programme Page** ([src/app/programmes/page.tsx](src/app/programmes/page.tsx)):
- Lines 922, 1070, 1147 all use `process.env.NEXT_PUBLIC_BOOKING_URL`

**Growth Journey** ([src/components/home/GrowthJourneySection.tsx](src/components/home/GrowthJourneySection.tsx)):
- Lines 296, 429 use `process.env.NEXT_PUBLIC_BOOKING_URL` for Surge programme

**FAQ Page** ([src/app/faqs/page.tsx](src/app/faqs/page.tsx#L245-L250)):
```tsx
<a
  href={process.env.NEXT_PUBLIC_BOOKING_URL}
  target="_blank"
  rel="noopener noreferrer"
>
  Book a strategy call
</a>
```

### Why This Happened

Environment variables prefixed with `NEXT_PUBLIC_` are embedded into the JavaScript bundle at **build time**. If the variable isn't set in Vercel when the build runs, it will be `undefined` in the production code, causing the links to not work.

## Quick Verification Command

Run this in your local environment to ensure the variable is set:
```bash
echo $NEXT_PUBLIC_BOOKING_URL
```

Expected output: `https://ld.xperiencewave.com`

## Additional Notes

- The `.env.local` file is only for local development and is NOT deployed to production
- Environment variables must be explicitly set in Vercel's dashboard for each environment (Development, Preview, Production)
- After changing environment variables, you MUST redeploy for changes to take effect
