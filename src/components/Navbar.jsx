import React from "react"
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faSearch, faShare } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="right-nav">
        <p className="logo">F<span style={{ color: "orange" }}>ood</span>bank</p>
        <div className="nav-icons">
          <a href="#!" className="nav-icon--link"> <FontAwesomeIcon className="icon" icon={faShare} /></a>
          <a href="#!" className="nav-icon--link"> <FontAwesomeIcon icon={faSearch} /></a>
          <a href="#!" className="nav-icon--link"> <FontAwesomeIcon icon={faInfoCircle} /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar