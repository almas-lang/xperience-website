export interface Position {
  title: string
  location: string
  type: 'Full-time' | 'Contract' | 'Remote'
  department: string
  description: string
  requirements: string[]
}

/**
 * List of open positions at Xperience Wave
 *
 * To add a new position:
 * 1. Copy the structure below
 * 2. Fill in all the required fields
 * 3. Add a comma after the previous entry
 * 4. Paste your new position object
 *
 * To remove a position:
 * 1. Find the position object you want to remove
 * 2. Delete the entire object including the comma
 *
 * Fields:
 * - title: Job title
 * - location: City, Country or "Remote"
 * - type: Choose from 'Full-time', 'Contract', or 'Remote'
 * - department: Department name (e.g., 'Education', 'DAAS', 'Marketing')
 * - description: Brief job description
 * - requirements: Array of requirement strings
 */
export const openPositions: Position[] = [
  {
    title: 'Senior Design Mentor',
    location: 'Remote / Bangalore',
    type: 'Full-time',
    department: 'Education',
    description: 'Lead 121 coaching sessions and help designers transition from execution to strategy.',
    requirements: [
      '7+ years design experience',
      'Led teams',
      'Mentorship experience',
    ],
  },
  {
    title: 'Product Designer',
    location: 'Bangalore',
    type: 'Full-time',
    department: 'DAAS',
    description: 'Work on client projects across industries. Design products that drive real business outcomes.',
    requirements: [
      '3+ years experience',
      'Strong portfolio',
      'Client-facing skills',
    ],
  },
  {
    title: 'Content Designer',
    location: 'Remote',
    type: 'Contract',
    department: 'Marketing',
    description: 'Create educational content for our blog, courses, and resources. Write like humans talk.',
    requirements: [
      'Design background',
      'Strong writing',
      'Portfolio of content work',
    ],
  },
]
