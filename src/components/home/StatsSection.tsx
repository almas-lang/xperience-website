export default function StatsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Stats Row */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Main Stat */}
            <div className="col-span-2 lg:col-span-1">
              <p className="text-text-header text-lg font-medium">
                We've worked with 3000+ designers already
              </p>
            </div>

            {/* Metric 1 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                8.9/10
              </div>
              <div className="text-text-body text-sm">Average satisfaction</div>
            </div>

            {/* Metric 2 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                +12%
              </div>
              <div className="text-text-body text-sm">NPS YOY</div>
            </div>

            {/* Metric 3 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                68%
              </div>
              <div className="text-text-body text-sm">Achieved primary goal</div>
            </div>
          </div>
        </div>

        {/* Team Video */}
        <div className="mt-12">
          <div className="w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            <video
              src="/assets/reviews/Pavi_Suji.mov"
              poster="/assets/reviews/pavitra.png"
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Below Video */}
          <div className="text-center mt-8">
            <a
              href="/about"
              className="inline-block text-accent hover:text-opacity-80 font-semibold text-lg transition-colors duration-200"
            >
              See all testimonials →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
