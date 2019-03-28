import React from "react";
import Boxes from "./boxes";
import style from "../style/page.scss";

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   this.refs.boxes.addEventListener("scroll", (e) => {
  //     console.log(e);
  //   });
  // }

  render() {
    return (
      <div style={style}>
        <div id="box-scroll">
          <div id="boxes">
            <Boxes />
          </div>
        </div>
        Test
      </div>
    );
  }
}