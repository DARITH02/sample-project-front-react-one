import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import P1 from "../assets/images/2.png";
import Map from "../components/Map";
import ContactMss from "../components/Contact ";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@company.com", "support@company.com"],
      color: "from-red-500 to-red-700",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Business Street", "New York, NY 10001"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div
        className="text-white  bg-top h-[300px] "
        style={{
          backgroundImage: `url(${P1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <ContactMss />

      {/* Map Placeholder */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5 shadow-2xl">
        <div className=" flex items-center justify-center">
          <div className=" w-full">
            <Map className="w-full h-full" />
            {/* <MapPin className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold text-lg">
                    Interactive Map Location
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    123 Business Street, New York, NY 10001
                  </p> */}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            Our support team is available 24/7 for urgent matters
          </p>
          <a
            href="tel:+15551234567"
            className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
}

// https://www.google.com/maps/place/ETEC2/@11.5637506,104.8887268,17.86z/data=!4m16!1m7!3m6!1s0x310951adb4d4041d:0x8a90e729f62ad800!2sETEC2!8m2!3d11.5622054!4d104.89051!16s%2Fg%2F11s8j5cd77!3m7!1s0x310951adb4d4041d:0x8a90e729f62ad800!8m2!3d11.5622054!4d104.89051!9m1!1b1!16s%2Fg%2F11s8j5cd77!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D
