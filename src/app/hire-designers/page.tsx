'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { designers } from '@/data/designers'
import HiringRequestModal from '@/components/HiringRequestModal'

export default function HireDesigners() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 lg:pt-12 lg:pb-0 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-lg sm:text-xl text-text-body max-w-3xl mx-auto leading-relaxed mb-8">
            Access our network of trained, vetted designers ready to drive impact in your organization.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold"
          >
            Submit Hiring Request
          </button>
        </div>
      </section>

      {/* Why Hire From Xperience Wave */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-3xl border border-gray-200 p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-header text-center mb-16">
              Why Hire From Xperience Wave?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Trained for Impact */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-header mb-4">Trained for Impact</h3>
                <p className="text-text-body leading-relaxed">
                  All designers have completed our rigorous programs focused on business outcomes.
                </p>
              </div>

              {/* Vetted & Certified */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-header mb-4">Vetted & Certified</h3>
                <p className="text-text-body leading-relaxed">
                  Every designer is personally mentored and certified by our team.
                </p>
              </div>

              {/* Ready to Contribute */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-header mb-4">Ready to Contribute</h3>
                <p className="text-text-body leading-relaxed">
                  Hit the ground running with designers who understand strategy, not just craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Designers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12">
            Available Designers
          </h2>
          {/* <p className="text-text-body mb-12">All profiles are from Bangalore, India</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designers.map((designer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Designer Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-text-header mb-1">
                      {designer.name}
                    </h3>
                    <p className="text-sm text-text-body mb-2">{designer.role}</p>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-text-header">{designer.rating}</span>
                    </div>
                  </div>
                  {designer.linkedin && (
                    <a
                      href={designer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200"
                      aria-label={`View ${designer.name}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Designer Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-body">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{designer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-body">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{designer.location}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-text-header">
                    {designer.type}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-text-header mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {designer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs text-text-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {designer.linkedin ? (
                  <a
                    href={designer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white px-4 py-3 rounded-xl transition-all duration-200 font-semibold block text-center"
                  >
                    View Profile
                  </a>
                ) : (
                  <button className="w-full border-2 border-gray-300 text-gray-400 px-4 py-3 rounded-xl cursor-not-allowed font-semibold">
                    Profile Unavailable
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find the Right Fit */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="bg-text-header rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Can't Find the Right Fit?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Tell us your requirements and we'll match you with designers from our network or train someone specifically for your needs.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-white px-12 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-200 font-semibold w-full max-w-4xl"
            >
              Submit Custom Request
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Hiring Request Modal */}
      <HiringRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
