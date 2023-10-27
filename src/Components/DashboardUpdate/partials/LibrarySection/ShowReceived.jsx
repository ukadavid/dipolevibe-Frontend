const ShowReceived = () => {
  const hasTranscription = true;

  return (
    //grid grid-cols-3
    <div className=" w-full gap-4 ">
      {hasTranscription ? (
        // Render your content here when there is a transcription
        <>
          <h5 className="text-xl dark:text-gray-800">
            Content with Transcription
          </h5>
        </>
      ) : (
        // Render "No transcription" when there is no transcription
        <div>No transcription</div>
      )}
    </div>
  );
};

export default ShowReceived;
