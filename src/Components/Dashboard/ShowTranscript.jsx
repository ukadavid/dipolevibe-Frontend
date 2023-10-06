const ShowTranscript = () => {
  const hasComment = true;
    return (
      <div className=" w-full gap-4 ">
      {hasComment ? (
    // Render your content here when there is a transcription
    <>
      <h5 className='text-3xl'>Content has no comment</h5>
    </>
  ) : (
    // Render "No transcription" when there is no transcription
    <div>No transcription</div>
  )}
    </div>
    );
  };
  
  export default ShowTranscript;
  