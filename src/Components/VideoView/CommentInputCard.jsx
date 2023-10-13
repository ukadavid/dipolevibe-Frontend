import { apiPostComment } from '../../Context/Api/Axios';
import Logo from "../../assets/logo.jpeg"

const handleCommentPost = () => {
  try{
    apiPostComment(`comments/public-video/${videoId}`);
  }
  catch(error){
    console.error('Error posting comment:', error);
  }
}

function CommentInputCard() {
    return (
      <div className="flex items-center py-2">
        <div className="mr-2">
          <img src={Logo} alt="logo" className="h-12 w-12 rounded-full" />
        </div>
        <div className="w-full">
          <div className="relative border-b-4 border-indigo-500">
            <input
              type="text"
              placeholder=" "
              className="w-full dark:bg-gray-800 border-none border-b-4 border-indigo-500 focus:border-b-blue-500 p-1 text-base"
            />
            <label
              htmlFor="commentField"
              className="absolute bottom-0 left-0 p-1 text-gray-500 transition-all transform origin-bottom"
            >
              Add a comment
            </label>
          </div>
          <div className="mt-2">
            <button className="text-white px-8 py-1 mr-2">
              Cancel
            </button>
            <button className="text-gray-500 rounded-full bg-slate-600 px-8 py-1">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

export default CommentInputCard;