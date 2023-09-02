import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup/UserSignupPage";
import AdminSignupPage from "./Pages/Signup/AdminSignupPage";
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import SideNavigation from "./Components/sidenav/SideNav";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Notification from "./Pages/Notification";


function App() {
  return (
    <div>
    <DataProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/adminSignup" element={<AdminSignupPage />} />
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
