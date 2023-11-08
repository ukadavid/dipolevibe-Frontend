import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/HomeSection/WelcomeBanner";
import ScreenRecord from "../partials/HomeSection/ScreenRecord";
import "../css/style.css";
import MyFeed from "../partials/HomeSection/MyFeed";
import { VideoCardList } from "../partials/HomeSection/VideoCard";
import { apiPostReply } from "../../../Context/Api/Axios";

function HomeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const email = localStorage.getItem("email");
  console.log(email);
  useEffect(() => {
    const response = apiPostReply("/user/register", { email: email });
    console.log(response.data);
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <ScreenRecord />
              <MyFeed />
              <div className="col-span-12 sm:col-span-12 xl:col-span-12">
                <VideoCardList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomeDashboard;
