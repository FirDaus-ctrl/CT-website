import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Technology Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age. From cloud
            infrastructure to cybersecurity, we provide the tools and expertise your organization needs.
          </p>
        </div>
      </div>
      <FeaturedProducts />
      <Footer />
    </div>
  )
}
