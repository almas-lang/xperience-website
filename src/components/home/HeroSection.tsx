'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useProgramRecommendation, calculateRecommendedProgram } from '@/contexts/ProgramRecommendationContext'

export default function HeroSection() {
  const { setUserProfile, setRecommendedProgram, recommendedProgram } = useProgramRecommendation()

  const [selectedRole, setSelectedRole] = useState('')
  const [selectedExperience, setSelectedExperience] = useState('')
  const [selectedGoal, setSelectedGoal] = useState('')

  // Update context whenever selections change
  useEffect(() => {
    // Only calculate if all fields are filled
    if (selectedRole && selectedExperience && selectedGoal) {
      const profile = {
        role: selectedRole,
        experience: selectedExperience,
        goal: selectedGoal,
      }
      setUserProfile(profile)
      const recommended = calculateRecommendedProgram(profile)
      setRecommendedProgram(recommended)
    }
  }, [selectedRole, selectedExperience, selectedGoal, setUserProfile, setRecommendedProgram])

  const roles = ['UX Designer', 'UI Designer', 'Product Designer', 'Visual Designer', 'Inspiring Designer']
  const experiences = ['0 to 2', '2 to 5', '5 to 10', '10+']
  const goals = ['move to senior/lead', 'transition to product design', 'get my first design job', 'improve my portfolio']

  // Generate link with recommended program as hash
  const getProgramLink = () => {
    if (recommendedProgram) {
      return `/programmes#${recommendedProgram}`
    }
    return '/programmes'
  }

  return (
    <section className="relative bg-white py-6 lg:py-12 overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orb 1 - Top Left */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-red-200/40 to-transparent rounded-full blur-3xl animate-fadeIn"
          style={{ animationDelay: '0s' }}
        />

        {/* Gradient Orb 2 - Top Right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-3xl animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Gradient Orb 3 - Bottom Left */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-red-100/40 to-transparent rounded-full blur-3xl animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: 'url(/patterns/bg_pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        />

        {/* Geometric Accent Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-red-300/20 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-orange-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Single Image */}
          <div className="relative order-2 lg:order-1 hidden lg:block">
            <div className="animate-slideInLeft">
              <div className="relative h-full min-h-[650px] rounded-3xl overflow-hidden bg-gray-100 group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/assets/hero.png"
                  alt="Designer working on laptop"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[75%_center] transition-transform duration-700 ease-out group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjY1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjY1MCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                />
                {/* Rating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-3 z-10 transform transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 animate-fadeIn" style={{ animationDelay: '1s' }}>
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    <Image
                      src="/assets/VK.jpeg"
                      alt="Designer VK"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/assets/pratika.jpeg"
                      alt="Designer Pratika"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/assets/anzar.png"
                      alt="Designer Anzar"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/assets/aswin.png"
                      alt="Designer Aswin"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    {/* Rating Text */}
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-slate-900 leading-none">4.9</span>
                      <span className="text-xs text-slate-500">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Form Card */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-header leading-[1.1] animate-slideInRight">
                Designers who drive outcomes get{' '}
                <span className="text-accent inline-block hover:scale-110 transition-transform duration-300">paid more</span>
              </h1>

              <p className="text-text-body text-base lg:text-lg leading-relaxed max-w-2xl animate-slideInRight" style={{ animationDelay: '0.1s' }}>
                Tell us who you are and what you want — we'll show you the shortest path to level up your skills, increase your value, and command the salary you deserve.
              </p>

              {/* Interactive Dropdowns */}
              <div className="space-y-4 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                {/* First Row - Role and Experience side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label className="text-text-header text-sm font-medium block">I'm a</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-text-header text-base outline-none cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.01] appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25rem',
                      }}
                    >
                      <option value="" disabled>Select role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Selection */}
                  <div className="space-y-2">
                    <label className="text-text-header text-sm font-medium block">With</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-text-header text-base outline-none cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.01] appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25rem',
                      }}
                    >
                      <option value="" disabled>Years of experience</option>
                      {experiences.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Second Row - Goal full width */}
                <div className="space-y-2">
                  <label className="text-text-header text-sm font-medium block">I want to</label>
                  <select
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-text-header text-base outline-none cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.01] appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25rem',
                    }}
                  >
                    <option value="" disabled>Select your goal</option>
                    {goals.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={getProgramLink()}
                className="inline-flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-base hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 animate-slideInUp group"
                style={{ animationDelay: '0.3s' }}
              >
                Show my path
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Stats */}
              <div className="flex items-start gap-6 lg:gap-8 pt-2 animate-slideInUp flex-wrap" style={{ animationDelay: '0.4s' }}>
                <div className="group cursor-default">
                  <p className="text-3xl lg:text-4xl font-bold text-text-header transition-all duration-300 group-hover:text-primary group-hover:scale-110">3000+</p>
                  <p className="text-text-body text-sm mt-0.5">Designers Consulted</p>
                </div>

                <div className="w-px h-16 bg-gray-300 hidden sm:block"></div>

                <div className="group cursor-default">
                  <p className="text-3xl lg:text-4xl font-bold text-text-header transition-all duration-300 group-hover:text-primary group-hover:scale-110">8.9/10</p>
                  <p className="text-text-body text-sm mt-0.5">Average satisfaction</p>
                </div>

                <div className="w-px h-16 bg-gray-300 hidden sm:block"></div>

                <div className="group cursor-default">
                  <p className="text-3xl lg:text-4xl font-bold text-text-header transition-all duration-300 group-hover:text-primary group-hover:scale-110">94%</p>
                  <p className="text-text-body text-sm mt-0.5">Achieved primary goal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
