import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaPinterestP, FaWhatsapp, FaReddit } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, TumblrShareButton, PinterestShareButton, WhatsappShareButton, RedditShareButton } from 'react-share';
import './Share.css'

const SocialMediaShare = ({ url }) => {
  const [socialOpened, setSocialOpened] = useState(false);

  const handleSocialToggle = () => {
    setSocialOpened(!socialOpened);
  };

  return (
    <div className="social-media-share ">
      <button 
        className={`toggle ${socialOpened ? 'active' : ''}`}
        onClick={handleSocialToggle}
      >
        <i className="fas fa-share-alt"></i>
      </button>
      <ul className={`list-social transition-opacity ${socialOpened ? 'opacity-100' : 'opacity-0'} duration-500`}>
        <li><FacebookShareButton url={url}><FaFacebookF /></FacebookShareButton></li>
        <li><TwitterShareButton url={url}><FaTwitter /></TwitterShareButton></li>
        <li><LinkedinShareButton url={url}><FaLinkedinIn /></LinkedinShareButton></li>
        <li><TumblrShareButton url={url}><FaTumblr /></TumblrShareButton></li>
        <li><PinterestShareButton url={url}><FaPinterestP /></PinterestShareButton></li>
        <li><WhatsappShareButton url={url}><FaWhatsapp /></WhatsappShareButton></li>
        <li><RedditShareButton url={url}><FaReddit /></RedditShareButton></li>
      </ul>
    </div>
  );
};

export default SocialMediaShare;
