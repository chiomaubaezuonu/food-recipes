import React from "react"
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faSearch, faShare } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="right-nav">
        <p style={{ color: "green" }}>F<span style={{ color: "orange" }}>ood</span>bank</p>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faShare} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      </div>
    </div>
  )
}

export default Navbar