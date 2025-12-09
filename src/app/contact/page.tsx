import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Xperience Wave',
  description: 'Get in touch with Xperience Wave. We\'re here to help with your design career questions.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="text-base text-text-body leading-relaxed max-w-3xl mx-auto">
              Great things start with a simple hello. Share your questions, ideas, or challenges, and we'll turn them into solutions that matter. From India to the world, we're ready to listen, collaborate, and create something remarkable together.
            </p>
          </div>

          <ContactForm />

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Email */}
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold text-text-header mb-1">Email Us</h3>
              <a href="mailto:hello@xperiencewave.com" className="text-text-body text-sm hover:text-primary transition-colors">
                hello@xperiencewave.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold text-text-header mb-1">Call Us</h3>
              <a href="tel:08041325804" className="text-text-body text-sm hover:text-primary transition-colors font-medium">
                080 4132 5804
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold text-text-header mb-1">Visit Us</h3>
              <p className="text-text-body text-xs leading-relaxed">
                328, 6th Main, AECS layout, B block, Singasandra, Bangalore 560068
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
