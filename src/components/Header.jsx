import { useState } from "react";
import { Menu, X, Home, User, Settings, Mail, Info } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Settings, label: "Services", href: "/service" },
    { icon: Mail, label: "Contact", href: "/contact" },
    { icon: Info, label: "Info", href: "/info" },
  ];

  return (
    <div className="bg-gray-50/95 sticky top-0 z-50 backdrop-blur-sm ">
      <nav className=" shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img
              className=" h-full "
              src="https://etec-system.42web.io/assets/etec.png"
              alt=""
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center space-x-2  hover:text-blue-600 transition-colors duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
