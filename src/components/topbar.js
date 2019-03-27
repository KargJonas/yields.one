import React from "react";
import style from "../style/topbar.scss";
import { globals } from "../d";

export default function TopBar() {
  return (
    <div id="top-bar" style={style}>
      <h1 id="title" style={{ height: globals.topBarHeight }}>yields.one</h1>
    </div>
  );
}