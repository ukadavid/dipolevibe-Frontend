import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup/UserSignupPage";
import AdminSignupPage from "./Pages/Signup/AdminSignupPage";
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import SideNavigation from "./Components/sidenav/SideNav";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Library from "./Components/DashboardUpdate/partials/LibrarySection/Library";
import Notification from "./Pages/Notification";
import HomePage from "./Pages/HomePage/HomePage";
import SuccessPage from "./Pages/SuccessPage";
import Page404Page from "./Pages/Page404Page";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import AccountVerificationPage from "./Pages/AccountVerificationPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ViewPage from "./Pages/ViewPage/ViewPage";
import VideoListPage from "./Pages/VideoListPage";
import VideoViewPage from "./Pages/VideoViewPage";
import HomeDashboard from "./Components/DashboardUpdate/pages/Home";
import MyLibraryDashboard from "./Components/DashboardUpdate/pages/MyLibraryDashboard";
import NotificationDashboard from "./Components/DashboardUpdate/pages/Notification";
import WatchLater from "./Components/DashboardUpdate/pages/WatchLater";
import Settings from "./Components/DashboardUpdate/pages/Settings";
import Analytics from "./Components/DashboardUpdate/pages/Analytics";
import ThemeProvider from "./Components/DashboardUpdate/utils/ThemeContext";

function App() {
  return (
    <div>
      <DataProvider>
        <ThemeProvider>
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
              <Route path="/views" element={<ViewPage />} />
              <Route path="/videoList" element={<VideoListPage />} />
              <Route path="/VideoViewPage" element={<VideoViewPage />} />
              <Route path="/dashboard" element={<HomeDashboard />} />
              <Route path="/mylibrary" element={<MyLibraryDashboard />} />
              <Route path="/notify" element={<NotificationDashboard />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/analytics" element={<Analytics />} />

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
        </ThemeProvider>
      </DataProvider>
    </div>
  );
}

export default App;
