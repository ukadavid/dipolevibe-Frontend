const ShowTranscript = ({ transcript }) => {
  const hasTranscript = true;

    return (
    <div className=" w-full h-full mt-3">
      { hasTranscript ? (
       // Render your content here when there is a transcription
      <div className="border-black h-full">
        <div>
          <span>
            { transcript }
          </span>
        </div>
      </div>
      ) : (
       // Render "No transcription" when there is no transcription
       <h5 className='text-3xl'>Content has no transcription</h5>
      )}
    </div>
    );
  };
  
  export default ShowTranscript;
  