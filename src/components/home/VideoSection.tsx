'use client'

export default function VideoSection() {
  const handlePlayClick = () => {
    window.open('https://ld.xperiencewave.com', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Watch the breakdown in this 30 min video</span>
          </h2>
          <p className="text-text-body text-lg max-w-3xl mx-auto">
            Real talk: what's keeping good designers stuck - and how to move up without more "tools" or fluff.
          </p>
        </div>

        {/* Video Container */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 cursor-pointer group"
          onClick={handlePlayClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handlePlayClick()
            }
          }}
        >
          <div className="aspect-video bg-gray-200 relative">
            {/* Video Thumbnail */}
            <img
              src="/assets/home_thumb.png"
              alt="Watch the breakdown video"
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
            {/* Play Button - Non-interactive, just visual */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-primary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Video Topics */}
        <div className="text-center text-text-body text-sm sm:text-base mb-8">
          Why "more screens" ≠ growth  |  The gap: execution → influence → leadership  |  What signals value to hiring managers
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg"
          >
            Book free personal consultation
          </a>
        </div>
      </div>
    </section>
  )
}
