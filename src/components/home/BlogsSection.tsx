import { blogs } from '@/data/blogs'
import Link from 'next/link'

export default function BlogsSection() {
  // Get the 3 most recent blogs
  const recentBlogs = blogs.slice(0, 3)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header">
            Wave Blogs
          </h2>
          <a
            href="/resources"
            className="text-text-body hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:border-primary"
          >
            See all Wave Blogs
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/resources/blogs/${blog.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 block group"
            >
              {/* Blog Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-sm font-medium bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-text-body text-sm">{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-text-header mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {blog.title}
                </h3>

                <p className="text-text-body text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
