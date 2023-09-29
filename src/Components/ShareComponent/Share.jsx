import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaPinterestP, FaWhatsapp, FaReddit } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, TumblrShareButton, PinterestShareButton, WhatsappShareButton, RedditShareButton } from 'react-share';
import './Share.css'

const SocialMediaShare = () => {
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
        <li><FacebookShareButton url={window.location.href}><FaFacebookF /></FacebookShareButton></li>
        <li><TwitterShareButton url={window.location.href}><FaTwitter /></TwitterShareButton></li>
        <li><LinkedinShareButton url={window.location.href}><FaLinkedinIn /></LinkedinShareButton></li>
        <li><TumblrShareButton url={window.location.href}><FaTumblr /></TumblrShareButton></li>
        <li><PinterestShareButton url={window.location.href}><FaPinterestP /></PinterestShareButton></li>
        <li><WhatsappShareButton url={window.location.href}><FaWhatsapp /></WhatsappShareButton></li>
        <li><RedditShareButton url={window.location.href}><FaReddit /></RedditShareButton></li>
      </ul>
    </div>
  );
};

export default SocialMediaShare;
