import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Enterprise Cloud Infrastructure",
    description: "Scalable cloud solutions for modern businesses",
    image: "/placeholder.svg?height=200&width=300&text=Cloud+Infrastructure",
    category: "Cloud Solutions",
    featured: true,
  },
  {
    id: 2,
    name: "Cybersecurity Suite",
    description: "Comprehensive security solutions for enterprise",
    image: "/placeholder.svg?height=200&width=300&text=Cybersecurity",
    category: "Security",
    featured: true,
  },
  {
    id: 3,
    name: "Network Infrastructure",
    description: "High-performance networking solutions",
    image: "/placeholder.svg?height=200&width=300&text=Network+Solutions",
    category: "Networking",
    featured: true,
  },
  {
    id: 4,
    name: "Custom Software Development",
    description: "Tailored software solutions for your business",
    image: "/placeholder.svg?height=200&width=300&text=Software+Development",
    category: "Development",
    featured: true,
  },
  {
    id: 5,
    name: "Data Analytics Platform",
    description: "Transform your data into actionable insights",
    image: "/placeholder.svg?height=200&width=300&text=Data+Analytics",
    category: "Analytics",
    featured: true,
  },
  {
    id: 6,
    name: "IT Consultation Services",
    description: "Expert guidance for your digital transformation",
    image: "/placeholder.svg?height=200&width=300&text=IT+Consultation",
    category: "Consultation",
    featured: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Solutions</h2>
          <p className="text-lg text-gray-600">Discover our comprehensive range of enterprise technology solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.featured && <Badge className="absolute top-3 left-3 bg-blue-600">Featured</Badge>}
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0 px-6 pb-6">
                <div className="flex gap-3 w-full">
                  <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href={`/solutions/${product.id}`}>Learn More</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Get Quote
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/solutions">View All Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
