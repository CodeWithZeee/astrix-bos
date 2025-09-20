"use client";
import React from "react";

const EasterCarousel = ({
  items = [],
  reverse = false,
  mask = true,
  duration = "40s",
  itemWidth = "280px",
  itemHeight = "450px",
  itemGap = "2rem",
  carouselWidth = "min(80vw, 1200px)",
}) => {
  const defaultItems = [
    {
      id: 1,
      image: "Scroll1.png",
      alt: "Home Improvement Pros",
      title: "Home Improvement Pros",
      description:
        "From roofers to remodelers, HVAC, flooring, and painting contractors, Noha ensures every inquiry is answered instantly. With automated scheduling, follow-ups, and 24/7 availability, your team never misses a lead—even after hours or on the job site.",
      link: "#",
    },
    {
      id: 2,
      image: "Scroll2.png",
      alt: "Real Estate Agents & Teams",
      title: "Real Estate Agents & Teams",
      description:
        "In real estate, speed matters. Noha engages new leads the moment they reach out, nurturing them with instant responses and around-the-clock follow-up. Whether for solo agents or large broker teams, it keeps your pipeline moving while you focus on closing deals.",
      link: "#",
    },
    {
      id: 3,
      image: "Scroll3.png",
      alt: "Personal Services",
      title: "Personal Services",
      description:
        "For businesses built on appointments, Noha becomes your front desk. It handles booking, reminders, and client communications—ensuring patients and clients feel cared for while your team focuses on service delivery.",
      link: "#",
    },
    {
      id: 4,
      image: "Scroll4.png",
      alt: "Coaches, Consultants & Professionals",
      title: "Coaches, Consultants & Professionals",
      description:
        "From business coaches to consultants, lawyers, and accountants, Noha keeps leads warm, handles follow-ups, and manages scheduling invisibly in the background. It takes the admin burden off your plate so you can focus entirely on delivering value.",
      link: "#",
    },
    {
      id: 5,
      image: "Scroll5.png",
      alt: "Local Service Businesses",
      title: "Local Service Businesses",
      description:
        "For plumbers, electricians, landscapers, or any local service provider, Noha is the competitive advantage. It answers calls, books jobs, and manages customer care seamlessly—making sure every client feels heard and every opportunity is captured.",
      link: "#",
    },
    // {
    //   id: 6,
    //   image: "https://images.pexels.com/photos/12787666/pexels-photo-12787666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   alt: "crown of thorns",
    //   title: "Crown of Thorns",
    //   description: "The Crown of Thorns symbolizes the suffering of Jesus before his crucifixion. It represents the pain he endured for humanity's salvation and is a reminder of his sacrifice during Easter.",
    //   link: "#"
    // }
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;
  const itemCount = carouselItems.length;

  return (
    <>
      <style jsx>{`
        @import url(https://fonts.bunny.net/css?family=abel:400);

        .carousel {
          --items: ${itemCount};
          --carousel-duration: ${duration};
          --carousel-width: ${carouselWidth};
          --carousel-item-width: ${itemWidth};
          --carousel-item-height: ${itemHeight};
          --carousel-item-gap: ${itemGap};
          --clr-cta: rgb(0, 132, 209);

          position: relative;
          width: var(--carousel-width);
          height: var(--carousel-item-height);
          overflow: clip;
        }

        @media (width > 600px) {
          .carousel {
            --carousel-duration: 30s;
          }
        }

        .carousel[data-mask="true"] {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10% 90%,
            transparent
          );
        }

        .carousel[data-reverse="true"] .carousel-item {
          animation-direction: reverse;
        }

        .carousel:hover .carousel-item {
          animation-play-state: paused;
        }

        .carousel-item {
          position: absolute;
          top: 0;
          left: calc(100% + var(--carousel-item-gap));
          width: var(--carousel-item-width);
          height: var(--carousel-item-height);
          display: grid;
          grid-template-rows: 200px auto 1fr auto;
          gap: 0.25rem;
          border: 1px solid rgba(0, 0, 0, 0.25);
          padding-block-end: 1rem;
          border-radius: 10px;
          background: black;
          color: rgb(49, 65, 88);
          will-change: transform;
          animation-name: marquee;
          animation-duration: var(--carousel-duration);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (prefers-color-scheme: dark) {
          .carousel-item {
            border: 1px solid rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.05);
            color: white;
          }
        }

        .carousel-item:nth-child(1) {
          --i: 0;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 0 * -1
          );
        }
        .carousel-item:nth-child(2) {
          --i: 1;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 1 * -1
          );
        }
        .carousel-item:nth-child(3) {
          --i: 2;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 2 * -1
          );
        }
        .carousel-item:nth-child(4) {
          --i: 3;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 3 * -1
          );
        }
        .carousel-item:nth-child(5) {
          --i: 4;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 4 * -1
          );
        }
        .carousel-item:nth-child(6) {
          --i: 5;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 5 * -1
          );
        }
        .carousel-item:nth-child(7) {
          --i: 6;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 6 * -1
          );
        }
        .carousel-item:nth-child(8) {
          --i: 7;
          animation-delay: calc(
            var(--carousel-duration) / var(--items) * 1 * 7 * -1
          );
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .carousel-item > *:not(.carousel-image) {
          padding: 0 1rem;
        }

        .carousel-content {
          grid-row: span 2;
          display: grid;
          grid-template-rows: subgrid;
          font-size: 0.8rem;
        }

        .carousel-title {
          font-size: 1.2rem;
          font-weight: 300;
          padding-block: 0.75rem 0.25rem;
          margin: 0;
        }

        .carousel-description {
          margin: 0;
        }

        .carousel-link {
          text-decoration: none;
          text-transform: lowercase;
          border: 1px solid var(--clr-cta);
          color: var(--clr-cta);
          border-radius: 3px;
          padding: 0.25rem 0.5rem;
          place-self: start;
          transition: 150ms ease-in-out;
          display: inline-block;
        }

        @media (prefers-color-scheme: dark) {
          .carousel-link {
            color: white;
          }
        }

        .carousel-link:hover,
        .carousel-link:focus-visible {
          background-color: var(--clr-cta);
          color: white;
          outline: none;
        }

        @keyframes marquee {
          100% {
            transform: translateX(
              calc(
                (
                    var(--items) *
                      (var(--carousel-item-width) + var(--carousel-item-gap))
                  ) * -1
              )
            );
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: "Abel", sans-serif;
        }
      `}</style>

      <div
        className="carousel"
        data-mask={mask.toString()}
        data-reverse={reverse.toString()}
      >
        {carouselItems.map((item, index) => (
          <article key={item.id || index} className="carousel-item">
            <img
              src={item.image}
              alt={item.alt || item.title}
              className="carousel-image"
            />
            <h2 className="carousel-title ">{item.title}</h2>
            <div className="carousel-content">
              <p className="carousel-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default EasterCarousel;
