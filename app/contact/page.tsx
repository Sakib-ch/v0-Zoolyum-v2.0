"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    })

    setIsSubmitting(false)
    setIsSuccess(true)
    form.reset()

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

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
          <Link href="/contact" className="text-sm font-medium text-orange-500">
            Contact
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section className="bg-slate-50 py-20" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-slate-600 mb-8 text-lg max-w-3xl mx-auto">
              Have a question, project idea, or want to work with us? We'd love to hear from you. Fill out the form
              below and our team will get back to you as soon as possible.
            </p>
          </div>
        </motion.section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h2>

                {isSuccess ? (
                  <motion.div
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
                        <motion.div variants={fadeIn}>
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email address" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input placeholder="What is this regarding?" {...field} className="rounded-md" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your project or inquiry..."
                                    {...field}
                                    className="rounded-md min-h-[150px]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <Button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </Form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
                <motion.div variants={fadeIn}>
                  <h2 className="text-2xl font-bold mb-6 text-slate-800">Contact Information</h2>
                  <p className="text-slate-600 mb-8">
                    We're here to help! Reach out to us through any of the channels below, or visit our office during
                    business hours.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Our Office</h3>
                    <p className="text-slate-600">
                      123 Creative Avenue, Suite 500
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">
                      General: info@zoolyum.com
                      <br />
                      Support: support@zoolyum.com
                      <br />
                      Careers: careers@zoolyum.com
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-8">
                  <h3 className="font-semibold text-slate-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-slate-600 hover:text-orange-500" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-slate-600 hover:text-orange-500" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-slate-600 hover:text-orange-500" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-slate-600 hover:text-orange-500" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-[16/9] bg-slate-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204824!2d-122.41941492392836!3d37.77492997197701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1682452586343!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zoolyum Office Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Find answers to common questions about working with us. If you don't see your question here, feel free
                to reach out directly.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {[
                  {
                    question: "What is your typical process for new projects?",
                    answer:
                      "Our process typically begins with an initial consultation to understand your needs and goals. We then develop a proposal outlining scope, timeline, and budget. Once approved, we move into the design and development phases, with regular check-ins and revisions. Finally, we launch your project and provide ongoing support as needed.",
                  },
                  {
                    question: "How long does a typical project take?",
                    answer:
                      "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive branding and marketing campaign could take 3-4 months. During our initial consultation, we'll provide a more accurate timeline based on your specific needs.",
                  },
                  {
                    question: "What information do you need to get started?",
                    answer:
                      "To get started, we typically need information about your business, target audience, project goals, and any existing brand assets. The more information you can provide upfront, the more efficiently we can work. We'll guide you through this process with a detailed questionnaire.",
                  },
                  {
                    question: "Do you offer ongoing maintenance and support?",
                    answer:
                      "Yes, we offer various maintenance and support packages to keep your digital assets running smoothly. These can include regular updates, security monitoring, content updates, and technical support. We'll recommend the appropriate package based on your needs.",
                  },
                ].map((faq, index) => (
                  <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg text-slate-800 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-orange-500 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Let's work together to create something amazing. Our team is ready to help you achieve your business goals
              through creative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-orange-500 hover:bg-slate-100 rounded-full">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                View Our Work
              </Button>
            </div>
          </div>
        </motion.section>
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
