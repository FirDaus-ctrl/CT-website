import Link from "next/link"
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Top header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-36 h-auto flex items-center justify-center">
              <Image
                src="https://conceptstech.com.bn/wp-content/uploads/2024/05/CT-Logo2020RESIzE4-150x75.png"
                alt="Concepts Technologies Logo"
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input type="search" placeholder="Search for products..." className="pl-4 pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t py-2">
          <div className="flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Menu className="h-4 w-4 mr-2" />
                  SOLUTIONS
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>IT Infrastructure</DropdownMenuItem>
                <DropdownMenuItem>Cloud Solutions</DropdownMenuItem>
                <DropdownMenuItem>Cybersecurity</DropdownMenuItem>
                <DropdownMenuItem>Software Development</DropdownMenuItem>
                <DropdownMenuItem>Networking</DropdownMenuItem>
                <DropdownMenuItem>Hardware Solutions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                SERVICES
              </Link>
              <Link href="/partners" className="text-blue-600 hover:text-blue-700 font-medium">
                PARTNERS
              </Link>
              <Link href="/support" className="text-blue-600 hover:text-blue-700 font-medium">
                SUPPORT
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                ABOUT US
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
