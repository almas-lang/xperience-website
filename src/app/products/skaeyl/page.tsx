'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Skaeyl() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Skaeyl Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          {/* Coming Soon Banner */}
          <div className="bg-text-header text-white rounded-2xl p-12 text-center">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Skaeyl Coming Soon</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're building something amazing. Stay tuned for updates.
            </p>
            <button className="bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
