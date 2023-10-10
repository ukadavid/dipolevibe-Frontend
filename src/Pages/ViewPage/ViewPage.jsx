import { useEffect } from 'react';
import NavBar from '../../Components/Homepage/NavBar';
import ViewSection from '../../Components/ViewSection/ViewSection';

const ViewPage = () => {
  const handleLeave = (event) => {
    const message = 'Are you sure you want to leave?';
    (event || window.event).returnValue = message; // Standard for most browsers
    return message; // For some older browsers
  };
  useEffect(() => {
    window.addEventListener('beforeunload', handleLeave);
    return () => {
      window.removeEventListener('beforeunload', handleLeave);
    };
  }, []);
  return (
    <div className='bg-gray-50 dark:bg-gray-800'>
      <div>
        <NavBar />
        <ViewSection />
      </div>
    </div>
  );
};
export default ViewPage;