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
}

export default App;
