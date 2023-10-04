/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Header from '../components/header/Header';
import CaptureMeetingModal from '../components/Modal/CaptureMeetingModal/CaptureMeetingModal';
import ScheduleMeetingModal from '../components/Modal/ScheduleMeetingModal/ScheduleMeetingModal';
import {RecordingModal} from '../Components/RecorderModals/RecorderModal'
import {RecorderComponent} from '../Components/RecorderModals/RecorderModal'

function Home(){
    const[openCaptureMeetingModal,setCaptureMeetingModal] = useState(true);
    const[openScheduleMeetingModal,setScheduleMeetingModal] = useState(false);
    const [showRecordingModal, setShowRecordingModal] = useState(false);

    const handleRecordButtonClick = () => {
        setShowRecordingModal(true);
      };
    return (
        <>
        {openScheduleMeetingModal && <ScheduleMeetingModal/>}
        {openCaptureMeetingModal && <CaptureMeetingModal />}
        <Header openModal= {openCaptureMeetingModal}/>
        <div className="dashboard-container">
          <div className="main-card1">
            <div className="title center-content">
                Welcome to dipoleVibe
            </div>
            <div className="card">
                <div className="center-content card-child"> 
                    <i className="fa fa-camera" aria-hidden="true" style={{fontSize: "1.8rem"}}></i>
                </div>
                <div className="center-content card-child">
                    <h4>You don't have any upcoming meeting in the next 2 days</h4>
                </div>
                <div className="center-content card-child">
                    <h4>Schedule meeting on your calendar with dipoleVibe</h4>
                </div>
                <div className="center-content card-child">
                    <div>
                        <button className="styled-button">Schedule a meeting</button>
                    </div>                     
                </div>
            </div>

            <div className="card">
                <div className="center-content card-child"> 
                    <i className="fa fa-video-camera" style={{fontSize: "1.8rem"}}/>
                </div>
                <div className="center-content card-child">
                    <h4>Work is always better together</h4>
                </div>
                <div className="center-content card-child">
                    <h4>Record a video and send to your team</h4>
                </div>
                <div className="center-content card-child">
                    <div>
                        <img src="" alt="" />
                        <button className="styled-button" onClick={handleRecordButtonClick}>Record Now</button>
                        {showRecordingModal &&  <RecorderComponent />}
                       
                    </div>                     
                </div>
            </div>
          </div>

          <div className="main-card2">
            <div>
                <div className="md-box">
                    <h4 className="font-family:font-sans font-semibold">Current meeting settings</h4>
                </div>
                <div className="lg-box">
                    <div className="md-box">
                        <h4 className="font-light">Meeting dipoleVibe will attend</h4>
                    </div>
                    <div className="lg-box md-mg h-10">
                        <select className='border h-10'>
                            <option >Join calendar only event with web-conf link</option>
                            <option >Join only calendar meeting that i own</option>
                            <option >Join calendar events only when i invite Vibe</option>
                        </select>
                    </div>
                </div>
                <div className="">
                   <div className="md-box">
                        <h4 className="font-light">Notes get send to</h4>
                   </div>
                   <div className="h-10">
                        <select className='border h-10'>
                            <option>Send recaps to only me and participants in my team</option>
                            <option>Send recaps to everyone on the invite</option>
                            <option>Send recaps to only me</option>
                        </select>
                   </div>

                   <div className="mg-top-lg" style={{width: "380px"}}>
                      <div className="meetingCard-Child lg-box lg-mg px-3 py-4 border rounded-sm">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3 className="font-family:font-sans font-medium">Capture live meetings</h3>
                             <h2 className="font-family: ui-serif text-gray-400">Support MS Teams, Zoom and GMeet</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-plus" aria-hidden="true"></i>
                           </div>       
                      </div>
                      <div className="meetingCard-Child lg-box lg-mg px-3 py-4 border rounded-sm">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3 className="font-family:font-sans font-medium">Transcribe Audio or Video</h3>
                             <h2 className="font-family: ui-serif text-gray-400">Drop Mp3, Mp4 or WAV files</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-plus" aria-hidden="true"></i>
                           </div>       
                      </div>
                      <div className="meetingCard-Child lg-box px-3 py-4 border rounded-sm">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3 className="font-family:font-sans font-medium">Record and send video</h3>
                             <h2 className="font-family: ui-serif text-gray-400">Screen and video, video and audio</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i className="fa fa-plus" aria-hidden="true"></i>
                           </div>       
                      </div>
                   </div>
                </div>
            </div>
            <div></div>
          </div>
        </div>
        </>
  

    )
}

export default Home;