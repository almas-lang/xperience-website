'use client'

import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TableOfContents from '@/components/TableOfContents'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogById, blogs, generateTableOfContents, BlogSection } from '@/data/blogs'

export default function BlogPost() {
  const params = useParams()
  const blog = getBlogById(params.id as string)

  if (!blog) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
            <h1 className="text-4xl font-bold text-text-header mb-6">
              Blog Not Found
            </h1>
            <p className="text-lg text-text-body mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-opacity-90 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              ← Back to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const tableOfContents = generateTableOfContents(blog.sections)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3)

  const renderSection = (section: BlogSection, index: number) => {
    const sectionId = `section-${index}`

    switch (section.type) {
      case 'heading':
        return (
          <h2
            id={sectionId}
            key={index}
            className="text-3xl font-bold text-text-header mb-6 mt-12 scroll-mt-24"
          >
            {section.content}
          </h2>
        )
      case 'subheading':
        return (
          <h3
            id={sectionId}
            key={index}
            className="text-2xl font-semibold text-text-header mb-4 mt-8 scroll-mt-24"
          >
            {section.content}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="text-text-body text-lg leading-relaxed mb-6">
            {section.content}
          </p>
        )
      case 'image':
        return (
          <div key={index} className="my-8 rounded-xl overflow-hidden">
            <Image
              src={section.imageUrl || ''}
              alt={section.imageAlt || ''}
              width={800}
              height={500}
              className="w-full h-auto"
            />
            {section.imageAlt && (
              <p className="text-center text-sm text-gray-500 mt-2 italic">
                {section.imageAlt}
              </p>
            )}
          </div>
        )
      case 'list':
        return (
          <ul key={index} className="list-disc list-outside text-text-body text-lg leading-relaxed mb-6 space-y-3 ml-6">
            {section.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="pl-2">
                {item}
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/resources"
              className="text-primary hover:text-opacity-80 font-medium inline-flex items-center gap-2 text-sm"
            >
              ← Back to Blogs
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-purple-50 rounded-full mb-4">
                {blog.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-text-header mb-4 leading-tight">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-text-body mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <span className="font-medium">{blog.author}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-gray-300">•</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog.image && (
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg mt-8">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Blog Content with Sidebar */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-xl text-text-body leading-relaxed font-medium border-l-4 border-primary pl-6 py-2">
                  {blog.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="prose prose-lg max-w-none">
                {blog.sections.map((section, index) => renderSection(section, index))}
              </div>
            </div>

            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="hidden lg:block">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Author Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-header mb-2">
                  Written by {blog.author}
                </h3>
                <p className="text-text-body leading-relaxed">
                  Sharing insights on design, business impact, and career growth to help you navigate your professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
            <h2 className="text-3xl font-bold text-text-header mb-8">
              More in {blog.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/resources/blogs/${relatedBlog.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative h-[180px] overflow-hidden bg-gray-100">
                    <Image
                      src={relatedBlog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-text-header mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-text-body">
                      <span>
                        {new Date(relatedBlog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want Personalized Guidance?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join our programmes and get 1:1 coaching from industry experts who've been where you want to go.
          </p>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg"
          >
            Explore Programmes
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
