import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Microsoft",
    description: "Microsoft solutions for enterprise",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Microsoft.png",
    category: "Microsoft",
    featured: false,
  },
  {
    id: 2,
    name: "Manage Engine",
    description: "Comprehensive security solutions for enterprise",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/ManageEngine.png",
    category: "Security",
    featured: true,
  },
  {
    id: 3,
    name: "Acer",
    description: "Acer",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Acer1.png",
    category: "Networking",
    featured: true,
  },
  {
    id: 4,
    name: "D-Link",
    description: "D-Link networking solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/D-Link.png",
    category: "Development",
    featured: true,
  },
  {
    id: 5,
    name: "Adobe",
    description: "Adobe",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Adobe.png",
    category: "Adobe",
    featured: true,
  },
  {
    id: 6,
    name: "Aver",
    description: "Aver",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Aver.png",
    category: "Aver",
    featured: true,
  },
  {
    id: 7,
    name: "APC",
    description: "APC power solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/APC-1.png",
    category: "APC",
    featured: true,
  },
  {
    id: 8,
    name: "Kaspersky",
    description: "Kaspersky",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Kaspersky.png",
    category: "Kaspersky",
    featured: true,
  },
  {
    id: 9,
    name: "Epson",
    description: "Epson printing solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Epson1.png",
    category: "Epson",
    featured: true,
  },
  {
    id: 10,
    name: "Brother",
    description: "Brother printing solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Brother.png",
    category: "Brother",
    featured: true,
  },
  {
    id: 11,
    name: "Trend Micro",
    description: "Trend Micro cybersecurity solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/Trend-Micro.png",
    category: "Trend Micro",
    featured: true,
  },
  {
    id: 12,
    name: "SAP",
    description: "SAP enterprise solutions",
    image: "https://conceptstech.com.bn/wp-content/uploads/2024/06/SAP.png",
    category: "SAP",
    featured: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">Discover our Partners and their solutions</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
