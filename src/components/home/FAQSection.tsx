"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I do this while working full-time?",
      answer:
        "Yes, our programs are designed to be flexible and work around your schedule. Most of our students are working full-time while going through the program.",
    },
    {
      question: "What if I don't have a design degree",
      answer:
        "You don't need a design degree to join our programs. We've helped designers from various backgrounds - engineering, business, self-taught - successfully transition into design roles.",
    },
    {
      question: "How long does the program take?",
      answer:
        "Program duration varies based on your goals and starting point. Typically ranges from 3-6 months for most students.",
    },
    {
      question: "What kind of support do I get?",
      answer:
        "You get 1-on-1 mentoring sessions, portfolio reviews, interview preparation, and access to our community of designers and alumni.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Decorative Question Mark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <Image
            src="/assets/question.png" // ← adjust filename
            alt="FAQ decoration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-header text-center mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-8 py-6 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-text-header pr-8">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 text-text-body leading-relaxed animate-slideInUp">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See All FAQs Link */}
        <div className="text-center mt-12">
          <a
            href="/faqs"
            className="inline-block text-accent hover:text-opacity-80 font-semibold text-lg transition-colors duration-200"
          >
            See all FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}
