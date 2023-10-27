import { useNavigate, useLocation } from 'react-router-dom';
import HoverVideoPlayer from 'react-hover-video-player';

function RecommendedVideoCard({video, onClick}){
  const navigate = useNavigate();

  const handleCardClick = () => {
    localStorage.setItem('videoObject', JSON.stringify(video));
    console.log("clicked!!"+ localStorage.getItem('videoObject'));
    location.reload()
  };
    return (
        <div className="flex mb-2 bg-transparent" onClick={handleCardClick}>
          <div className="w-44 h-40 mr-2">
            <HoverVideoPlayer videoSrc={video.videoURL} />
          </div>
          <div>
            {video.tags.map((tag, index) => (
              <span 
                className="mr-1 text-xs text-white font-thin rounded-full border-sky-400 border px-1"
              >{tag}</span>
            ))}
            <p className="text-white">{video.videoTitle}</p>
            <p className="text-stone-100 text-sm">{video.videoSummary}</p>
            <div>
              <span className="text-xs text-white">{video.views}</span>
              <span>{video.comment}</span>
            </div>
          </div>
        </div>
    )
}

export default RecommendedVideoCard;