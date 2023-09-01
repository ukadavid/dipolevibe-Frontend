<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "./Pages/Signup/UserSignupPage";
import AdminSignupPage from "./Pages/Signup/AdminSignupPage";
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <DataProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/adminSignup" element={<AdminSignupPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
=======
// import './App.css';
import SideNavigation from "./components/sidenav/SIdeNav";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Library from './pages/Library';
import Notification from './pages/Notification';

function App() {
  return (
    <div>
    <Router>
      <SideNavigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Notification" element={<Notification />} />
      </Routes>
    </Router>
    </div>
  )
>>>>>>> Stashed changes
}

export default App;
