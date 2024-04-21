import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='sidebar'>
      <FontAwesomeIcon onClick={() => setOpenSideBar(true)} className='hamburger' icon={faBars} />
      {/* <FontAwesomeIcon icon={faCode} /> */}
      {openSideBar && <p style={{color:"grey", top:"14rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus laudantium deleniti magnam nemo repudiandae mollitia fuga corporis minus ut sapiente culpa cumque ducimus, quo quas excepturi natus alias et numquam, inventore porro ex quam eum similique? Asperiores atque temporibus eveniet fugiat corporis veritatis qui tenetur illum, nesciunt ut laudantium.</p>}
    </div>

  )
}

export default Sidebar
import React, { useState } from "react"
// import Sidebar from "./Sidebar"
// import { Button, Modal } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInfoCircle, faSearch, faShare } from "@fortawesome/free-solid-svg-icons"
// import {
//   EmailIcon,
//   EmailShareButton,
//   FacebookIcon,
//   FacebookShareButton,
//   TwitterIcon,
//   TwitterShareButton,
//   WhatsappIcon,
//   WhatsappShareButton,
// } from "react-share";

// const Navbar = () => {
//   const shareUrl = "https://haven-foodbank.netlify.app/"//fetches the current url of page
//   const [shareTo, setShareTo] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div className="navbar">
//       <Sidebar />
//       <div className="right-nav">
//         <a href="#menu"><p className="logo">F<span style={{ color: "orange" }}>ood</span>bank</p></a>
//         <div className="nav-icons">
//           <a href="#!" className="nav-icon-link" onClick={showModal}> <FontAwesomeIcon className="icon" icon={faShare} /></a>
//           <a href="#!" className="nav-icon-link"> <FontAwesomeIcon icon={faSearch} /></a>
//           <a href="#about" className="nav-icon-link"> <FontAwesomeIcon icon={faInfoCircle} /></a>
//         </div>
//       </div>
//       <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <WhatsappShareButton url={shareUrl}>
//           <WhatsappIcon size={8} round={true} />
//         </WhatsappShareButton >
//         <EmailShareButton url={shareUrl}>
//           <EmailIcon size={8} round={true} />
//         </EmailShareButton>
//         <TwitterShareButton url={shareUrl}>
//           <TwitterIcon size={8} round={true} />
//         </TwitterShareButton>
//         <FacebookShareButton url={shareUrl}>
//           <FacebookIcon size={8} round={true} />
//         </FacebookShareButton>
//       </Modal>

//     </div>

//     // </div >
//   )
// }

// export default Navbar
