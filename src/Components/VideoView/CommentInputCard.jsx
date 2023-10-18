import { useState } from 'react';
import { apiPostComment } from '../../Context/Api/Axios';
import Logo from "../../assets/logo.jpeg"

function CommentInputCard({ videoId }) {
  const [commentText, setCommentText] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Initial state, submit button is disabled
  const [firstCharacterEntered, setFirstCharacterEntered] = useState(false); // Initial state, first character not entered

  const handleCommentPost = () => {
    try {
      console.log("clicked!!");
      // Send the comment to the API
      apiPostComment(`/comments/public-video/${videoId}`, { text: commentText });

      // Clear the input field after posting
      setCommentText('');
      setIsSubmitDisabled(true); // Disable the submit button after posting
      setFirstCharacterEntered(false); // Reset the first character flag

    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }

  const handleInputChange = (e) => {
    const text = e.target.value;
    setCommentText(text);

    // Enable or disable the submit button based on the input length
    setIsSubmitDisabled(text.length === 0);

    // Check if the first character has been entered
    if (text.length === 1) {
      setFirstCharacterEntered(true);
    }

    if (text.length === 0) {
      setFirstCharacterEntered(false);
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
            placeholder="Add a comment"
            value={commentText}
            onChange={handleInputChange}
            className="w-full dark:bg-gray-800 outline-0 focus:border-b-blue-500 p-1 text-base"
          />
        </div>
        <div className="mt-2 absolute right-0">
          <button className="text-white rounded-full px-8 py-1 mr-2 hover:bg-sky-700">
            Cancel
          </button>
          <button 
             onClick={handleCommentPost}
             className={`rounded-full px-8 py-1 ${
               firstCharacterEntered ? 'bg-sky-700 text-white-500': 'bg-gray-500 text-gray-600' 
             }`}
             disabled={isSubmitDisabled} // Disable the button when isSubmitDisabled is true
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentInputCard;
