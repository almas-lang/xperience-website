'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ProgramType = 'ripple' | 'tide' | 'current' | 'surge'

interface UserProfile {
  role: string
  experience: string
  goal: string
}

interface ProgramRecommendationContextType {
  userProfile: UserProfile
  setUserProfile: (profile: UserProfile) => void
  recommendedProgram: ProgramType | null
  setRecommendedProgram: (program: ProgramType | null) => void
}

const ProgramRecommendationContext = createContext<ProgramRecommendationContextType | undefined>(undefined)

// Helper to safely access localStorage
const getStoredProfile = (): UserProfile => {
  if (typeof window === 'undefined') {
    return { role: '', experience: '', goal: '' }
  }
  try {
    const stored = localStorage.getItem('userProfile')
    return stored ? JSON.parse(stored) : { role: '', experience: '', goal: '' }
  } catch {
    return { role: '', experience: '', goal: '' }
  }
}

const getStoredProgram = (): ProgramType | null => {
  if (typeof window === 'undefined') {
    return null
  }
  try {
    const stored = localStorage.getItem('recommendedProgram')
    return stored ? (stored as ProgramType) : null
  } catch {
    return null
  }
}

export function ProgramRecommendationProvider({ children }: { children: ReactNode }) {
  // Always start with empty state to avoid hydration mismatch
  const [userProfile, setUserProfileState] = useState<UserProfile>({
    role: '',
    experience: '',
    goal: '',
  })
  const [recommendedProgram, setRecommendedProgramState] = useState<ProgramType | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    const storedProfile = getStoredProfile()
    const storedProgram = getStoredProgram()
    setUserProfileState(storedProfile)
    setRecommendedProgramState(storedProgram)
    setIsHydrated(true)
  }, [])

  // Wrapper functions to persist to localStorage
  const setUserProfile = (profile: UserProfile) => {
    setUserProfileState(profile)
    if (typeof window !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(profile))
    }
  }

  const setRecommendedProgram = (program: ProgramType | null) => {
    setRecommendedProgramState(program)
    if (typeof window !== 'undefined') {
      if (program) {
        localStorage.setItem('recommendedProgram', program)
      } else {
        localStorage.removeItem('recommendedProgram')
      }
    }
  }

  return (
    <ProgramRecommendationContext.Provider
      value={{
        userProfile,
        setUserProfile,
        recommendedProgram,
        setRecommendedProgram,
      }}
    >
      {children}
    </ProgramRecommendationContext.Provider>
  )
}

export function useProgramRecommendation() {
  const context = useContext(ProgramRecommendationContext)
  if (!context) {
    throw new Error('useProgramRecommendation must be used within ProgramRecommendationProvider')
  }
  return context
}

// Helper function to calculate recommended program based on user profile
export function calculateRecommendedProgram(profile: UserProfile): ProgramType {
  const { experience, goal } = profile

  // Surge: For hiring needs
  if (goal === 'hire designers') {
    return 'surge'
  }

  // Ripple: 0-2 years, entry-level
  if (experience === '0 to 2') {
    return 'ripple'
  }

  // Tide: 5-10 years or leadership goals
  if (experience === '5 to 10' || experience === '10+') {
    return 'tide'
  }

  // Current: 2-5 years, mid-level goals
  if (experience === '2 to 5') {
    if (goal === 'move to senior/lead' || goal === 'transition to product design') {
      return 'current'
    }
  }

  // Default to current for mid-level
  return 'current'
}
