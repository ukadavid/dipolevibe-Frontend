import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { apiGetComment } from "../../Context/Api/Axios";

function MainCommentCard({ video, commentUpdate }) {
  const [hasComments, setComments] = useState(null);
  const [showReplies, setShowReplies] = useState({});
  const [replyUpdate, setReplyUpdate] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await apiGetComment(video._id);
      // API returns an array of comments
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  const toggleReplies = (commentId) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const handleReplyUpdate = (data) => {
    let params = data;
    setReplyUpdate(params);
  }

  useEffect(() => {
    if (hasComments === null) return;
    setComments((prev) => [...prev, commentUpdate]);
  }, [commentUpdate]);

  useEffect(() => {
    setTimeout(() => {
      fetchComments();
    }, 1000)
  }, [commentUpdate]);

  useEffect(() => {
    setTimeout(() => {
      fetchComments();
    },1000)
  },[replyUpdate])

  return (
    <>
      {hasComments ? (
        hasComments
          .slice()
          .reverse()
          .map((comment) => (
            <>
              <CommentCard
                comment={comment}
                showReplies={showReplies[comment._id]}
                toggleReplies={() => toggleReplies(comment._id)}
                onReplyUpdate={(data) => handleReplyUpdate(data)}
              />

              {showReplies[comment._id] && comment.replies ? (
                comment.replies.map((reply, i) => (
                  <div key={i} className="ml-4">
                    <CommentCard 
                      comment={reply} 
                      replyUpdate={replyUpdate}
                      // onReplyUpdate={() => handleReplyUpdate()} 
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </>
          ))
      ) : (
        <div>No comments</div>
      )}
    </>
  );
}

export default MainCommentCard;
