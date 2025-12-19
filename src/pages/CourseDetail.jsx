import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Globe,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import React from "react";
import { courses } from "../data/coursesData";
import { useParams } from "react-router";

const CourseDetail = () => {
  const { id } = useParams();

  const course = courses.find((e) => e.id === Number(id));

  if (!course) return <h1>Not found!</h1>;

  return (
    <>
      <div className="w-full p-4 z-50 ">
        <div className=" w-full my-8 shadow-sm rounded-t-2xl overflow-hidden">
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full  h-[550px] object-cover rounded-t-2xl "
            />
            {/* <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-slate-700" />
              </button> */}
            <div className="absolute bottom-4 left-6">
              <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {course.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              {course.title}
            </h2>

            <p className="text-lg text-slate-700 mb-6">{course.description}</p>

            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-slate-900">
                  {course.rating}
                </span>
                <span className="text-slate-600">rating</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-5 h-5" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  What you'll learn
                </h3>
                <ul className="space-y-3">
                  {course.whatYouLearn.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {course.requirements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-purple-600" />
                Course Curriculum
              </h3>
              <div className="space-y-3">
                {course.curriculum.map((section, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {section.section}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {section.lessons} lessons
                      </p>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {section.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Instructor</p>
                  <p className="text-xl font-bold text-slate-900">
                    {course.instructor}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <Globe className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                    <p className="text-sm text-slate-700">{course.language}</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                    <p className="text-sm text-slate-700">Certificate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <div>
                <p className="text-sm text-slate-600">Price</p>
                <span className="text-4xl font-bold text-slate-900">
                  ${course.price}
                </span>
              </div>
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
