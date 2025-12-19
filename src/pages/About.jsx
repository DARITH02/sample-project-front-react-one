import { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  Quote,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { stats } from "../data/coursesData";
import P1 from "../assets/images/dev-darith.jpg";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to make education accessible",
    },
    {
      year: "2019",
      title: "10K Students",
      description: "Reached our first major milestone",
    },
    {
      year: "2021",
      title: "100+ Courses",
      description: "Expanded our course catalog significantly",
    },
    {
      year: "2024",
      title: "50K+ Students",
      description: "Growing community of learners worldwide",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description:
        "We believe education transforms lives and opens doors to endless possibilities.",
    },
    {
      icon: Users,
      title: "Student-Centered",
      description:
        "Every decision we make puts our students first, ensuring the best learning experience.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in course content, instruction, and support.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description:
        "Building a diverse, inclusive community of learners from around the world.",
    },
  ];

  const team = [
    {
      name: "HENG PHEAKNA",
      role: "Director",
      image: "https://etec-system.42web.io/assets/lokru.png",
      bio: "15+ years in education technology",
    },
    {
      name: "Kung Norasmey",
      role: "Vice Director",
      image: "https://etec-system.42web.io/assets/mimg.png",
      bio: "Former software architect at tech giants",
    },
    {
      name: "Srin Nalen",
      role: "Web Developer",
      image: "https://etec-system.42web.io/assets/nalen.png",
      bio: "Former software architect at tech giants",
    },
    {
      name: "Ven ChanDarith",
      role: "Web Developer",
      image: P1,
      bio: "Expert in digital marketing strategy Former software architect at tech giants",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Developer",
      image:
        "https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg",
      text: "LearnHub really kickstarted my career! The courses are clear, practical, and the instructors actually care about your growth. Couldn't recommend it more!",
    },
    {
      name: "Maria Garcia",
      role: "UX Designer",
      image:
        "https://i.pinimg.com/736x/c4/d4/af/c4d4afa5d0bcdb35110c71d5adb7a8d7.jpg",
      text: "Taking courses here was hands-down the best decision for my career. The content is engaging, and the support team feels like part of the journey.",
    },
    {
      name: "James Wilson",
      role: "Marketing Manager",
      image:
        "https://i.pinimg.com/1200x/55/06/62/55066253d0d056c690cfb49f4f91ff82.jpg",
      text: "I love that I can learn at my own pace. The platform is intuitive, the lessons are practical, and I've already started applying what I learned at work!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize education by providing accessible, affordable,
                and high-quality learning experiences that empower individuals
                to achieve their personal and professional goals. We believe
                everyone deserves the opportunity to learn and grow, regardless
                of their background or location.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the world's most trusted online learning platform,
                where millions of learners connect with expert instructors to
                master new skills, advance their careers, and transform their
                lives. We envision a future where quality education knows no
                boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600  leading-relaxed text-justify text-xl font-medium">
              ETEC Center is a leading IT training institute established to
              provide high-quality education in web development, mobile
              applications, and modern technology skills. Since its founding in
              2017, the center has helped students and professionals gain
              practical knowledge and hands-on experience in the IT industry.
              Under the leadership of Director Heng Pheakna and Vice Director
              Kung Norasmey, ETEC Center focuses on delivering excellent
              training while maintaining advanced IT systems. The team,
              including skilled developers like Srin Nalen, ensures modern,
              functional, and user-friendly solutions for students, staff, and
              visitors. © 2025 ETEC Center
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment
              to our students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming online
              education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-80 flex items-center justify-center w-full">
                  <img className="w-full" src={member.image} alt="" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real feedback from real students who transformed their careers
              with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <Quote className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">
                    <img
                      className="w-24 h-24  "
                      src={testimonial.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your learning journey today and become part of something
            amazing.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
