import React from "react";

export default function SideMenuHeader(props) {
  const expand = props.expand;
  if (!expand) {
    return (
      <div className="side_menu_header">
        <img
          style={{ marginInlineStart: 0 }}
          className="d-block side_menu_header logo"
          src={expand ? "/logo.png" : "/logo2.png"}
          alt="Shooty"
        />
        <div className="d-inline workspace_avatar">R</div>
      </div>
    );
  }
  return (
    <div className="side_menu_header">
      <img
        className="d-block side_menu_header logo"
        src="/logo.png"
        alt="Shooty"
      />
      <span className="workspace_title">Workspace</span>
      <div className="workspace">
        <div className="d-inline workspace_avatar">R</div>
        <span>Robert's workspace</span>
      </div>
    </div>
  );
}
