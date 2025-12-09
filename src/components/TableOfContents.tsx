'use client'

import { useState, useEffect } from 'react'
import { TableOfContentsItem } from '@/data/blogs'

interface TableOfContentsProps {
  items: TableOfContentsItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="sticky top-24 bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-text-header mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className={item.level === 'subheading' ? 'ml-4' : ''}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left w-full py-1 text-sm transition-colors duration-200 hover:text-primary ${
                  activeId === item.id
                    ? 'text-primary font-semibold'
                    : 'text-text-body'
                } ${item.level === 'heading' ? 'font-medium' : ''}`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
