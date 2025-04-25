import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ChevronRight } from "lucide-react"

export default function Home() {
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
          <Link href="/about" className="text-sm font-medium">
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
        <section className="container mx-auto py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-500 text-sm font-medium mb-3">CREATIVE AGENCY</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Transform Your Brand <br />
              with <span className="text-orange-500">Zoolyum</span>
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We craft compelling brand experiences that captivate audiences and drive results. Our team of experts
              combines creativity with strategic thinking to help your business stand out in today's competitive
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Get Started</Button>
              <Button variant="outline" className="rounded-full border-slate-300 text-slate-700">
                How We Work
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500">150+</div>
            <div className="text-sm text-slate-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">200+</div>
            <div className="text-sm text-slate-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">10+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">15+</div>
            <div className="text-sm text-slate-600">Industry Awards</div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Transform Your Brand With Our Services</h2>
          <p className="text-center text-slate-600 mb-12">Find the perfect solution for your business needs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-orange-500"
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
              <h3 className="text-lg font-semibold mb-3 text-slate-800">Branding & Identity</h3>
              <p className="text-sm text-slate-600 mb-4">
                Establish a strong brand identity that resonates with your audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Logo Design & Brand Identity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Brand Strategy & Positioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Brand Guidelines & Style Guides</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Rebranding & Brand Refresh</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Brand Messaging & Tone of Voice</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8L8 16M8 8L16 16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-800">Digital Marketing & Growth</h3>
              <p className="text-sm text-slate-600 mb-4">
                Drive traffic, engagement, and conversions with our digital marketing services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">SEO & Content Strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">PPC & Google Ads</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Email Marketing Campaigns</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Analytics & Performance Tracking</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-800">Web & UI/UX Design</h3>
              <p className="text-sm text-slate-600 mb-4">
                Create stunning digital experiences that engage and convert.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Website Design & Development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">E-commerce & Online Retail Solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Custom WordPress Websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">UI/UX Design & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Mobile App Design & Development</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 9H16M8 13H14M8 17H10M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-800">Content Creation & Storytelling</h3>
              <p className="text-sm text-slate-600 mb-4">
                Engage your audience with compelling content that tells your brand story.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Copywriting & Content Strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Video Production & Animation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Social Media Content Creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Graphic & Visual Content Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  <span className="text-sm text-slate-700">Blog Posts & Long-form Content</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Creative Partners Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              We Are Your <span className="text-orange-500">Creative Partners</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're not just another marketing agency. We're your strategic partners in achieving business growth and
              brand excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Brand Identity</h3>
              <p className="text-sm text-slate-600">
                We create unique and memorable brand identities that help you stand out in your market and connect with
                your target audience.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Digital Strategy</h3>
              <p className="text-sm text-slate-600">
                Our data-driven digital strategies help businesses grow online, increase visibility, and drive
                meaningful conversions.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Creative Excellence</h3>
              <p className="text-sm text-slate-600">
                Our award-winning creative team delivers stunning visuals and compelling content that captures attention
                and drives engagement.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-slate-50 p-8 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <p className="text-slate-700 italic mb-4 max-w-2xl">
                "Working with Zoolyum has been transformative for our company. Their creative approach and strategic
                thinking have helped us reach new customers and grow our business significantly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-medium text-slate-800">James Wilson</div>
                  <div className="text-sm text-slate-600">CEO, TechSolutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="container mx-auto py-16 bg-slate-50">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12">
            Take a look at some of our recent work that showcases our expertise and creativity
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project placeholders */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-slate-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800">Project Title</h3>
                  <p className="text-sm text-slate-600">Branding, Web Design</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">View All Projects</Button>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Our Success Stories</h2>
          <p className="text-center text-slate-600 mb-12">
            See how our clients have transformed their businesses with our creative solutions
          </p>

          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Read Success Stories</Button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto py-16 bg-slate-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-800">Latest Insights</h2>
            <p className="text-slate-600">Tips, trends, and insights from our marketing experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-4">
                <div className="text-xs text-slate-500 mb-2">Category • April 12, 2023</div>
                <h3 className="font-semibold text-slate-800 mb-2">How Digital Marketing Drives Business Growth</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Learn how strategic digital marketing can transform your business and drive sustainable growth.
                </p>
                <Link href="#" className="text-orange-500 text-sm font-medium flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-4">
                <div className="text-xs text-slate-500 mb-2">Category • March 28, 2023</div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  The Power of Brand Storytelling: Connect & Convert
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Discover how effective brand storytelling can help you connect with your audience and drive
                  conversions.
                </p>
                <Link href="#" className="text-orange-500 text-sm font-medium flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-4">
                <div className="text-xs text-slate-500 mb-2">Category • March 15, 2023</div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  2023 Digital Marketing Trends: Strategies for Growth: A Comprehensive Guide
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Stay ahead of the competition with these emerging digital marketing trends and strategies for 2023.
                </p>
                <Link href="#" className="text-orange-500 text-sm font-medium flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">View All Articles</Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Frequently Asked Questions</h2>
          <p className="text-center text-slate-600 mb-12">
            Find answers to common questions about our services and how we can help your business
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-slate-800">
                  How can I schedule a consultation?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  You can schedule a consultation by filling out our contact form, calling our office, or sending us an
                  email. One of our team members will get back to you within 24 hours to arrange a meeting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-slate-800">What makes your agency unique?</AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We combine strategic thinking with creative excellence to deliver results-driven solutions. Our team
                  has expertise across multiple industries, and we take a personalized approach to each client's unique
                  challenges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-slate-800">
                  How do you measure the success of your services?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We establish clear KPIs at the beginning of each project and provide regular reports on performance.
                  Our focus is on delivering measurable results that align with your business objectives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-slate-800">
                  What is the process for starting a project?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our process begins with a discovery phase where we learn about your business goals and challenges. We
                  then develop a strategic plan, present it for your approval, and once approved, our team begins
                  execution with regular updates throughout the project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-slate-800">
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  The timeline for results varies depending on the service and your specific goals. Some services like
                  PPC advertising can show results within days, while SEO and brand building are longer-term investments
                  that typically show significant results within 3-6 months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-slate-800">
                  How much do your services cost?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our pricing is customized based on your specific needs and project scope. We offer flexible packages
                  to accommodate different budgets and business sizes. Contact us for a personalized quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-10">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">View All FAQs</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto py-16 bg-slate-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-800">Let's Create Something Amazing</h2>
            <p className="text-slate-600">Ready to transform your brand? Get in touch with our team today.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-orange-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Email Us</h3>
                  </div>
                  <p className="text-sm text-slate-600 ml-11">info@zoolyum.com</p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-orange-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Call Us</h3>
                  </div>
                  <p className="text-sm text-slate-600 ml-11">+1 (555) 123-4567</p>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" className="rounded-md" />
                    </div>
                    <div>
                      <Input placeholder="Your Email" className="rounded-md" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Subject" className="rounded-md" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="rounded-md h-32" />
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
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
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Contact Us
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
                    Web Design & Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    SEO & Analytics
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
                    Guides & Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Terms of Service
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
