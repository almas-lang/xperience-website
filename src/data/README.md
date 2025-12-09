# Managing Designer Profiles

This folder contains data files for managing content on the website.

## Adding a New Designer

To add a new designer to the "Hire Designers" page:

1. Open `designers.ts`
2. Copy this template:

```typescript
{
  name: 'Full Name',
  role: 'Job Title',
  rating: 4.8,
  experience: 'X years experience',
  location: 'City, Country',
  type: 'Full-time', // or 'Contract' or 'Freelance'
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  image: 'https://images.unsplash.com/photo-PHOTOID?w=200&h=200&fit=crop',
},
```

3. Fill in all the fields
4. Add it to the `designers` array (don't forget the comma!)
5. Save the file

## Removing a Designer

1. Open `designers.ts`
2. Find the designer object you want to remove
3. Delete the entire object (including the comma)
4. Save the file

## Finding Profile Images

For consistent styling, use Unsplash images:

1. Go to [Unsplash](https://unsplash.com)
2. Search for professional headshots
3. Copy the photo ID from the URL
4. Use this format: `https://images.unsplash.com/photo-PHOTOID?w=200&h=200&fit=crop`

Example:
- URL: `https://unsplash.com/photos/photo-1234567890`
- Photo ID: `1234567890`
- Image URL: `https://images.unsplash.com/photo-1234567890?w=200&h=200&fit=crop`

## Field Descriptions

- **name**: Designer's full name
- **role**: Their job title (e.g., "Senior Product Designer")
- **rating**: Number between 0-5 (use one decimal, e.g., 4.9)
- **experience**: Format as "X years experience"
- **location**: Format as "City, Country"
- **type**: Must be exactly one of: `'Full-time'`, `'Contract'`, or `'Freelance'`
- **skills**: Array of 3-6 skill strings
- **image**: Profile image URL (200x200px recommended)

## Tips

- ✅ Always add a comma after each designer object (except the last one)
- ✅ Use consistent formatting for experience ("X years experience")
- ✅ Keep skill lists to 3-6 items for best display
- ✅ Test the page after making changes
- ❌ Don't modify the TypeScript interface at the top
- ❌ Don't remove the export statement
