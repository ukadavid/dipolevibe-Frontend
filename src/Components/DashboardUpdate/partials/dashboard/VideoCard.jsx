/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function VideoCard({ videoSrc, views, date, profileImgSrc, profileName }) {
  return (
    <div className="flex flex-col mr-8 col-span-full sm:col-span-3 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="py-2 px-4">
        <div>
          <video controls className="w-full mt-4 rounded-lg shadow-lg" style={{ maxHeight: "350px" }}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-600 dark:text-gray-400 my-2">{views}</p>
          <p className="text-gray-600 dark:text-gray-400">{date}</p>
          <div className="flex items-center mt-4">
            <img className="h-8 w-8 rounded-full" src={profileImgSrc} alt={profileName} />
            <a href="https://vimeo.com/julienetquentin" className="font-bold ml-2 text-gray-800 dark:text-white">{profileName}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCardList() {
    const content = [
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        {
          videoSrc: "../../../../assets/video.mp4",
          views: "4,287 views",
          date: "a month ago",
          profileImgSrc: "https://i.vimeocdn.com/portrait/9177372_30x30",
          profileName: "Julien & Quentin"
        },
        // Add more content objects as needed
      ];

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
        <div className="flex items-center justify-end mb-4">
  <p className="mr-2">View</p>
  <button onClick={goToPrev} className="text-blue-500 mr-2">
    <FaChevronLeft /> 
  </button>
  <button onClick={goToNext} className="text-blue-500">
    <FaChevronRight />
  </button>
</div>

      
      <Slider ref={sliderRef} {...sliderSettings}>
        {content.map((item, index) => (
          <VideoCard  key={index} {...item} />
        ))}
      </Slider>
      
    </div>
  );
}

export default VideoCardList;
