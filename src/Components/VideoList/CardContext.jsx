import { AiOutlineEye } from "react-icons/ai";
import { BsChatLeft, BsPeople } from "react-icons/bs";
import Logo from '../../assets/logo.jpeg';

function CardContext({context}){
    return(
        <div id="box1">
            <div id="box1row1" className="flex">
            <div id="box1column1" className="flex">
                <div id="imagecontainer">
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
                        <span>Hello Vibe</span>
                        <span>2 days</span>
                    </div>
                    <div>
                        <span className="flex"><BsPeople/>Loom's Community</span>
                    </div>
                </div>
            </div>
            <div id="box1column2" className="flex">
                <span className="flex"><AiOutlineEye/><pre>805</pre></span>
                <span className="flex"><BsChatLeft/><pre>0</pre></span>
            </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default CardContext;