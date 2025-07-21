import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <div className="text-lg font-bold">CONCEPTS</div>
                <div className="text-xs text-gray-400">TECHNOLOGIES</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Concepts Technologies strives to be one of the role models of excellence in the Information Technology
              industry in Brunei Darussalam.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Brunei Darussalam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+673 XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">info@conceptstech.com.bn</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/cloud" className="text-gray-300 hover:text-white text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/solutions/security" className="text-gray-300 hover:text-white text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/solutions/networking" className="text-gray-300 hover:text-white text-sm">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/solutions/development" className="text-gray-300 hover:text-white text-sm">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/solutions/analytics" className="text-gray-300 hover:text-white text-sm">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/consultation" className="text-gray-300 hover:text-white text-sm">
                  IT Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/implementation" className="text-gray-300 hover:text-white text-sm">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="text-gray-300 hover:text-white text-sm">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-gray-300 hover:text-white text-sm">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-white text-sm">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Copyright © 2024 Concepts Technologies. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
