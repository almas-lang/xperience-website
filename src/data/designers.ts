export interface Designer {
  name: string
  role: string
  rating: number
  experience: string
  location: string
  type: 'Full-time' | 'Contract' | 'Freelance'
  skills: string[]
  image: string
  linkedin?: string
}

/**
 * List of available designers for hire
 *
 * To add a new designer:
 * 1. Copy the structure below
 * 2. Fill in all the required fields
 * 3. Add a comma after the previous entry
 * 4. Paste your new designer object
 *
 * To remove a designer:
 * 1. Find the designer object you want to remove
 * 2. Delete the entire object including the comma
 *
 * Fields:
 * - name: Designer's full name
 * - role: Their job title/role
 * - rating: Number between 0-5 (e.g., 4.9)
 * - experience: Format as "X years experience"
 * - location: City, Country
 * - type: Choose from 'Full-time', 'Contract', or 'Freelance'
 * - skills: Array of skill strings (e.g., ['Skill 1', 'Skill 2'])
 * - image: Image URL (use Unsplash with format: https://images.unsplash.com/photo-PHOTOID?w=200&h=200&fit=crop)
 */
export const designers: Designer[] = [
  {
    name: 'Md Anzar Aquil Ansari',
    role: 'UI/UX Designer',
    rating: 4.8,
    experience: '3 years experience',
    location: 'Bangalore, India',
    type: 'Full-time',
    skills: ['UI Design', 'UX Design', 'Prototyping', 'Figma'],
    image: '/assets/anzar.png',
    linkedin: 'https://www.linkedin.com/in/md-anzar/',
  },
  {
    name: 'Vikram Rajak',
    role: 'Senior UI/UX Designer',
    rating: 4.9,
    experience: '6 years experience',
    location: 'Bangalore, India',
    type: 'Full-time',
    skills: ['Product Design', 'UI Design', 'UX Research', 'Design Systems'],
    image: '/assets/VK.jpeg',
    linkedin: 'https://www.linkedin.com/in/vikramrajak/',
  },
  {
    name: 'Pratika Chavan',
    role: 'UX Design Mentor & Consultant',
    rating: 5,
    experience: '8 years experience',
    location: 'Bangalore, India',
    type: 'Contract',
    skills: ['UX Strategy', 'Mentorship', 'Design Leadership', 'Consulting'],
    image: '/assets/pratika.jpeg',
    linkedin: 'https://www.linkedin.com/in/pratika-chavan/',
  },
  {
    name: 'Huseini Indorewala',
    role: 'Product Designer',
    rating: 4.8,
    experience: '5 years experience',
    location: 'Bangalore, India',
    type: 'Full-time',
    skills: ['Product Design', 'User Research', 'Design Thinking', 'Figma'],
    image: '/assets/huseini.jpeg',
    linkedin: 'https://www.linkedin.com/in/huseini/',
  },
  {
    name: 'Aswin Kumar Nair',
    role: 'Senior UI/UX Designer',
    rating: 4.9,
    experience: '7 years experience',
    location: 'Bangalore, India',
    type: 'Full-time',
    skills: ['UI/UX Design', 'Interaction Design', 'Design Systems', 'Prototyping'],
    image: '/assets/aswin.png',
    linkedin: 'https://www.linkedin.com/in/aswinkumarnair/',
  },
  {
    name: 'Abhipsa Panda',
    role: 'Product Designer',
    rating: 4.8,
    experience: '4 years experience',
    location: 'Bangalore, India',
    type: 'Full-time',
    skills: ['Product Design', 'UX Design', 'Visual Design', 'Figma'],
    image: '/assets/abhipsa.jpeg',
    linkedin: 'https://www.linkedin.com/in/abhipsa-panda06/',
  },
]
