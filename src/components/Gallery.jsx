import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const totalImages = 31;

const img = Array.from(
  { length: totalImages },
  (_, i) => `/images/Gallery/img${i + 1}.jpg`
);

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(() => {
    const storedIndex = sessionStorage.getItem("galleryImageIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("galleryImageIndex", curr);
  }, [curr]);

  const prev = () => setCurr(curr === 0 ? img.length - 1 : curr - 1);
  const next = () => setCurr(curr === img.length - 1 ? 0 : curr + 1);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div>
      <div className="bg-[#000f3a] h-40 ">
        <div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30">
          <div className="underline decoration-yellow-500 underline-offset-23 decoration-1">
            GAL
          </div>
          LERY
        </div>
      </div>
      <div className="max-w-8xl" ref={carouselRef}>
        <Carousel>
          {img.map((s, i) => (
            <img
              key={i}
              src={s}
              className="w-full h-150 object-contain bg-black"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}