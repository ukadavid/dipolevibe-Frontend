import { TERipple } from 'tw-elements-react';
import EyeIcon from '../../assets/EyeIcon.png';
import MessageIcon from '../../assets/MessageIcon.png';
import ShareIcon from '../../assets/ShareIcon.png';

const ShowReceived = () => {

  const hasTranscription = true;
    
      return (
        //grid grid-cols-3
        <div className=" w-full gap-4 ">
          {hasTranscription ? (
        // Render your content here when there is a transcription
        <>
          <h5 className='text-xl'>Content with Transcription</h5>
        </>
      ) : (
        // Render "No transcription" when there is no transcription
        <div>No transcription</div>
      )}
        </div>
      );
    };

export default ShowReceived
