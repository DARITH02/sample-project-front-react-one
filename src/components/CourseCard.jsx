import { Star } from "lucide-react";
import React from "react";

const CourseCard = ({
  image,
  category,
  instructor,
  students,
  price,
  title,

  rating,
}) => {
  return (
    <>
      <div className="bg-white h-[430px] rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
        <div className="h-[49%] flex items-center justify-center text-6xl">
          <img className="h-full object-cover w-full" src={image} alt="" />
        </div>
        <div className="px-6 py-2">
          <div className="text-sm text-blue-600 font-semibold mb-2">
            {category}
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-1 overflow-hidden w-full">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{instructor}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold">{rating}</span>
              <span className="text-gray-500 text-sm">({students})</span>
            </div>
            <div className="font-bold text-blue-600 text-xl">${price}</div>
          </div>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
