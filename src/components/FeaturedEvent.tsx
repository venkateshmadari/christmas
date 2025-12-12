import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const FeaturedEvent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // YouTube links array
  const youtubeLinks = [
    {
      id: 1,
      title: "Bhoopunadhi Munipe",
      url: "https://youtu.be/ntKGJAHpsJw?si=SbaclvO4EeFZNQxp",
      videoId: "ntKGJAHpsJw",
      thumbnail: "https://img.youtube.com/vi/ntKGJAHpsJw/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Ethukoni",
      url: "https://youtu.be/pINYyovACk8?si=rjIdXQ57IkSmajVq",
      videoId: "pINYyovACk8",
      thumbnail: "https://img.youtube.com/vi/pINYyovACk8/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Mysteries of the Bible",
      url: "https://youtube.com/playlist?list=PLwjKxfto3qcFy0eBT5rUG5vUlFaIB2O77&si=ye_UHUhHvtZgt4Iw",
      videoId: "ntKGJAHpsJw",
      thumbnail: "https://img.youtube.com/vi/ntKGJAHpsJw/hqdefault.jpg",
      isPlaylist: true,
    },
    {
      id: 4,
      title: "The Book of Revelation",
      url: "https://youtube.com/playlist?list=PLwjKxfto3qcGNdPfZKybmx_aq1WAeK_7H&si=ZI4QEeGW-a-PvH3z",
      videoId: "pINYyovACk8",
      thumbnail: "https://img.youtube.com/vi/pINYyovACk8/hqdefault.jpg",
      isPlaylist: true,
    },
    {
      id: 5,
      title: "Ezra Study Series",
      url: "https://youtube.com/playlist?list=PLwjKxfto3qcFGHi_1ZO40EwVpJawFfeQy&si=2nlQ_w2-gUWH-GQ_",
      videoId: "ntKGJAHpsJw",
      thumbnail: "https://img.youtube.com/vi/ntKGJAHpsJw/hqdefault.jpg",
      isPlaylist: true,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === youtubeLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? youtubeLinks.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleThumbnailClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full px-4 md:px-[10%] py-4 md:py-8">
        <div className="flex items-center w-full">
          <span className="h-px bg-primary/20 w-full" />
          <span className="uppercase px-3 my-6 tracking-wider text-primary text-nowrap text-xs md:text-sm font-semibold">
            Our must watch
          </span>
          <span className="h-px bg-primary/20 w-full" />
        </div>
      </div>

      {/* YouTube Thumbnails Carousel */}
      <div className="w-full px-4 md:px-[10%]">
        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-[37%] md:top-[40%] -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 -translate-x-1/2 sm:-translate-x-4"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-primary text-lg md:text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-[37%] md:top-[40%] -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 translate-x-1/2 sm:translate-x-4"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-primary text-lg md:text-xl" />
          </button>

          {/* Main Slide Display */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl"
            onClick={() => handleThumbnailClick(youtubeLinks[activeIndex].url)}
          >
            <div className="relative aspect-video cursor-pointer group">
              <img
                src={youtubeLinks[activeIndex].thumbnail}
                alt={youtubeLinks[activeIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="bg-red-600 group-hover:bg-red-700 group-hover:scale-105 md:group-hover:scale-110 transition-all duration-300 w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl md:shadow-2xl">
                  <FaPlay className="text-white text-xl md:text-3xl ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="mt-4 md:mt-6">
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 md:pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2">
              {youtubeLinks.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex-shrink-0 w-24 md:w-40 cursor-pointer transition-all duration-300 ${
                    index === activeIndex ? "" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                    />
                    {index === activeIndex && (
                      <div className="absolute inset-0" />
                    )}
                  </div>
                  <p className="mt-1.5 md:mt-2 text-xs md:text-sm font-medium text-gray-800 truncate text-center px-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
            {youtubeLinks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-6 md:w-8 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedEvent;
