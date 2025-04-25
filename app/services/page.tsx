import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
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
          <Link href="/services" className="text-sm font-medium text-orange-500">
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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-slate-600 mb-8 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of creative services designed to help your business stand out, connect with
              your audience, and achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
              <Button variant="outline" className="rounded-full border-slate-300 text-slate-700">
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="branding" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger
                    value="branding"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Branding & Identity
                  </TabsTrigger>
                  <TabsTrigger
                    value="digital"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Digital Marketing
                  </TabsTrigger>
                  <TabsTrigger value="web" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                    Web & UI/UX Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="content"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Content Creation
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="branding" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="bg-orange-100 text-orange-500 mb-4">Branding & Identity</Badge>
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Build a Strong Brand Identity</h2>
                    <p className="text-slate-600 mb-6">
                      Your brand is more than just a logo—it's the personality of your business and the promise you make
                      to your customers. We help you create a cohesive brand identity that resonates with your audience
                      and sets you apart from competitors.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Logo Design & Visual Identity Systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Brand Strategy & Positioning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Brand Guidelines & Style Guides</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Brand Messaging & Tone of Voice</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Rebranding & Brand Refresh</span>
                      </li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Branding services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="digital" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Digital marketing services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <Badge className="bg-orange-100 text-orange-500 mb-4">Digital Marketing</Badge>
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Grow Your Online Presence</h2>
                    <p className="text-slate-600 mb-6">
                      In today's digital world, having a strong online presence is essential. Our digital marketing
                      strategies are designed to increase your visibility, drive traffic, and convert visitors into
                      customers.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Search Engine Optimization (SEO)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Pay-Per-Click Advertising (PPC)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Social Media Marketing & Management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Email Marketing Campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Analytics & Performance Tracking</span>
                      </li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="bg-orange-100 text-orange-500 mb-4">Web & UI/UX Design</Badge>
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Create Exceptional Digital Experiences</h2>
                    <p className="text-slate-600 mb-6">
                      Your website is often the first interaction customers have with your brand. We design and develop
                      websites that not only look great but also provide intuitive, user-friendly experiences that drive
                      conversions.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Responsive Website Design & Development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">E-commerce & Online Store Development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">User Experience (UX) & Interface (UI) Design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Mobile App Design & Development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Website Maintenance & Support</span>
                      </li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Web design services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Content creation services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <Badge className="bg-orange-100 text-orange-500 mb-4">Content Creation</Badge>
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Tell Your Brand Story</h2>
                    <p className="text-slate-600 mb-6">
                      Content is the voice of your brand. We create compelling, engaging content that tells your story,
                      showcases your expertise, and connects with your audience across all channels.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Copywriting & Content Strategy</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Blog Posts & Article Writing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Video Production & Animation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Social Media Content Creation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">Infographics & Visual Content</span>
                      </li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Process</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We follow a proven process to ensure every project is completed efficiently and effectively, delivering
                results that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Discovery</h3>
                <p className="text-slate-600">
                  We start by understanding your business, goals, target audience, and challenges. This helps us create
                  a strategy tailored to your specific needs.
                </p>
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-orange-300" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Strategy</h3>
                <p className="text-slate-600">
                  Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline,
                  deliverables, and expected outcomes.
                </p>
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-orange-300" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Creation</h3>
                <p className="text-slate-600">
                  Our creative team gets to work, developing concepts, designs, and content that align with your brand
                  and resonate with your audience.
                </p>
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-orange-300" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Implementation</h3>
                <p className="text-slate-600">
                  We launch your project, monitor performance, and make adjustments as needed to ensure optimal results
                  and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Pricing</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We offer flexible pricing options to accommodate businesses of all sizes. Choose the package that best
                fits your needs or contact us for a custom solution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for small businesses and startups</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-800">$1,499</span>
                    <span className="text-slate-500 ml-2">/ project</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Brand Identity Design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Responsive Website (5 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Basic SEO Setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Social Media Setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">30 Days Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-orange-200 shadow-md relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideal for growing businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-800">$3,999</span>
                    <span className="text-slate-500 ml-2">/ project</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Comprehensive Brand Identity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Custom Website (10 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Advanced SEO Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Social Media Management (3 platforms)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Content Creation (5 pieces)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">90 Days Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For established businesses with complex needs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-800">Custom</span>
                    <span className="text-slate-500 ml-2">pricing</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Complete Brand Strategy & Identity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Custom Website Development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Comprehensive Digital Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Full Content Strategy & Creation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">Ongoing Support & Maintenance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12 text-slate-600">
              <p>
                Need a custom solution?{" "}
                <Link href="/contact" className="text-orange-500 font-medium">
                  Contact us
                </Link>{" "}
                for a personalized quote.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">What Our Clients Say</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with Zoolyum.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">
                    "Working with Zoolyum was a game-changer for our business. Their creative approach and strategic
                    thinking helped us rebrand and establish a strong online presence that has significantly increased
                    our customer base."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-slate-800">Sarah Johnson</h4>
                      <p className="text-sm text-slate-500">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zoolyum. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
