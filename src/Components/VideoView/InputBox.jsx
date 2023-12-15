import { useState } from 'react';
import { PiUser } from 'react-icons/pi';
import { apiPostComment } from '../../Context/Api/Axios';
import generateRandomName from '../../utils/generateRandomName';

function InputBox({
  postMainComment,
  postReplyComment,
  type,
  setReplyState,
  onReplyUpdate,
  setCommentUpdate
}) {
  const [activeReply, setReply] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Initial state, submit button is disabled
  const [firstCharacterEntered, setFirstCharacterEntered] = useState(false); // Initial state, first character not entered



  const comment = {
    _id: "",
    text: commentText,
    author: generateRandomName(),
    userId: "",
    authorPaid: "false",
    PubliVideo: "",
    timestamp: Date.now(),
  }

  const commentContainer = {
    comment: comment,
    replies: []
  }

  const triggerCommentPost = () => {
    // Check if the comment text is not empty
    if (commentText.trim() !== "") {
      // Call the postMainComment function and pass the comment text as an argument
      postMainComment(commentText);
      setCommentUpdate(commentContainer);
      resetInputState();
    }
  };

  const triggerReplyPost = () => {
    postReplyComment(commentText);

    const data = commentText;
    onReplyUpdate(data);
    console.log("we have called function: onReplyState")

    resetInputState();
  };

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
  };

  const resetInputState = () => {
    // Clear the input field after posting
    setCommentText("");
    setIsSubmitDisabled(true); // Disable the submit button after posting
    setFirstCharacterEntered(false); // Reset the first character flag
  };

  return (
    <div className="flex items-center py-2">
      <div className="flex items-center justify-center h-12 w-12 rounded-full border border-inherit bg-gray-400 hover:border-sky-400">
        <PiUser className="text-white h-6 w-6 hover:text-sky-400" />
        {/* <img src={Logo} alt="logo" className="h-12 w-12 rounded-full" /> */}
      </div>
      <div className="w-full relative">
        <div className="relative border-b-4 border-indigo-500 text-white">
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={handleInputChange}
            className="w-full dark:bg-gray-800 outline-0 focus:border-b-blue-500 p-1 text-slate-600"
          />
        </div>
        <div className="mt-2 absolute flex mb-8 right-0">
          <button
            className="text-slate-800 rounded-full px-8 py-1 mr-2 hover:bg-sky-700"
            onClick={() => setReplyState(false)}
          >
            Cancel
          </button>
          <button
            onClick={type == "Submit" ? triggerCommentPost : triggerReplyPost}
            className={`rounded-full px-8 py-1 ${
              firstCharacterEntered
                ? "bg-sky-700 text-white-500"
                : "bg-gray-500 text-gray-600"
            }`}
            disabled={isSubmitDisabled} // Disable the button when isSubmitDisabled is true
          >
            {type}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
