import React, { useState } from "react";
import {
  BookOpen,
  Award,
  Users,
  Star,
  ChevronRight,
  Target,
  Rocket,
  Heart,
  Globe,
  Quote,
} from "lucide-react";

const Info = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Students",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: BookOpen,
      value: "100+",
      label: "Courses",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: Award,
      value: "7+ Years",
      label: "Experience",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Student Rating",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const timeline = [
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

  const team = [
    {
      name: "HENG PHEAKNA",
      role: "Director",
      experience: "15+ years in ed-tech",
      initials: "HP",
    },
    {
      name: "Kung Norasmey",
      role: "Vice Director",
      experience: "Former software architect",
      initials: "KN",
    },
    {
      name: "Srin Nalen",
      role: "Web Developer",
      experience: "Modern stack expert",
      initials: "SN",
    },
    {
      name: "Ven ChanDarith",
      role: "Web Developer",
      experience: "Marketing & Dev lead",
      initials: "VC",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section - Clean & High Contrast */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            Established 2017
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Empowering the next generation <br /> of{" "}
            <span className="text-indigo-600">IT Professionals</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            ETEC Center provides industry-standard training to help students
            master practical technology skills and build successful careers.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
              Browse Courses
            </button>
            <button className="px-8 py-3 bg-white text-slate-700 border border-slate-300 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section - Solid Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={`${stat.bg} ${stat.color} p-4 rounded-xl mb-4`}>
                <stat.icon size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Tabs - Minimalist Design */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-200/50 p-1.5 rounded-xl w-fit mx-auto">
          {["mission", "vision", "story", "team"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm capitalize transition-all ${
                activeTab === tab
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-10 min-h-[400px]">
          {activeTab === "mission" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <Target className="text-indigo-600" size={32} />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                "To democratize education by providing accessible, affordable,
                and high-quality learning experiences that empower individuals
                to achieve their personal and professional goals."
              </p>
            </div>
          )}

          {activeTab === "team" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                >
                  <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      {member.name}
                    </h4>
                    <p className="text-indigo-600 font-medium text-sm">
                      {member.role}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      {member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "story" && (
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Founded in 2017, ETEC Center emerged from a simple observation:
                the gap between university theory and industry practice was
                widening. We set out to bridge that gap by creating a center
                focused on <strong>practical, hands-on IT training</strong>.
              </p>
              <p className="text-slate-600">
                Today, we stand as a premier institution for developers and tech
                enthusiasts in the region, led by industry veterans and powered
                by a community of thousands.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="animate-in fade-in duration-500">
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="text-emerald-600" size={32} />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We aim to become the most trusted hub for digital talent, where
                anyone—regardless of background—can start from zero and become a
                world-class professional. Our vision is a future where quality
                technical education is a right, not a privilege.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials - Clean Cards */}
      <div className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-16 text-slate-900">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 relative"
              >
                <Quote
                  className="text-indigo-200 absolute top-6 right-6"
                  size={40}
                />
                <div className="flex gap-1 mb-4 text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "The curriculum at ETEC is perfectly aligned with what
                  employers are looking for. I landed a job as a developer just
                  weeks after finishing the course."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      Graduate Student
                    </p>
                    <p className="text-slate-500 text-xs">Software Engineer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Solid Indigo */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-indigo-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full -ml-32 -mb-32" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-indigo-100 mb-10 text-lg max-w-xl mx-auto">
            Join over 50,000 students already learning and building the future
            of technology.
          </p>
          <button className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-transform active:scale-95 flex items-center gap-2 mx-auto">
            Enroll Now <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
