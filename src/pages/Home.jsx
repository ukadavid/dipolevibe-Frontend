import { useState } from 'react';
import Header from '../components/header/Header';
import CaptureMeetingModal from '../components/Modal/CaptureMeetingModal/CaptureMeetingModal';
import ScheduleMeetingModal from '../components/Modal/ScheduleMeetingModal/ScheduleMeetingModal';

export default function Home(){
    const[openCaptureMeetingModal,setCaptureMeetingModal] = useState(false);
    const[openScheduleMeetingModal,setScheduleMeetingModal] = useState(true);
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
                    <i class="fa fa-camera" aria-hidden="true" style={{fontSize: "1.8rem"}}></i>
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
                    <i class="fa fa-video-camera" style={{fontSize: "1.8rem"}}/>
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
                        <button className="styled-button">Record Now</button>
                    </div>                     
                </div>
            </div>
          </div>

          <div className="main-card2">
            <div>
                <div className="sm-box">
                    <h4>Current meeting settings</h4>
                </div>
                <div className="lg-box">
                    <div className="md-box">
                        <h4>Meetitng dipoleVibe will attend</h4>
                    </div>
                    <div className="lg-box md-mg">
                        <select>
                            <option>Join calendar only event with web-conf link</option>
                            <option>Join only calendar meeting that i own</option>
                            <option>Join calendar events only when i invite Vibe</option>
                        </select>
                    </div>
                </div>
                <div className="">
                   <div className="md-box">
                        <h4>Notes get send to</h4>
                   </div>
                   <div className="lg-box">
                        <select>
                            <option>Send recaps to only me and participants in my team</option>
                            <option>Send recaps to everyone on the invite</option>
                            <option>Send recaps to only me</option>
                        </select>
                   </div>

                   <div className="meetingCard lg-box mg-top-lg">
                      <div className="meetingCard-Child lg-box lg-mg">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3>Capture live meetings</h3>
                             <h2>Support MS Teams, Zoom and GMeet</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-plus" aria-hidden="true"></i>
                           </div>       
                      </div>
                      <div className="meetingCard-Child lg-box lg-mg">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3>Transcribe Audio or Video</h3>
                             <h2>Drop Mp3, Mp4 or WAV files</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-plus" aria-hidden="true"></i>
                           </div>       
                      </div>
                      <div className="meetingCard-Child lg-box">
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-camera" aria-hidden="true"></i>
                           </div>
                           <div style={{flexGrow:"6"}}>
                             <h3>Record and send video</h3>
                             <h2>Screen and video, video and audio</h2>
                           </div>
                           <div className="iconCard" style={{flexGrow:"2"}}>
                              <i class="fa fa-plus" aria-hidden="true"></i>
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