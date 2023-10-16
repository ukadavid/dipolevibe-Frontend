import { useState, useEffect } from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

function CommentCard({ comment }){
    const author = comment.author;
    const initials = author.slice(0, 1) + author.charAt(Math.floor(author.length / 2));

    const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const commentDate = new Date(comment.timestamp);
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

    // Update the time difference every minute
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [comment.timestamp]);

    return(
        <div className="flex items-center py-2 mt-2">
            <div className="mr-2">
                 <div className="h-12 w-12 rounded-full text-white bg-gray-300 flex items-center justify-center">
                   {initials}
                 </div>
            </div>
            <div>
                <div className="flex items-center text-white">
                    <span className="text-blue-600 mr-1">
                        {comment.authorPaid ? <BiBadgeCheck /> : ""}
                    </span>
                    <span>{ comment.author }</span>
                    <span className="text-zinc-400 text-xs ml-2 ">{ timeAgo } </span>
                </div>
                <div className="text-white"><span>{ comment.text }</span></div>
            </div>
        </div>
    )
}

export default CommentCard;