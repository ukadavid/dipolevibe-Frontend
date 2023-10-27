import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import InputBox from './InputBox';
import { apiGetComment ,apiPostComment } from "../../Context/Api/Axios";

function MainCommentCard({ video, commentUpdate }){
    const [hasComments, setComments] = useState(null);
    const [hasReply, setReply] = useState(null);
    const [isActiveReplyButton, setReplyState] = useState(false);
    const [showReplies, setShowReplies] = useState({});

    const fetchComments = async () => {
        try {
          const response = await apiGetComment(video._id);
          // API returns an array of comments
          setComments(response.data);
        } catch (error) {
          console.error('Error fetching comments', error);
        }
      };

    const toggleReplies = (commentId) => {
      setShowReplies((prevState) => ({
        ...prevState,
        [commentId]: !prevState[commentId]
      }));
    };

    useEffect(() => {
        if(hasComments === null) return;
        setComments((prev) => [...prev, commentUpdate]);
    },[commentUpdate])

    useEffect(() => {
        fetchComments();
    },[])

    return (
        <> 
            {hasComments ? hasComments.slice().reverse().map((comment) => (
            <>
                <CommentCard 
                   comment={comment} 
                   showReplies={showReplies[comment._id]}
                   toggleReplies={() => toggleReplies(comment._id)}
                />
    
            {showReplies[comment._id] && comment.replies ? comment.replies.map((reply) => (
              <div className="ml-4">
                <CommentCard 
                  comment={reply} 
                  reply={reply} 
                />   
              </div>  
            )):
               <></>
            }
            </>
            )):
            <div>No comments</div>
            }
        </>
        )
    
}

export default MainCommentCard;