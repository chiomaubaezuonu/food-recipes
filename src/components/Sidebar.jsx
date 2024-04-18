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