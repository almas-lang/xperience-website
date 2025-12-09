# Public Assets Folder

Place your logo and images here:

## Logo Files Needed:
- `logo.png` or `logo.svg` - Main logo (for light backgrounds)
- `logo-white.png` or `logo-white.svg` - White version (for footer/dark backgrounds)

## Recommended Image Sizes:
- Logo: 192px height (transparent background)
- Hero images: 1200x800px
- Thumbnails: 400x300px
- Icons: 64x64px

## Favicon:
- Add `favicon.ico` (32x32px) to this folder
- Next.js will automatically use it

## After adding your logo:
Update the logo references in:
1. `src/components/Navigation.tsx` (line ~29)
2. `src/components/Footer.tsx` (line ~28)

Replace the placeholder div with:
```tsx
<Image
  src="/logo.png"
  alt="Xperience Wave Logo"
  width={192}
  height={48}
  priority
/>
```
