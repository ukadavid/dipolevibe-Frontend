import ViewSection from "../../../ViewSection/ViewSection";
import { useEffect } from "react";
const ViewSectionPage = () => {
  const handleLeave = (event) => {
    const message = "Are you sure you want to leave?";
    (event || window.event).returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleLeave);
    return () => {
      window.removeEventListener("beforeunload", handleLeave);
    };
  }, []);
  return (
    <div>
      <ViewSection />
    </div>
  );
};

export default ViewSectionPage;
