import React from "react";
import { BookOpen, Home, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 flex items-center justify-center ">
      <div className="w-full h-full   p-8 md:p-12">
        {/* Icon and Error Code */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 rounded-full mb-6">
            <BookOpen className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-8xl md:text-9xl font-bold text-indigo-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg">
            Looks like this lesson hasn't been created yet, or the page you're
            looking for has moved to a different course.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">
            Here's what you can do:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Check the URL for any typos</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Return to the homepage and browse our courses</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Use the search bar to find what you're looking for</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={"/"}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to={"/"}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Search Courses
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Need help?{" "}
            <a
              href="#"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
