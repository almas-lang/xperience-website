import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Products - Xperience Wave',
  description: 'Discover our products and tools designed for design professionals.',
}

export default function Products() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-header mb-6">
            Products
          </h1>
          <p className="text-lg text-text-body">
            Content coming soon. Please share the wireframe/design for this page.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
