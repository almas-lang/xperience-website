'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { openPositions } from '@/data/careers'

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-header mb-6">
            Join the Wave
          </h1>
          <p className="text-lg sm:text-xl text-text-body max-w-2xl mx-auto leading-relaxed">
            We're building the future of design education. If you're a practitioner who wants to elevate the next generation, we want you.
          </p>
        </div>
      </section>

      {/* Why Xperience Wave */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header text-center mb-12">
            Why Xperience Wave?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Work That Matters */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-header mb-3">Work That Matters</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Shape the future of design education in emerging markets.
              </p>
            </div>

            {/* Learn While Teaching */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-header mb-3">Learn While Teaching</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Continuous learning culture. We practice what we preach.
              </p>
            </div>

            {/* Flexible Work */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-header mb-3">Flexible Work</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Remote-first. Work from anywhere. Results over hours.
              </p>
            </div>

            {/* Competitive Pay */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-header mb-3">Competitive Pay</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Market-leading compensation + equity options for early team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Real mentorship */}
            <div>
              <h3 className="text-xl font-bold text-text-header mb-3">Real mentorship</h3>
              <p className="text-text-body leading-relaxed">
                We're practitioners first, educators second. We teach what we actually do.
              </p>
            </div>

            {/* Results, not mere certificates */}
            <div>
              <h3 className="text-xl font-bold text-text-header mb-3">Results, not mere certificates</h3>
              <p className="text-text-body leading-relaxed">
                We measure success by your growth, not your completion badge
              </p>
            </div>

            {/* Global standards */}
            <div>
              <h3 className="text-xl font-bold text-text-header mb-3">Global standards</h3>
              <p className="text-text-body leading-relaxed">
                We bring world-class learning experiences to emerging markets.
              </p>
            </div>

            {/* Courage to challenge */}
            <div>
              <h3 className="text-xl font-bold text-text-header mb-3">Courage to challenge</h3>
              <p className="text-text-body leading-relaxed">
                We don't replicate systems. We redesign them when they fail to serve people
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12">
            Open Positions
          </h2>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-header mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-text-body">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-xs font-medium">
                            {position.department}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-xl transition-all duration-200 font-semibold whitespace-nowrap">
                    Apply Now
                  </button>
                </div>

                <p className="text-text-body mb-4 leading-relaxed">
                  {position.description}
                </p>

                <div>
                  <p className="text-sm font-semibold text-text-header mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-sm text-text-body">
                        <span className="mt-1.5 flex-shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See a Perfect Fit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-text-header rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional people. If you think you'd be a great addition to the team, send us your portfolio and tell us why.
            </p>
            <button className="bg-accent hover:bg-opacity-90 text-white px-12 py-4 rounded-xl transition-all duration-200 font-semibold">
              Send General Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
