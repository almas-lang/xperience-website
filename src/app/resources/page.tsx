'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogs, categories } from '@/data/blogs'

type TabType = 'blogs' | 'design-tools'

export default function Resources() {
  const [activeTab, setActiveTab] = useState<TabType>('blogs')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory)

  const tabs = [
    { id: 'blogs' as TabType, name: 'Blogs', icon: '📝' },
    { id: 'design-tools' as TabType, name: 'Design tools', icon: '🛠️' },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-text-header text-white'
                    : 'bg-gray-100 text-text-header hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      {activeTab === 'blogs' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-body hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-text-body hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/resources/blogs/${blog.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Blog Image */}
                  <div className="w-full h-64 relative">
                    <img
                      src={blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-text-header text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-text-body text-sm mb-2">
                      <span>
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-header mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-text-body mb-4 line-clamp-2">{blog.excerpt}</p>
                    <span className="text-primary font-semibold hover:text-opacity-80 transition-colors inline-flex items-center gap-2">
                      Read More
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Tools Tab Content */}
      {activeTab === 'design-tools' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
            <p className="text-center text-text-body text-lg mb-12">
              Practical frameworks and calculators to elevate your design practice.
            </p>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Design Impact Calculator */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-text-header mb-3">
                  Design Impact Calculator
                </h3>
                <p className="text-text-body mb-4">
                  Translate your design work into business metrics that stakeholders care about.
                </p>
                <Link
                  href="/resources/tools/impact-calculator"
                  className="text-primary font-semibold hover:text-opacity-80 transition-colors inline-flex items-center gap-2"
                >
                  Try Tool
                  <span>→</span>
                </Link>
              </div>

              {/* Portfolio Case Study Generator */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-text-header mb-3">
                  Portfolio Case Study Generator
                </h3>
                <p className="text-text-body mb-4">
                  Structure your projects using our proven case study framework.
                </p>
                <Link
                  href="/resources/tools/case-study-generator"
                  className="text-primary font-semibold hover:text-opacity-80 transition-colors inline-flex items-center gap-2"
                >
                  Try Tool
                  <span>→</span>
                </Link>
              </div>

              {/* Salary Negotiation Toolkit */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-text-header mb-3">
                  Salary Negotiation Toolkit
                </h3>
                <p className="text-text-body mb-4">
                  Know your worth. Get the compensation you deserve.
                </p>
                <Link
                  href="/resources/tools/salary-toolkit"
                  className="text-primary font-semibold hover:text-opacity-80 transition-colors inline-flex items-center gap-2"
                >
                  Try Tool
                  <span>→</span>
                </Link>
              </div>

              {/* Design Critique Framework */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-text-header mb-3">
                  Design Critique Framework
                </h3>
                <p className="text-text-body mb-4">
                  Give and receive better feedback with structured critique methods.
                </p>
                <Link
                  href="/resources/tools/critique-framework"
                  className="text-primary font-semibold hover:text-opacity-80 transition-colors inline-flex items-center gap-2"
                >
                  Try Tool
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Coming Soon Message */}
            <p className="text-center text-text-body text-sm">
              Coming Soon: More tools to help you quantify and communicate design value
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-header mb-4">
            Want More Than Just Resources?
          </h2>
          <p className="text-lg text-text-body mb-8">
            Get personalized 1:1 coaching and transform your design career with our programmes.
          </p>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
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
