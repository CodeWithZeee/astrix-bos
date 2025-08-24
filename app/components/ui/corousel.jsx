"use client";
import React from 'react';

const EasterCarousel = ({ 
  items = [],
  reverse = false,
  mask = true,
  duration = '40s',
  itemWidth = '280px',
  itemHeight = '450px',
  itemGap = '2rem',
  carouselWidth = 'min(80vw, 1200px)'
}) => {
  const defaultItems = [
    { 
      id: 1,
      image: "https://images.pexels.com/photos/635699/pexels-photo-635699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "The Cross",
      title: "The Cross",
      description: "The Cross is a central symbol of Easter, representing the crucifixion of Jesus Christ and his sacrifice for humanity. It serves as a reminder of suffering, love, and redemption, and is often displayed during Holy Week and Easter Sunday to honor the foundation of Christian faith.",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7168798/pexels-photo-7168798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "easter eggs",
      title: "Easter Eggs",
      description: "Easter eggs are a colorful symbol of new life and rebirth, often decorated and hidden for festive hunts. The tradition comes from ancient spring rituals and was later adopted into Easter celebrations to represent the resurrection.",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4099179/pexels-photo-4099179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "hot cross buns",
      title: "Hot Cross Buns",
      description: "Hot cross buns are sweet, spiced buns marked with a cross on top, traditionally eaten on Good Friday. They originated in England and symbolize the crucifixion, with the cross representing Jesus and the spices recalling burial traditions.",
      link: "#"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "easter chick",
      title: "Easter Chick",
      description: "Easter chicks are a cheerful symbol of new life and beginnings, often seen alongside eggs in spring decorations. They represent birth and renewal, tying into the themes of Easter and the arrival of spring.",
      link: "#"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2072158/pexels-photo-2072158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "easter bunny",
      title: "Easter Bunnies",
      description: "Easter bunnies are a popular symbol of spring and new life, often seen delivering colorful eggs to children.",
      link: "#"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/12787666/pexels-photo-12787666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "crown of thorns",
      title: "Crown of Thorns",
      description: "The Crown of Thorns symbolizes the suffering of Jesus before his crucifixion. It represents the pain he endured for humanity's salvation and is a reminder of his sacrifice during Easter.",
      link: "#"
    }
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
          background: white;
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

        .carousel-item:nth-child(1) { --i: 0; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 0 * -1); }
        .carousel-item:nth-child(2) { --i: 1; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 1 * -1); }
        .carousel-item:nth-child(3) { --i: 2; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 2 * -1); }
        .carousel-item:nth-child(4) { --i: 3; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 3 * -1); }
        .carousel-item:nth-child(5) { --i: 4; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 4 * -1); }
        .carousel-item:nth-child(6) { --i: 5; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 5 * -1); }
        .carousel-item:nth-child(7) { --i: 6; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 6 * -1); }
        .carousel-item:nth-child(8) { --i: 7; animation-delay: calc(var(--carousel-duration) / var(--items) * 1 * 7 * -1); }

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
                (var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) *
                  -1
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
            <h2 className="carousel-title">{item.title}</h2>
            <div className="carousel-content">
              <p className="carousel-description">{item.description}</p>
              <a href={item.link} className="carousel-link">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default EasterCarousel;