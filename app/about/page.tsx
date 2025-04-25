import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation - Reused from homepage */}
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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                    Our Services
                  </Button>
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
                experiences. Over the years, we've evolved into a full-service creative agency, helping businesses of all
                sizes transform their digital presence and connect with their audiences in authentic ways.
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
                  A diverse group of strategists, designers, developers, and marketers united by a passion for creativity
                  and a commitment to excellence in everything we do.
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

        {/* Timeline Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Our Journey</h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

                {/* Timeline items */}
                <div className="relative z-10">
                  <div className="mb-16 flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-bold mb-2 text-slate-800">2013</h3>
                      <p className="text-slate-600">Founded as a small design studio with just 3 team members</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  <div className="mb-16 flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-bold mb-2 text-slate-800">2015</h3>
                      <p className="text-slate-600">Expanded services to include digital marketing and web development</p>
                    </div>
                  </div>

                  <div className="mb-16 flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-bold mb-2 text-slate-800">2018</h3>
                      <p className="text-slate-600">Opened our second office and grew to a team of 25 creative professionals</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  <div className="mb-16 flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-bold mb-2 text-slate-800">2020</h3>
                      <p className="text-slate-600">Launched our digital transformation division to help businesses adapt to changing markets</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-bold mb-2 text-slate-800">Today</h3>
                      <p className="text-slate-600">A team of 50+ creative professionals serving clients worldwide</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Meet Our Leadership Team</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The creative minds behind Zoolyum's success. Our leadership team brings decades of combined experience in
                design, marketing, and business strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
                  <div className="h-64 bg-slate-200 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Jane Smith</h3>
                    <p className="text-orange-500 font-medium mb-3">Creative Director</p>
                    <p className="text-slate-600 text-sm mb-4">
                      With over 15 years of experience in branding and design, Jane leads our creative team with vision
                      and passion.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-slate-400 hover:text-orange-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-orange-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-orange-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">View Full Team</Button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Core Values</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                These principles guide everything we do at Zoolyum, from how we work with clients to how we collaborate
                as a team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Excellence</h3>
                <p className="text-slate-600">
                  We strive for excellence in everything we do, from the smallest details to the biggest ideas. Quality
                  is never compromised.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Innovation</h3>
                <p className="text-slate-600">
                  We embrace change and constantly seek new ways to solve problems. Innovation is at the heart of our
                  creative process.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8L22 12L18 16M6 16L2 12L6 8M12 2L14.5 20.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Collaboration</h3>
                <p className="text-slate-600">
                  We believe in the power of teamwork and partnership. The best results come from working together with
                  our clients and each other.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Integrity</h3>
                <p className="text-slate-600">
                  We operate with honesty, transparency, and ethical standards in all our interactions. Trust is the
                  foundation of our relationships.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Adaptability</h3>
                <p className="text-slate-600">
                  We embrace change and remain flexible in our approach. The ability to adapt quickly is essential in
                  today's fast-paced digital landscape.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Client Focus</h3>
                <p className="text-slate-600">
                  Our clients' success is our success. We are committed to understanding their needs and delivering
                  solutions that exceed expectations.
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

      {/* Footer - Reused from homepage */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="container mx-auto">
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
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.\
