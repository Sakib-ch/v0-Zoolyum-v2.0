import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Zoolyum Logo" width={120} height={30} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-orange-500">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium">
            Services
          </Link>
          <Link href="/work" className="text-sm font-medium">
            Our Work
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                  We Are <span className="text-orange-500">Zoolyum</span>
                </h1>
                <p className="text-slate-600 mb-8 text-lg">
                  A creative agency dedicated to transforming brands through strategic design and innovative marketing
                  solutions. We believe in the power of creativity to solve business challenges and drive meaningful
                  results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Our Services</Button>
                  <Button variant="outline" className="rounded-full border-slate-300 text-slate-700">
                    Meet Our Team
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Creative team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Story</h2>
              <p className="text-slate-600 text-lg">
                Founded in 2013, Zoolyum began as a small design studio with a passion for creating meaningful brand
                experiences. Over the years, we've evolved into a full-service creative agency, helping businesses of
                all sizes transform their digital presence and connect with their audiences in authentic ways.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Our Mission</h3>
                <p className="text-slate-600">
                  To empower businesses with creative solutions that drive growth, build brand loyalty, and create
                  meaningful connections with their audiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Our Team</h3>
                <p className="text-slate-600">
                  A diverse group of strategists, designers, developers, and marketers united by a passion for
                  creativity and a commitment to excellence in everything we do.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Our Approach</h3>
                <p className="text-slate-600">
                  We combine strategic thinking with creative execution, focusing on measurable results that help our
                  clients achieve their business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Let's work together to create something amazing. Our team is ready to help you achieve your business goals
              through creative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-orange-500 hover:bg-slate-100 rounded-full">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo-white.svg" alt="Zoolyum Logo" width={120} height={30} className="mb-4" />
              <p className="text-slate-400 text-sm mb-4">
                We're a creative agency focused on helping brands grow through strategic marketing and design.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Branding & Identity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Web Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400 text-center">
            <p>© {new Date().getFullYear()} Zoolyum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
