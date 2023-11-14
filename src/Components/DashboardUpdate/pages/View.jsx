import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import "../css/style.css";
import ViewSectionPage from "../partials/ViewSection/ViewSection";

function View() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="mt-[-100px]">
          <div className="px-4   lg:px-8 w-full max-w-9xl mx-auto">
            <ViewSectionPage />
          </div>
        </main>
      </div>
    </div>
  );
}

export default View;
