import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Technology Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Concepts Technologies is a leading IT company in Brunei Darussalam, providing cutting-edge technology
              solutions to help businesses excel in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Explore Solutions</Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Professional+Team"
                alt="Professional Team"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Modern+Office"
                alt="Modern Office"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
