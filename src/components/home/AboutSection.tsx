'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="bg-black rounded-full p-2 flex items-center justify-center w-16 h-16">
              <Image
                src="/assets/logo_letter.png"
                alt="Xperience Wave"
                width={48}
                height={48}
                className="w-12 h-auto brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Text */}
          <p className="text-text-body text-lg">
            Xperience Wave is transforming how education should be imparted to an AI powered generation.
          </p>
        </div>

        {/* Team Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8">
          <div className="w-full aspect-video bg-gray-200 relative">
            <img
              src="/assets/team.jpeg"
              alt="Xperience Wave Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-block bg-accent hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  )
}
