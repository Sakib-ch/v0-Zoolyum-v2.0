import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  MessageCircle,
  Heart,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "How Digital Marketing Drives Business Growth",
    slug: "how-digital-marketing-drives-business-growth",
    date: "April 12, 2023",
    category: "Digital Marketing",
    author: {
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    readTime: "8 min read",
    content: `
      <p class="lead">In today's digital landscape, businesses of all sizes are leveraging digital marketing strategies to drive growth, increase brand awareness, and connect with their target audience in meaningful ways.</p>
      
      <p>Digital marketing encompasses a wide range of tactics and channels, from search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing, content marketing, and email campaigns. When implemented strategically, these efforts can yield significant returns on investment and propel businesses forward in competitive markets.</p>
      
      <h2>Understanding the Digital Marketing Ecosystem</h2>
      
      <p>The digital marketing ecosystem is vast and constantly evolving. To effectively navigate this landscape, businesses must first understand the various components and how they work together to create a cohesive strategy.</p>
      
      <p>At its core, digital marketing is about meeting your audience where they are—online. This means having a strong presence across multiple channels and platforms, from your website and blog to social media profiles and email newsletters.</p>
      
      <h3>Key Components of Digital Marketing</h3>
      
      <ul>
        <li><strong>Search Engine Optimization (SEO):</strong> The process of optimizing your website to rank higher in search engine results pages (SERPs) for relevant keywords and phrases.</li>
        <li><strong>Content Marketing:</strong> Creating and distributing valuable, relevant content to attract and engage a clearly defined target audience.</li>
        <li><strong>Social Media Marketing:</strong> Using social media platforms to connect with your audience, build your brand, and drive website traffic.</li>
        <li><strong>Email Marketing:</strong> Sending targeted messages to prospects and customers to nurture relationships and drive conversions.</li>
        <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Placing ads on search engines and other digital platforms and paying each time a user clicks on your ad.</li>
      </ul>
      
      <p>By integrating these components into a comprehensive digital marketing strategy, businesses can create multiple touchpoints with their target audience and guide them through the customer journey.</p>
      
      <h2>The Impact of Digital Marketing on Business Growth</h2>
      
      <p>Digital marketing has revolutionized the way businesses connect with customers and grow their operations. Here are some key ways digital marketing drives business growth:</p>
      
      <h3>1. Increased Brand Awareness and Visibility</h3>
      
      <p>Digital marketing helps businesses increase their online presence and visibility, making it easier for potential customers to find them. Through SEO, content marketing, and social media efforts, businesses can appear in front of their target audience at the right time with the right message.</p>
      
      <h3>2. Better Customer Engagement and Relationship Building</h3>
      
      <p>Digital channels provide opportunities for two-way communication between businesses and their customers. This allows for more meaningful interactions, personalized experiences, and stronger relationships over time.</p>
      
      <h3>3. Data-Driven Decision Making</h3>
      
      <p>One of the greatest advantages of digital marketing is the ability to track and measure results in real-time. This data-driven approach allows businesses to make informed decisions, optimize their strategies, and allocate resources more effectively.</p>
      
      <h3>4. Cost-Effective Marketing Solutions</h3>
      
      <p>Compared to traditional marketing methods, digital marketing often provides a higher return on investment (ROI). With targeted campaigns and precise audience segmentation, businesses can reduce wasted ad spend and focus on reaching the most valuable prospects.</p>
      
      <h3>5. Scalable Growth Opportunities</h3>
      
      <p>Digital marketing strategies can be scaled up or down based on business needs and performance. This flexibility allows businesses to adapt to changing market conditions and capitalize on growth opportunities as they arise.</p>
      
      <h2>Implementing a Successful Digital Marketing Strategy</h2>
      
      <p>To harness the power of digital marketing for business growth, follow these key steps:</p>
      
      <h3>1. Define Clear Goals and Objectives</h3>
      
      <p>Start by establishing specific, measurable, achievable, relevant, and time-bound (SMART) goals for your digital marketing efforts. Whether you're looking to increase website traffic, generate leads, or boost sales, having clear objectives will guide your strategy and help you measure success.</p>
      
      <h3>2. Know Your Audience</h3>
      
      <p>Develop detailed buyer personas to understand who your target audience is, what challenges they face, and how your products or services can help solve their problems. This knowledge will inform your messaging, channel selection, and content creation.</p>
      
      <h3>3. Conduct a Competitive Analysis</h3>
      
      <p>Research your competitors to identify their strengths, weaknesses, and digital marketing strategies. This analysis can reveal opportunities for differentiation and help you avoid common pitfalls in your industry.</p>
      
      <h3>4. Create a Content Strategy</h3>
      
      <p>Develop a comprehensive content strategy that addresses your audience's needs at each stage of the buyer's journey. Focus on creating high-quality, valuable content that positions your brand as a trusted authority in your field.</p>
      
      <h3>5. Choose the Right Channels</h3>
      
      <p>Select the digital marketing channels that align with your goals and where your target audience is most active. Rather than trying to be everywhere at once, focus on mastering a few key channels before expanding your presence.</p>
      
      <h3>6. Measure, Analyze, and Optimize</h3>
      
      <p>Regularly track your performance metrics, analyze the results, and make data-driven adjustments to your strategy. Continuous optimization is key to maximizing your ROI and achieving sustainable growth.</p>
      
      <h2>Conclusion</h2>
      
      <p>Digital marketing has become an essential component of business growth in today's connected world. By understanding the digital marketing ecosystem, leveraging its impact on business growth, and implementing a strategic approach, businesses can unlock new opportunities, reach wider audiences, and achieve their growth objectives.</p>
      
      <p>Remember that digital marketing is not a one-size-fits-all solution. The most successful strategies are tailored to your specific business goals, target audience, and industry landscape. By staying agile, embracing innovation, and focusing on delivering value to your customers, you can harness the full potential of digital marketing to drive sustainable business growth.</p>
    `,
    tags: ["Digital Marketing", "Business Growth", "SEO", "Content Strategy", "Social Media"],
    relatedPosts: [
      {
        title: "The Power of Brand Storytelling: Connect & Convert",
        slug: "power-of-brand-storytelling",
        category: "Branding",
        date: "March 28, 2023",
      },
      {
        title: "Content Marketing Strategies That Actually Work",
        slug: "content-marketing-strategies",
        category: "Content Strategy",
        date: "February 22, 2023",
      },
      {
        title: "SEO Best Practices for 2023 and Beyond",
        slug: "seo-best-practices-2023",
        category: "SEO",
        date: "January 30, 2023",
      },
    ],
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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

      <main className="flex-grow">
        {/* Blog Post Header */}
        <div className="w-full bg-slate-100 py-12">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-sm text-slate-600 hover:text-orange-500 mb-4">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-slate-500 text-sm">•</span>
              <span className="text-slate-500 text-sm">{post.date}</span>
              <span className="text-slate-500 text-sm">•</span>
              <span className="text-slate-500 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 max-w-4xl">{post.title}</h1>
            <div className="flex items-center">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <div className="font-medium text-slate-800">{post.author.name}</div>
                <div className="text-sm text-slate-500">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-slate-200"></div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-slate lg:prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Sharing */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-slate-700">Share this article:</span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">42</span>
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">12</span>
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{post.author.name}</h3>
                    <p className="text-sm text-slate-500 mb-3">{post.author.role}</p>
                    <p className="text-slate-600">
                      Sarah is a digital marketing expert with over 10 years of experience helping businesses grow their
                      online presence. She specializes in content strategy, SEO, and social media marketing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Comments (12)</h3>

                {/* Comment Form */}
                <div className="bg-slate-50 rounded-xl p-6 mb-8">
                  <h4 className="font-medium text-slate-800 mb-4">Leave a comment</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      ></textarea>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Post Comment</Button>
                  </div>
                </div>

                {/* Sample Comments */}
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="border-b border-slate-200 pb-6">
                    <div className="flex items-start">
                      <div className="bg-slate-200 rounded-full w-10 h-10 mr-4"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-slate-800">Michael Thompson</h5>
                          <span className="text-xs text-slate-500">2 days ago</span>
                        </div>
                        <p className="text-slate-600 mb-3">
                          Great article! I&apos;ve been implementing some of these strategies for my business and have
                          seen significant growth in our online presence.
                        </p>
                        <div className="flex items-center space-x-4">
                          <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            Like (5)
                          </button>
                          <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div>
                    <div className="flex items-start">
                      <div className="bg-slate-200 rounded-full w-10 h-10 mr-4"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-slate-800">Jennifer Wilson</h5>
                          <span className="text-xs text-slate-500">5 days ago</span>
                        </div>
                        <p className="text-slate-600 mb-3">
                          I&apos;d love to see more specific examples of how small businesses can implement these
                          strategies with limited resources. Any thoughts on that?
                        </p>
                        <div className="flex items-center space-x-4">
                          <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            Like (2)
                          </button>
                          <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Reply
                          </button>
                        </div>

                        {/* Reply */}
                        <div className="mt-4 ml-6 pt-4 border-t border-slate-100">
                          <div className="flex items-start">
                            <div className="bg-slate-200 rounded-full w-8 h-8 mr-3"></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-medium text-slate-800">
                                  Sarah Johnson <span className="text-xs text-orange-500">(Author)</span>
                                </h5>
                                <span className="text-xs text-slate-500">3 days ago</span>
                              </div>
                              <p className="text-slate-600 mb-3">
                                Great question, Jennifer! I&apos;m actually working on a follow-up article specifically
                                for small businesses with limited resources. Stay tuned!
                              </p>
                              <div className="flex items-center space-x-4">
                                <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                                  <Heart className="w-3 h-3 mr-1" />
                                  Like (3)
                                </button>
                                <button className="text-xs text-slate-500 hover:text-orange-500 flex items-center">
                                  <MessageCircle className="w-3 h-3 mr-1" />
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="text-orange-500 hover:text-orange-600 font-medium">Load More Comments</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Author Widget */}
              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-slate-800">{post.author.name}</div>
                    <div className="text-sm text-slate-500">{post.author.role}</div>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Follow</Button>
              </div>

              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <Link key={index} href={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="flex items-start">
                        <div className="bg-slate-200 rounded w-20 h-20 flex-shrink-0 mr-4"></div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">
                            {relatedPost.category} • {relatedPost.date}
                          </div>
                          <h4 className="font-medium text-slate-800 group-hover:text-orange-500 transition-colors">
                            {relatedPost.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link href="/blog/category/digital-marketing" className="flex items-center justify-between group">
                    <span className="text-slate-600 group-hover:text-orange-500">Digital Marketing</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">24</span>
                  </Link>
                  <Link href="/blog/category/branding" className="flex items-center justify-between group">
                    <span className="text-slate-600 group-hover:text-orange-500">Branding</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">18</span>
                  </Link>
                  <Link href="/blog/category/web-design" className="flex items-center justify-between group">
                    <span className="text-slate-600 group-hover:text-orange-500">Web Design</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">15</span>
                  </Link>
                  <Link href="/blog/category/content-strategy" className="flex items-center justify-between group">
                    <span className="text-slate-600 group-hover:text-orange-500">Content Strategy</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">12</span>
                  </Link>
                  <Link href="/blog/category/seo" className="flex items-center justify-between group">
                    <span className="text-slate-600 group-hover:text-orange-500">SEO</span>
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">9</span>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Subscribe to our newsletter</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Get the latest insights and trends delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Navigation */}
        <div className="bg-slate-50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link
                href="/blog/content-marketing-strategies"
                className="flex items-center text-slate-600 hover:text-orange-500 mb-4 md:mb-0"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                <div>
                  <div className="text-xs text-slate-500">Previous Article</div>
                  <div className="font-medium">Content Marketing Strategies That Actually Work</div>
                </div>
              </Link>
              <Link
                href="/blog/power-of-brand-storytelling"
                className="flex items-center text-slate-600 hover:text-orange-500"
              >
                <div className="text-right">
                  <div className="text-xs text-slate-500">Next Article</div>
                  <div className="font-medium">The Power of Brand Storytelling: Connect & Convert</div>
                </div>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo-white.svg" alt="Zoolyum Logo" width={120} height={30} className="mb-4" />
              <p className="text-slate-400 text-sm mb-4">
                We&apos;re a creative agency focused on helping brands grow through strategic marketing and design.
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
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
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
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm">
                    Privacy Policy
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
