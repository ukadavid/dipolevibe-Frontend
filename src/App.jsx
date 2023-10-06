import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup/UserSignupPage";
import AdminSignupPage from "./Pages/Signup/AdminSignupPage";
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import SideNavigation from "./Components/sidenav/SideNav";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Library from "./Pages/Library";
import Notification from "./Pages/Notification";
import HomePage from "./Pages/HomePage/HomePage";
import SuccessPage from "./Pages/SuccessPage";
import Page404Page from "./Pages/Page404Page";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import AccountVerificationPage from "./Pages/AccountVerificationPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import RecordingSection from "./Components/RecordingSection/RecordingSection";
import ViewPage from "./Pages/ViewPage/ViewPage";
import VideoListPage from "./Pages/VideoListPage";
import VideoViewPage from "./Pages/VideoViewPage";


function App() {

  return (
    <div>
    <DataProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminSignup" element={<AdminSignupPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/verify" element={<AccountVerificationPage />} />
          <Route path="*" element={<Page404Page />} />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/recordings" element={<RecordingSection />} />
          <Route path="/views" element={<ViewPage />} />
          <Route path="/videoList" element={<VideoListPage/>}/>
          <Route path="/VideoViewPage" element={<VideoViewPage/>}/>
          

          <Route
            path="/home"
            element={
                <>
                  <SideNavigation />
                  <Home />
                </>
            }
          />
          <Route
            path="/library"
            element={
                <>
                  <SideNavigation />
                  <Library />
                </>
            }
          />
          <Route
            path="/notification"
            element={
                <>
                  <SideNavigation />
                  <Notification />
                </>
            }
          />
          
        </Routes>
      </Router>
    </DataProvider>
    </div>
  )
}

export default App;
