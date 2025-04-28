import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="opacity-80">
              Making financial transactions simpler, faster, and more secure for
              everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/vtu"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  VTU Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products/transfers"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Money Transfers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bills"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Bill Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/products/loans"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Quick Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/products/investments"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition"
                >
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="opacity-80 mb-4">
              Subscribe to get updates on new features and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="opacity-80 hover:opacity-100 text-sm transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="opacity-80 hover:opacity-100 text-sm transition"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="opacity-80 hover:opacity-100 text-sm transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
