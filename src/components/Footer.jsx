import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Instructors", href: "#instructors" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { name: "Web Development", href: "#web" },
    { name: "Mobile Development", href: "#mobile" },
    { name: "Data Science", href: "#data" },
    { name: "Design", href: "#design" },
    { name: "Business", href: "#business" },
    { name: "Marketing", href: "#marketing" },
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Refund Policy", href: "#refund" },
    { name: "FAQ", href: "#faq" },
    { name: "Career", href: "#career" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#facebook", label: "Facebook" },
    { Icon: Twitter, href: "#twitter", label: "Twitter" },
    { Icon: Instagram, href: "#instagram", label: "Instagram" },
    { Icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { Icon: Youtube, href: "#youtube", label: "YouTube" },
  ];

  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  className="w-14 rounded-lg"
                  src="https://etec-system.42web.io/assets/etec.png"
                  alt=""
                />
                <span className="text-2xl font-bold text-white">
                  ETEC CENTER
                </span>
              </div>
              <p className="text-sm">
                Empowering learners worldwide with high-quality online courses.
                Learn new skills, advance your career, and achieve your goals.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>support@learnhub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>123 Learning St, Education City</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className="text-sm hover:text-blue-500 transition-colors duration-200"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 mb-6">
                {support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="text-white text-sm font-semibold mb-3">
                  Subscribe to Newsletter
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-center md:text-left">
                © 2024 LearnHub. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="flex items-center space-x-2 text-xs">
                <span>We Accept:</span>
                <div className="flex space-x-2">
                  <div className="px-2 py-1 bg-gray-800 rounded text-white font-semibold">
                    VISA
                  </div>
                  <div className="px-2 py-1 bg-gray-800 rounded text-white font-semibold">
                    MC
                  </div>
                  <div className="px-2 py-1 bg-gray-800 rounded text-white font-semibold">
                    AMEX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
