import React from "react";
import Link from "next/link";

const SaxSection = () => {
  const courses = [
    {
      title: "UI/Web&Graph design for teenagers 11-17 years old",
      startDate: "04.11.2022",
      href: "#",
    },
    {
      title: "UX/UI Web-Design + Mobile Design",
      startDate: "04.11.2022",
      href: "#",
    },
    {
      title: 'Annual package "Product+UX/UI+Graph designer 2022"',
      startDate: "04.11.2022",
      href: "#",
    },
    {
      title: "Graphic Design",
      startDate: "04.11.2022",
      href: "#",
    },
    {
      title: "Motion Design",
      startDate: "30.11.2022",
      href: "#",
    },
    {
      title: "Front-end development + jQuery + CMS",
      startDate: null,
      href: "#",
    },
    {
      title: "Digital Marketing",
      startDate: null,
      href: "#",
    },
    {
      title: "Interior Design",
      startDate: "31.10.2022",
      href: "#",
    },
  ];

  const getBackgroundColor = (index) => {
    const colors = [
      "bg-yellow-400",
      "bg-green-400",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];

    if ((index + 1) % 6 === 0) return colors[5];
    if ((index + 1) % 5 === 0) return colors[4];
    if ((index + 1) % 4 === 0) return colors[3];
    if ((index + 1) % 3 === 0) return colors[2];
    if ((index + 1) % 2 === 0) return colors[1];
    return colors[0];
  };

  return (
    <div className="bg-[#0b0f17] min-h-screen">
      <div className="max-w-[1142px] mx-auto px-4 lg:px-0">
        {/* Wrapper with horizontal scroll */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-1 min-w-max py-2">
            {courses.map((course, index) => (
              <div
                key={index}
                className="w-[300px] h-40 flex-shrink-0 overflow-hidden rounded-[28px]"
              >
                <Link href={course.href} className="block h-full">
                  <div className="relative bg-[#171b23] p-6 h-full overflow-hidden group cursor-pointer rounded-[28px]">
                    {/* Background circle */}
                    <div
                      className={`absolute w-32 h-32 ${getBackgroundColor(
                        index
                      )} rounded-full -top-[75px] -right-[75px] transition-transform duration-500 ease-in-out group-hover:scale-[10]`}
                    ></div>

                    {/* Title */}
                    <div className="relative z-10 min-h-[72px] mb-4 font-bold text-xl text-white group-hover:text-white transition-colors duration-500">
                      {course.title}
                    </div>

                    {/* Date */}
                    {course.startDate && (
                      <div className="relative z-10 text-base text-white">
                        Start:{" "}
                        <span className="font-bold text-yellow-400 group-hover:text-white transition-colors duration-500">
                          {course.startDate}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaxSection;
