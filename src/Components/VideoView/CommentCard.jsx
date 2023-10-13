import Logo from "../../assets/logo.jpeg"

function CommentCard(){
    return(
        <div className="flex items-center py-2">
            <div>
                <img src={Logo} alt="logo" className="h-12 w-12 rounded-full"/>
            </div>
            <div>
                <div className="text-white"><span>userEmail</span></div>
                <div className="text-white"><span>text inputed</span></div>
            </div>
        </div>
    )
}

export default CommentCard;