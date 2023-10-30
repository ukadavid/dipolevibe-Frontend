import { useState, useEffect } from "react";
import { BiBadgeCheck } from "react-icons/bi";
import InputBox from "./InputBox";
import { apiPostReply } from "../../Context/Api/Axios";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import useTimeAgo from "../../hooks/useTimeAgo";
import generateInitials from "../../utils/initialsUtils";

function CommentCard({ comment, showReplies, toggleReplies, setReplyUpdatee }) {
  const author = comment.author;
  const newInitials = generateInitials(author);
  const [replyComments, setReplyComment] = useState([]);
  const [activeReplyComment, setActiveReplyComment] = useState(false);
  const [isActiveReplyButton, setReplyState] = useState(false);
  const newTimeAgo = useTimeAgo(comment.timestamp);
  const commentId = comment._id;
   
  {
    isActiveReplyButton;
  }

  const handleReplyPost = (replyText) => {
    try {
      console.log(replyText);
      apiPostReply(`/reply/${commentId}`, { text: replyText });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex mt-8 items-center py-2 mt-2">
        <div className="mr-2">
          <div className="h-12 w-12 rounded-full text-white bg-gray-300 flex items-center justify-center">
            {newInitials}
          </div>
        </div>
        <div>
          <div className="flex items-center text-white">
            <span className="text-blue-600 mr-1">
              {comment.authorPaid ? <BiBadgeCheck /> : ""}
            </span>
            <span>{comment.author}</span>
            <span className="text-zinc-400 text-xs ml-2 ">{newTimeAgo} </span>
          </div>
          <div className="text-white">
            <span>{comment.text}</span>
          </div>
        </div>
      </div>
      <div className="flex mb-8 items-center relative mt-0.5 left-4">
        <button
          className="relative left-6 text-white text-sm rounded-full px-4 py-1 hover:bg-gray-500"
          onClick={() => {
            console.log("isActiveReplyButton " + isActiveReplyButton);
            setReplyState(true);
          }}
        >
          Reply
        </button>
        <div className="flex items-center justify-center relative left-4 rounded-full px-4 py-1 hover:bg-gray-500">
          {comment.replies && comment.replies.length > 0 && (
            <>
              <div className="absolute top-0.5 left-0 text-sky-500">
                {showReplies ? (
                  <RiArrowUpSFill className="w-6 h-6" />
                ) : (
                  <MdArrowDropDown className="w-6 h-6" />
                )}
              </div>
              <button
                className="text-white text-sm ml-2"
                onClick={() => toggleReplies(commentId)}
              >
                {comment.replies.length === 1
                  ? "1 reply"
                  : `${comment.replies.length} replies`}
              </button>
            </>
          )}
        </div>
      </div>
      <>
        {isActiveReplyButton && (
          <InputBox
            type={"Reply"}
            postReplyComment={handleReplyPost}
            commentId={commentId}
            setReplyState={setReplyState}
            setReplyUpdate={setReplyUpdatee}
          />
        )}
      </>
    </>
  );
}

export default CommentCard;
