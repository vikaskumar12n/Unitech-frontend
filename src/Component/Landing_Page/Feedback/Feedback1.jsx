// Feedback.jsx
import { useState, useEffect } from "react";
import TestimonialCard from "./Feedback1";

const testimonials = [
  {
    id: 1,
    reviewerName: "Saurabh Verma",
    reviewerHandle: "@Saurabh Verma",
    reviewText: "Excellent channel to give nice and correct information regarding property....",
    rating: 5,
    reviewerImage: "/press.jpg",
  },
  {
    id: 2,
    reviewerName: "Aditya Arya",
    reviewerHandle: "@Aditya Arya",
    reviewText: "The Best Property Dealer and Consultant of the Lucknow City, Very Nice Person. You can Trust him and The...",
    rating: 5,
    reviewerImage: "/Air-Cooler.jpg",
  },
  {
    id: 3,
    reviewerName: "Vinay Kumar",
    reviewerHandle: "@Vinay kumar",
    reviewText: "A dynamic man with eminence experience in relevant field....",
    rating: 4,
    reviewerImage: "/Water-Purifier.jpg",
  },
  {
    id: 4,
    reviewerName: "Rohit Singh",
    reviewerHandle: "@Rohit Singh",
    reviewText: "Very professional and trustworthy service. Highly recommended!",
    rating: 5,
    reviewerImage: "/press.jpg",
  },
  {
    id: 5,
    reviewerName: "Priya Sharma",
    reviewerHandle: "@Priya Sharma",
    reviewText: "Incredible service and very helpful staff. Made the entire process so easy!",
    rating: 5,
    reviewerImage: "/press.jpg",
  },
  {
    id: 6,
    reviewerName: "Aman Gupta",
    reviewerHandle: "@Aman Gupta",
    reviewText: "Trustworthy and quick. They go the extra mile for their clients.",
    rating: 4,
    reviewerImage: "/press.jpg",
  },
];

// Duplicate cards for loop effect
const seamlessTestimonials = [...testimonials, ...testimonials.slice(0, 4)];

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalOriginalSlides = testimonials.length;
  const jumpIndex = totalOriginalSlides;

  const nextSlide = () => {
    if (currentSlide >= jumpIndex) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(jumpIndex - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= jumpIndex) {
          setIsTransitioning(false);
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [jumpIndex]);

  return (
    <div className="relative flex items-center justify-center w-full py-12 bg-white">
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 p-3 text-black font-bold rounded-full shadow-lg focus:outline-none z-20"
      >
        &lt;
      </button>

      {/* Slider Wrapper */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${currentSlide * 25}%)`, // 4 cards ek row me
          }}
        >
          {seamlessTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 p-3 text-black font-bold rounded-full shadow-lg focus:outline-none z-20"
      >
        &gt;
      </button>
    </div>
  );
};

export default Feedback;
