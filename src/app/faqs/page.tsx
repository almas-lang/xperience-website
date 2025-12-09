'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

type FAQCategory = 'general' | 'ripple' | 'current' | 'tide' | 'surge'

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('general')

  const faqCategories = [
    { id: 'general' as FAQCategory, name: 'General' },
    { id: 'ripple' as FAQCategory, name: 'Ripple' },
    { id: 'current' as FAQCategory, name: 'Current' },
    { id: 'tide' as FAQCategory, name: 'Tide' },
    { id: 'surge' as FAQCategory, name: 'Surge' },
  ]

  const faqs = {
    general: [
      {
        question: 'Can I do this while working full-time?',
        answer: 'Yes, our programs are designed to be flexible and work around your schedule. Most of our students are working full-time while going through the program.',
      },
      {
        question: "What if I don't have a design degree",
        answer: "You don't need a design degree to join our programs. We've helped designers from various backgrounds - engineering, business, self-taught - successfully transition into design roles.",
      },
      {
        question: 'How long does the program take?',
        answer: 'Program duration varies based on your goals and starting point. Typically ranges from 3-6 months for most students.',
      },
      {
        question: 'What kind of support do I get?',
        answer: 'You get 1-on-1 mentoring sessions, portfolio reviews, interview preparation, and access to our community of designers and alumni.',
      },
    ],
    ripple: [
      {
        question: 'Can I do this while working full-time?',
        answer: 'Yes, Ripple is designed to be flexible and work around your full-time schedule. Most of our students successfully complete the program while working.',
      },
      {
        question: "What if I'm switching from another role (marketing, sales, dev)?",
        answer: "We welcome career switchers! Our program is designed to help you transition into design from any background. We'll help you build the necessary skills and portfolio from scratch.",
      },
      {
        question: 'Will I get a portfolio by the end?',
        answer: 'Yes, you will build a comprehensive portfolio with real projects that demonstrate your design thinking, process, and outcomes. This portfolio will be ready for job applications.',
      },
      {
        question: 'Is there job support?',
        answer: 'Yes, we provide comprehensive job support including resume reviews, LinkedIn optimization, interview preparation, and access to our hiring network.',
      },
      {
        question: 'What if I finish but still need help?',
        answer: "If you complete the mandatory activities and show up the way we ask, we'll keep supporting you until you hit your goals. Your success is our success.",
      },
      {
        question: 'Do you issue certificates?',
        answer: 'We focus on building real skills and portfolios that speak for themselves. While we provide completion certificates, your portfolio and work evidence will be your true credential.',
      },
    ],
    current: [
      {
        question: 'Can I do this while working full-time?',
        answer: 'Yes, Current is designed for working professionals. The program is structured to fit around your schedule while delivering transformational results.',
      },
      {
        question: 'Will this help me become a design lead or AVP?',
        answer: 'Absolutely! Current focuses on developing the strategic thinking, business acumen, and leadership skills needed to move into senior design roles like Design Lead, Principal, or AVP.',
      },
      {
        question: 'Do I need to know AI or system thinking before this?',
        answer: "No prior knowledge of AI or systems thinking is required. We'll teach you these skills as part of the program, helping you become an AI-powered design strategist.",
      },
      {
        question: 'Will you help me with real projects?',
        answer: "Yes, we use a Done With You (DWY) approach where you'll work on real projects with our guidance. You'll build systems, solve ambiguous problems, and create work that demonstrates strategic thinking.",
      },
      {
        question: 'What if I finish the 3 months and still need help?',
        answer: "If you complete the mandatory activities and show up consistently, we'll continue supporting you until you achieve your goals. We're invested in your long-term success.",
      },
      {
        question: 'Do you issue certificates?',
        answer: 'Yes, but more importantly, you will build a body of work and evidence that demonstrates your strategic capabilities - which matters more than any certificate.',
      },
    ],
    tide: [
      {
        question: 'Can I do this while working full-time?',
        answer: 'Yes, Tide is designed for senior professionals who are working. The program structure respects your time while delivering executive-level transformation.',
      },
      {
        question: 'Will this help me become a design head or AVP?',
        answer: 'Yes, Tide specifically prepares you for executive design roles including Design Director, VP of Design, and similar leadership positions. We focus on strategic influence, team leadership, and organizational impact.',
      },
      {
        question: 'Will I get guidance for remote management and negotiation?',
        answer: 'Absolutely! Relational Mastery covers stakeholder management, team building, remote collaboration, and negotiation skills essential for design leadership.',
      },
      {
        question: "What if I finish but don't reach my leadership goal?",
        answer: "If you complete the mandatory activities and engage as we guide, we'll continue working with you until you achieve your leadership goals. We're committed to your success.",
      },
      {
        question: 'Do I need to know AI and systems before joining?',
        answer: "While some familiarity helps, it's not required. We'll build on your existing knowledge and help you master AI integration, systems thinking, and strategic design at an executive level.",
      },
      {
        question: 'Do you issue certificates?',
        answer: "We provide certificates, but your real credential will be the systems you've built, the teams you've led, and the organizational impact you've created - evidence that speaks louder than any certificate.",
      },
    ],
    surge: [
      {
        question: 'Is this a Done For You service?',
        answer: 'Yes, Surge is a complete Done For You design partnership. We become your extended design team, handling strategy, execution, and delivery while you focus on your business.',
      },
      {
        question: 'Can you align with our internal tech and marketing teams?',
        answer: 'Absolutely! We integrate seamlessly with your existing teams, establishing clear communication channels, workflows, and collaboration processes. We work as an extension of your organization.',
      },
      {
        question: 'Do you handle both UX, UI and development?',
        answer: 'We handle comprehensive UX and UI design, including research, strategy, and design systems. For development, we can coordinate with your tech team or recommend trusted partners.',
      },
      {
        question: 'What if my project evolves mid-way?',
        answer: "We're built for adaptability. Our team adjusts to changing requirements, new priorities, and evolving business needs. We maintain regular strategic check-ins to ensure alignment.",
      },
      {
        question: 'Can we retain you monthly?',
        answer: 'Yes, we offer flexible engagement models including monthly retainers. This gives you ongoing design capacity without the overhead of building an in-house team.',
      },
    ],
  }

  const toggleFAQ = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <div className="mb-8 hidden">
            <span className="text-6xl">❓</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-header mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-text-body">
            Find answers to common questions about our programmes and services
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-text-body hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="space-y-4">
            {faqs[activeCategory].map((faq, index) => {
              const key = `${activeCategory}-${index}`
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(activeCategory, index)}
                    className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-text-header pr-8">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                        openIndex === key ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openIndex === key && (
                    <div className="px-6 pb-6 text-text-body leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Book a free strategy call to discuss your specific needs
          </p>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Book a strategy call
          </a>
        </div>
      </section>

      <Footer />

      {/* FAQ Schema.org JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: Object.values(faqs).flat().map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
