import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaPinterestP, FaWhatsapp, FaReddit } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, TumblrShareButton, PinterestShareButton, WhatsappShareButton, RedditShareButton } from 'react-share';
import './Share.css'

const SocialMediaShare = ({ url }) => {
  const [socialOpened, setSocialOpened] = useState(false);

  const handleSocialToggle = () => {
    setSocialOpened(!socialOpened);
  };
  const iconStyle = "flex bg-sky-400 text-white	border border-black	rounded-2xl w-8 h-8 justify-center";

  return (
    <div className="social-media-share ">
      <button 
        className={`toggle ${socialOpened ? 'active' : ''}`}
        onClick={handleSocialToggle}
      >
        <i className="fas fa-share-alt"></i>
      </button>
      <ul className={`list-social transition-opacity ${socialOpened ? 'opacity-100' : 'opacity-0'} duration-500`}>
        <li className="flex bg-sky-400	border border-black	rounded-2xl w-8 h-8 justify-center">
          <FacebookShareButton 
            url={url}
            size={32}
            bgStyle={{color: "fill"}}
            round={true}
            borderRadius={10}
          >
            <FaFacebookF className="text-white"/>
          </FacebookShareButton>
        </li>
        <li className={iconStyle}
        ><TwitterShareButton url={url}><FaTwitter /></TwitterShareButton></li>
        <li className={iconStyle}
        ><LinkedinShareButton url={url}><FaLinkedinIn /></LinkedinShareButton></li>
        <li className={iconStyle}
        ><TumblrShareButton url={url}><FaTumblr /></TumblrShareButton></li>
        <li className={iconStyle} 
        ><PinterestShareButton url={url}><FaPinterestP /></PinterestShareButton></li>
        <li className={iconStyle}
        ><WhatsappShareButton url={url}><FaWhatsapp /></WhatsappShareButton></li>
        <li className={iconStyle}
        ><RedditShareButton url={url}><FaReddit /></RedditShareButton></li>
      </ul>
    </div>
  );
};

export default SocialMediaShare;
