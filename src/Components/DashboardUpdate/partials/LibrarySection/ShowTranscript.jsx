const ShowTranscript = () => {
  const hasComment = true;

  return (
    <div className=" w-full h-full mt-3">
      {hasComment ? (
        // Render your content here when there is a transcription
        <div className="border-black h-full">
          <h5 className="text-3xl">Content has no transcription</h5>
        </div>
      ) : (
        // Render "No transcription" when there is no transcription
        <div>No transcription</div>
      )}
    </div>
  );
};

export default ShowTranscript;
