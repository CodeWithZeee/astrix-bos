"use client";
import React, { useState, useEffect, useRef } from "react";

const ActivitiesWidget = () => {
  const [activeActivity, setActiveActivity] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const widgetRef = useRef(null);

  const activities = [
    {
      img: "/Usman.png",
      title: "Usman Obaid (Founder & CEO)",
      description: "Automotive Manufacturing Quality Engineer",
      rotation: "4deg",
    },
    {
      img: "/Assad.png",
      title: "Assad Balouch (Co-Founder & CTO)",
      description: "Software Engineer and AI Developer",
      rotation: "-2deg",
    },
    {
      img: "/Asfar.png",
      title: "Asfar Khan (CFO)",
      description: "Semiconductor Validation Engineer",
      rotation: "-9deg",
    },
  ];

  const handlePrevious = () => {
    setIsAnimating(true);
    setActiveActivity((prev) =>
      prev === 0 ? activities.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAnimating(true);
    setActiveActivity((prev) =>
      prev === activities.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 750);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <style>{`
        @keyframes straightenImages {
          50% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes moveOutIn {
          50% {
            transform: translateX(-100%) scale(1.15);
          }
          100% {
            transform: translateX(0) scale(1);
            z-index: 1;
          }
        }
        
        .activity-img {
          transition: transform 0.2s;
        }
        
        .animating .activity-img {
          animation: straightenImages 0.75s;
        }
        
        .active-img {
          animation: moveOutIn 0.66s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .activity-text {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.85, 0, 0.15, 1);
          pointer-events: none;
        }
        
        .active-text {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        
        @media (max-width: 300px) {
          .activities-widget {
            display: block !important;
            padding: 1rem;
          }
          .activity {
            display: block !important;
            margin-bottom: 3rem;
          }
          .activity-img-wrapper {
            max-width: 125px;
            margin: 0 auto 0.5rem;
          }
          .activity-text {
            opacity: 1 !important;
            transform: translateY(0) !important;
            pointer-events: all !important;
          }
          .activities-navigation,
          .activities-count {
            display: none !important;
          }
        }
      `}</style>

      <div
        ref={widgetRef}
        className={`activities-widget w-full max-w-[425px] mx-auto grid grid-cols-2 gap-x-8 gap-y-2 ${
          isAnimating ? "animating" : ""
        }`}
        style={{
          gridTemplateRows: "1lh auto auto",
        }}
      >
        {activities.map((activity, index) => (
          <div
            key={index}
            className="activity col-span-2 row-span-3"
            style={{
              gridColumn: "1 / -1",
              gridRow: "1 / -1",
              display: "grid",
              gridTemplateColumns: "subgrid",
              gridTemplateRows: "subgrid",
              zIndex: activeActivity === index ? 1 : 0,
            }}
          >
            <div
              className="activity-img-wrapper"
              style={{
                gridColumn: "1 / 2",
                gridRow: "1 / 4",
              }}
            >
              <div
                className={`activity-img w-full aspect-square overflow-hidden rounded-lg border-4 border-white shadow-md ${
                  activeActivity === index && isAnimating ? "active-img" : ""
                }`}
                style={{
                  transform: `rotate(${activity.rotation})`,
                }}
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            <div
              className={`activity-text ${
                activeActivity === index ? "active-text" : ""
              }`}
              style={{
                gridColumn: "2 / 3",
                gridRow: "2 / 3",
              }}
            >
              <h3 className="text-white font-bold m-0 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-400 m-0">{activity.description}</p>
            </div>
          </div>
        ))}

        <div
          className="activities-count text-gray-600 dark:text-gray-400 self-start z-10"
          style={{
            gridColumn: "2 / -1",
          }}
        >
          {activeActivity + 1}/{activities.length}
        </div>

        <nav
          className="activities-navigation self-end justify-self-end z-10 space-x-1"
          style={{
            gridColumn: "2 / 3",
            gridRow: "3 / 4",
          }}
        >
          <button
            aria-label="previous"
            onClick={handlePrevious}
            className="border-2 border-white bg-transparent rounded-full w-8 h-8 aspect-square hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            ⭠
          </button>
          <button
            aria-label="next"
            onClick={handleNext}
            className="border-2 border-white bg-transparent rounded-full w-8 h-8 aspect-square hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            ⭢
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ActivitiesWidget;
