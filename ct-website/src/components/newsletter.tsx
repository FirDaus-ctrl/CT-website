import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Technology Trends</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights, product updates, and industry news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your business email" className="bg-white" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
