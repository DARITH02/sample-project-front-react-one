import { useState } from "react";
import { Link } from "react-router";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  Play,
  ChevronRight,
  TrendingUp,
  Shield,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses, stats, categories } from "../data/coursesData";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Access your courses anytime, anywhere, on any device",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn certificates upon completion to boost your career",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it from our support team",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700/80 rounded-xl shadow-lg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Learn Without Limits
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Start, switch, or advance your career with thousands of courses,
                Professional Certificates, and degrees from world-class
                universities and companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Started <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md">
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        500+ Courses
                      </div>
                      <div className="text-sm text-blue-700">Available now</div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-2xl">
                      👥
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        50K+ Students
                      </div>
                      <div className="text-sm text-blue-700">
                        Join our community
                      </div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        4.8 Rating
                      </div>
                      <div className="text-sm text-blue-700">
                        From 10K+ reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Top Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from hundreds of courses across different categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 hover:border-blue-500"
              >
                <div className="text-4xl mb-3 text-center">{category.icon}</div>
                <h3 className="font-semibold text-center mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {category.courses} Courses
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Courses */}
      <section className="py-16 bg-gray-50" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Most popular courses chosen by our students
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`}>
              <CourseCard
                key={course.id}
                image={course.image}
                category={course.category}
                title={course.title}
                instructor={course.instructor}
                students={course.students}
                price={course.price}
                rating={course.rating}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ETEC?
            </h2>
            <p className="text-gray-600 text-lg">
              We provide the best learning experience for students worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students already learning on LearnHub
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}
