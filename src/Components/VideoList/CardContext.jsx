import { AiOutlineEye } from "react-icons/ai";
import { BsChatLeft, BsPeople } from "react-icons/bs"; 
import useTimeAgo from "../../hooks/useTimeAgo";
import generateInitials from '../../utils/initialsUtils';
import Logo from '../../assets/logo.jpeg';

function CardContext({context}){
    const style = { color: "grey", fontSize: "1.5em" }
    const timeAgo = useTimeAgo(context.createdAt)
    // const initials = generateInitials(context.author);
    // console.log(JSON.stringify(context));

    return(
        <div id="box1" className="mt-3 ml-3">
            <div id="box1row1" className="flex">
            <div id="box1column1" className="flex items-center justify-center">
                <div id="imagecontainer" className="mr-6">
                    <img
                     src={Logo} 
                     alt="logo"
                     style={{
                        width: '50px',
                        height: '50px'
                    }} 
                     />
                </div>
                <div>
                    <div>
                        <span className="text-base font-normal text-sm">Hello Vibe</span>
                        <span className="font-sans font-light tracking-tight text-xs text-gray-500 ml-2">{timeAgo}</span>
                    </div>
                    <div>
                        <span className="flex items-center justify-center">
                            <BsPeople/>
                            <pre className="text-sm ml-1 tracking-tight text-gray-500">Community Edition</pre>
                        </span>
                    </div>
                </div>
            </div>
            <div id="box1column2" className="flex items-center justify-center ml-3">
                <span className="flex items-center justify-center">
                    <AiOutlineEye style={style}/>
                    <pre className="text-sm">{context?.views}</pre>
                </span>
                <span className="flex items-center justify-center ml-2">
                    <BsChatLeft style={{color: 'grey', fontSize: '1.1em'}}/>
                    <pre className="text-sm">0</pre>
                </span>
            </div>
            </div>
            <div>
                {context.tags.map((tag,index) => {
                   return <span 
                             className="mr-2 rounded-full border-sky-400 border px-1 font-serif text-inherit"
                             key={index}
                          >
                             #{tag}
                          </span>
                })}
            </div>
            <div className="mt-2 mb-3 text-lg font-bold">
                <span>{context.videoTitle}</span>
            </div>
            <div></div>
        </div>
    )
}

export default CardContext;