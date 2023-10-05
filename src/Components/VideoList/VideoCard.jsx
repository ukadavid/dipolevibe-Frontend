function VideoCard({ key, video}){
    console.log(video);
    return (
        
          <div style={{ display: 'inline-block', marginBottom: '10px', width: '100%', marginRight: '10px'}}>
              <video controls width="100%" height="auto">
                 <source src={video.videoURL} type="video/mp4" />
              </video>
          </div>
        
    )
}
export default VideoCard;