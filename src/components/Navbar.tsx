import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faInfoCircle, faSearch, faShare } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faBars} />
      <p>Dashboard</p>
      <div>
        <FontAwesomeIcon icon={faShare} />
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </div>
  )
}

export default Navbar