'use client'

import { useEffect, useRef, useState } from 'react'

export default function BrokenSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeWordIndex, setActiveWordIndex] = useState(-1)

  const sentences = [
    "Designers are being sold \"AI empowerment\" while still struggling with core design abilities - or the other way around.",
    "It's like going out for a pizza and being convinced to buy a dosa.",
    "Sure, it's tasty for a minute, but that's not what you came for.",
    "You just got sold the wrong thing.",
    "So we end up with half-baked courses that parade Figma shortcuts, random \"design thinking\" templates, or AI gimmicks - all noise, no depth.",
    "They teach what's easy to sell, not what actually builds capability.",
    "We've met designers from every kind of background -",
    "HFI, UXmint, NID, NIFT",
    "Random design bootcamps",
    "agencies",
    "all with the same story: a certificate, hundreds of hours spent on learning and zero transformation.",
    "We're not here to add to that pile. You've probably guessed that by now."
  ]

  // Split all sentences into words while keeping track of which sentence each word belongs to
  const wordsWithSentenceIndex: { word: string; sentenceIndex: number }[] = []
  sentences.forEach((sentence, sentenceIndex) => {
    const words = sentence.split(' ')
    words.forEach(word => {
      wordsWithSentenceIndex.push({ word, sentenceIndex })
    })
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate when section is in the middle third of viewport
      const sectionMiddle = rect.top + rect.height / 2
      const viewportMiddle = windowHeight / 2

      // Progress based on section position relative to viewport center
      const offset = viewportMiddle - sectionMiddle
      const range = windowHeight * 1.6 // Slower scroll effect

      const scrollProgress = Math.max(0, Math.min(1, (offset + range / 2) / range))

      const totalWords = wordsWithSentenceIndex.length
      const newIndex = Math.floor(scrollProgress * totalWords)

      setActiveWordIndex(Math.min(newIndex, totalWords - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [wordsWithSentenceIndex.length])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-900 py-16 lg:py-24 overflow-hidden"
    >
      {/* Spotlight Effect from Top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            What's really broken...
          </h2>

          <div className="space-y-8 text-2xl sm:text-3xl lg:text-4xl text-left">
                {sentences.map((sentence, sentenceIndex) => {
                  const sentenceWords = sentence.split(' ')
                  let wordIndexOffset = 0

                  // Calculate the starting index for this sentence
                  for (let i = 0; i < sentenceIndex; i++) {
                    wordIndexOffset += sentences[i].split(' ').length
                  }

                  return (
                    <p key={sentenceIndex} className="leading-relaxed">
                      {sentenceWords.map((word, wordIdx) => {
                        const globalWordIndex = wordIndexOffset + wordIdx
                        return (
                          <span
                            key={wordIdx}
                            className={`transition-all duration-300 ease-out ${
                              globalWordIndex <= activeWordIndex
                                ? 'text-primary font-medium'
                                : 'text-gray-400 opacity-40'
                            }`}
                          >
                            {word}{' '}
                          </span>
                        )
                      })}
                    </p>
                  )
                })}
              </div>
            </div>
      </div>
    </section>
  )
}
