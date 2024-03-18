/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import "../../Style/SideMenu.css"
import SideMenuBody from "./Components/SideMenuBody"
import SideMenuHeader from "./Components/SideMenuHeader"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

export default function SideMenu() {
  const [expand, setExpand] = useState(false)
  const expandMenu = () => {
    if (expand) {
      document.getElementById("side_menu").style.width = "70px"
    } else {
      document.getElementById("side_menu").style.width = "250px"
    }
    setExpand((prevState) => !prevState)
  }
  return (
    <div id="side_menu" className="side_menu">
      <SideMenuHeader expand={expand} />
      <SideMenuBody expand={expand} />
      <a className="expand_button" href="#" onClick={expandMenu}>
        {expand ? <AiOutlineLeft /> : <AiOutlineRight />}
      </a>
    </div>
  )
}
