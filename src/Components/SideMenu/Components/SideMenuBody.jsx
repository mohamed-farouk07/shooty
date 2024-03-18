/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineFolderOpen,
} from "react-icons/ai";

export default function SideMenuBody(props) {
  var side_menu_body_item_text = "side_menu_body_item_text";
  if (!props.expand) {
    side_menu_body_item_text = "side_menu_body_item_text_collapsed";
  }
  return (
    <div className="side_menu_body">
      <a className="side_menu_body_item" href="#">
        <AiOutlineHome className="side_menu_body_item_icon" />
        <span className={side_menu_body_item_text}>Dashboard</span>
      </a>
      <a className="side_menu_body_item" href="#">
        <AiOutlineCreditCard className="side_menu_body_item_icon" />
        <span className={side_menu_body_item_text}>Projects</span>
      </a>
      <a className="side_menu_body_item" href="#">
        <AiOutlineTeam className="side_menu_body_item_icon" />
        <span className={side_menu_body_item_text}>Users</span>
      </a>
      <a className="side_menu_body_item" href="#">
        <AiOutlineCalendar className="side_menu_body_item_icon" />
        <span className={side_menu_body_item_text}>Calendar</span>
      </a>
      <a className="side_menu_body_item" href="#">
        <AiOutlineFolderOpen className="side_menu_body_item_icon" />
        <span className={side_menu_body_item_text}>Media</span>
      </a>
    </div>

  );
}
