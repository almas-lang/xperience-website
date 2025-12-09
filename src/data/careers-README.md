# Managing Career Positions

This guide explains how to add or remove job positions from the Careers page.

## Adding a New Position

To add a new job opening:

1. Open `careers.ts`
2. Copy this template:

```typescript
{
  title: 'Job Title',
  location: 'City, Country' or 'Remote',
  type: 'Full-time', // or 'Contract' or 'Remote'
  department: 'Department Name',
  description: 'Brief description of the role and what they will do.',
  requirements: [
    'First requirement',
    'Second requirement',
    'Third requirement',
  ],
},
```

3. Fill in all the fields
4. Add it to the `openPositions` array (don't forget the comma!)
5. Save the file

## Removing a Position

1. Open `careers.ts`
2. Find the position object you want to remove
3. Delete the entire object (including the comma)
4. Save the file

## Field Descriptions

- **title**: The job title (e.g., "Senior Design Mentor")
- **location**: Where the job is based. Use "Remote" for remote positions, or "City, Country" format
- **type**: Must be exactly one of: `'Full-time'`, `'Contract'`, or `'Remote'`
- **department**: The department (e.g., "Education", "DAAS", "Marketing")
- **description**: A one-sentence description of what the role involves
- **requirements**: Array of 3-5 key requirements as strings

## Tips

- ✅ Always add a comma after each position object (except the last one)
- ✅ Keep descriptions concise (1-2 sentences)
- ✅ List 3-5 requirements per position
- ✅ Use consistent location formatting
- ✅ Test the page after making changes
- ❌ Don't modify the TypeScript interface at the top
- ❌ Don't remove the export statement

## Example

```typescript
{
  title: 'UX Researcher',
  location: 'Mumbai, India',
  type: 'Full-time',
  department: 'Education',
  description: 'Conduct user research to improve our programmes and help shape the learning experience.',
  requirements: [
    '4+ years UX research experience',
    'Qual and Quant research methods',
    'Experience in education or EdTech',
  ],
},
```
