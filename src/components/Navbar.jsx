import React, { useState } from "react"
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faSearch, faShare } from "@fortawesome/free-solid-svg-icons"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Navbar = () => {
  const shareUrl = window.location.href //fetches the current url of page
  const [shareTo, setShareTo] = useState(false)

  return (
    <div className="navbar">
      <Sidebar />
      <div className="right-nav">
        <p className="logo">F<span style={{ color: "orange" }}>ood</span>bank</p>
        <div className="nav-icons">
          <a href="#!" className="nav-icon-link" onClick={() => setShareTo(true)}> <FontAwesomeIcon className="icon" icon={faShare} /></a>
          <a href="#!" className="nav-icon-link"> <FontAwesomeIcon icon={faSearch} /></a>
          <a href="#about" className="nav-icon-link"> <FontAwesomeIcon icon={faInfoCircle} /></a>
        </div>
      </div>
      {
        shareTo && <div className="share-to-container">
          <p className="close-share-modal" onClick={() => setShareTo(false)} style={{right:'0'}}>x</p>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={8} round={true} />
          </WhatsappShareButton >
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={8} round={true} />
          </EmailShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={8} round={true} />
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={8} round={true} />
          </FacebookShareButton>
        </div>
      }
    </div>
  )
}

export default Navbar