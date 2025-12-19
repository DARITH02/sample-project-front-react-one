import React, { useState } from "react";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import P1 from "../assets/images/3.png";

export default function Service() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Secure & Scalable",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "User-Friendly UI",
        "Cloud Integration",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence and reach your audience.",
      features: [
        "SEO Strategy",
        "Content Marketing",
        "Social Media",
        "Analytics",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions and risk management.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Protection",
        "Compliance",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      icon: <Zap className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services for modern business needs.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Auto Scaling",
        "24/7 Support",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="text-white h-[500px] rounded-lg shadow"
        style={{
          background: `url(${P1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto ">
              Comprehensive solutions tailored to help your business thrive in
              the digital age
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${service.color} p-6 text-white`}
              >
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business
          </p>
          <button className="cursor-pointer hover:scale-95 transition-all duration-300 bg-white text-indigo-600 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg hover:bg-gray-100  shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
