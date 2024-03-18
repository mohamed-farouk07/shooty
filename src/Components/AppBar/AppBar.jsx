/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "../../Style/AppBar.css"
import { AiOutlineLeft, AiOutlineUser, AiOutlineDown } from "react-icons/ai"
import { MdOutlineDarkMode, MdNotificationsNone } from "react-icons/md"
import { Row, Col } from "react-bootstrap"

export default function AppBar() {
  return (
    <div className="appbar">
      <Row>
        <Col xs={5} md={7} lg={9}>
          <a style={{ textDecoration: "none", color: "grey" }} href="#">
            <AiOutlineLeft />
            <span> Back</span>
          </a>
        </Col>
        <Col>
          <MdNotificationsNone size={25} color="grey" />
          &nbsp;&nbsp;
          <MdOutlineDarkMode size={25} color="grey" />
          <div className="vr"></div>
          <div className="user-avatar">
            <AiOutlineUser size={20} />
          </div>
          <span style={{ color: "grey" }}>Robert N.</span>
          &nbsp;&nbsp;
          <AiOutlineDown color="grey" />
        </Col>
      </Row>
    </div>
  )
}
