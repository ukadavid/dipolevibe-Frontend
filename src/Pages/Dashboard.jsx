import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavigation from "../components/sidenav/SIdeNav";
import Home from "./Home";
import Library from './Library';
import Notification from './Notification';

function Dashboard(){
    return(
        <>
          <Router>
             <SideNavigation />
             <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/Library" element={<Library />} />
               <Route path="/Notification" element={<Notification />} />
               </Routes>
          </Router>
        </>
    )
}

export default Dashboard;