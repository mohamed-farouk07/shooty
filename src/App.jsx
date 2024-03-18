import React from "react"
import SideMenu from "./Components/SideMenu/SideMenu"
import "./Style/Main.css"
import Body from "./Components/Body/Body"

export default function App() {
  return (
    <div className="d-flex flex-row">
      <SideMenu />
      <div style={{ flex: 1 }}>
        <Body />
      </div>
    </div>
  )
}
