export default function DesignerTypesBanner() {
  const designerTypes = [
    'Inspiring Designer',
    'UX Designer',
    'UI Designer',
    'Product Designer',
    'Visual Designer',
  ]

  return (
    <section className="bg-primary py-12">
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
        <h3 className="text-white text-center text-xl sm:text-2xl font-medium mb-8">
          Not everyone's ready for this, but if you are - we'll take you all the way.
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {designerTypes.map((type) => (
            <div
              key={type}
              className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md"
            >
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-text-header font-medium whitespace-nowrap">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
