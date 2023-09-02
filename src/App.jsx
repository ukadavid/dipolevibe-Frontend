import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/Signup/UserSignupPage";
import AdminSignupPage from "./Pages/Signup/AdminSignupPage";
import Dashboard from './Pages/Dashboard';
import DataProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
    <Dashboard />
    <DataProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/adminSignup" element={<AdminSignupPage />} />
        </Routes>
      </Router>
    </DataProvider>
    </div>
  )
}

export default App;
