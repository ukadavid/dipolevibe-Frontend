import { useState } from 'react';
import { apiPostComment } from '../../Context/Api/Axios';
import Logo from "../../assets/logo.jpeg"

function CommentInputCard({ videoId }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentPost = () => {
    try {
      console.log("clicked!!");
      // Send the comment to the API
      apiPostComment(`/comments/public-video/${videoId}`, { text: commentText });

      // Clear the input field after posting
      setCommentText('');

    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }

    return (
      <div className="flex items-center py-2">
        <div className="mr-2">
          <img src={Logo} alt="logo" className="h-12 w-12 rounded-full" />
        </div>
        <div className="w-full relative">
          <div className="relative border-b-4 border-indigo-500 text-white">
            <input
              type="text"
              placeholder="Add a comment "
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full dark:bg-gray-800 border-none border-b-4 border-indigo-500 focus:border-b-blue-500 p-1 text-base"
            />
          </div>
          <div className="mt-2 absolute right-0">
            <button className="text-white px-8 py-1 mr-2">
              Cancel
            </button>
            <button 
               onClick={handleCommentPost}
               className="text-gray-500 rounded-full bg-slate-600 px-8 py-1"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

export default CommentInputCard;