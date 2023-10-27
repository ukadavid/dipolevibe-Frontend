import { useState, useEffect } from 'react';

const useTimeAgo = (timestamp) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const commentDate = new Date(timestamp);
      const timeDifference = currentDate - commentDate;
      const seconds = Math.floor(timeDifference / 1000);
      let timeAgoString = '';

      if (seconds < 60) {
        timeAgoString = `${seconds} seconds ago`;
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        timeAgoString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        timeAgoString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else {
        const days = Math.floor(seconds / 86400);
        timeAgoString = `${days} day${days > 1 ? 's' : ''} ago`;
      }

      setTimeAgo(timeAgoString);
    };

    calculateTimeAgo();

    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo;