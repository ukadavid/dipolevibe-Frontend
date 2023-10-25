import { useState } from "react";
import Overview from "./Overview";
import Shared from "./Shared";
import Comments from "./Comments";

export default function NotificationSection() {
  const [showOverview, setShowOverview] = useState(true);
  const [showShared, setShowShared] = useState(false);
  const [showComments, setShowComments] = useState(false);
  // Define state to manage the active link
  const [activeLink, setActiveLink] = useState("notify");

  const handleMyOverview = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowOverview(true);
    setShowShared(false);
    setShowComments(false);

    // Update the active link
    setActiveLink("notify");
  };
  const handleMyShared = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowOverview(false);
    setShowShared(true);
    setShowComments(false);

    // Update the active link
    setActiveLink("Shared");
  };
  const handleMyComments = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowOverview(false);
    setShowShared(false);
    setShowComments(true);

    // Update the active link
    setActiveLink("Comments");
  };

  return (
    <div className="p-0">
      <h4 className="text-2xl text-left font-semibold">Notification</h4>

      <div className="flex  space-x-6 sm:mt-7 mt-4 mb-8">
        <a
          href="#"
          className={` text-sm font-medium border-b-2 pb-1.5 text-black dark:text-white ${
            activeLink === "notify"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyOverview}
        >
          Overview
        </a>

        <a
          href="#"
          className={`text-sm font-medium border-b-2 pb-1.5 text-black dark:text-white  ${
            activeLink === "Shared"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyShared}
        >
          Shared with me
        </a>

        <a
          href="#"
          className={`text-sm font-medium border-b-2 pb-1.5 text-black dark:text-white  ${
            activeLink === "Comments"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyComments}
        >
          Comments
        </a>
      </div>

      {showOverview && <Overview />}
      {showShared && <Shared />}
      {showComments && <Comments />}
    </div>
  );
}
