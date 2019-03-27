import React from "react";
import { globals } from "../d";

export default class Boxes extends React.Component {
  constructor() {
    super();
    this.state = {
      cnv: undefined,
      cnvRect: undefined,
      ctx: undefined,
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0
    }
  }

  componentDidMount() {
    this.setState((state) => {
      state.cnv = this.refs.cnv;
      state.ctx = this.refs.cnv.getContext("2d");

      return state;
    }, () => {
      // Called after 'setState' has finished.
      window.addEventListener("resize", () => this.resize());
      window.addEventListener("scroll", () => this.resize());
      this.state.cnv.addEventListener("mousemove", (e) => this.mouseMove(e));
      this.resize();
    });
  }

  resize() {
    this.setState((state) => {
      state.cnvRect = state.cnv.getBoundingClientRect();
      state.width = window.innerWidth;
      state.height = window.innerHeight - (globals.topBarHeight - 5);

      return state;
    }, this.draw);
  }

  mouseMove(e) {
    this.setState((state) => {
      state.mouseX = e.clientX - state.cnvRect.left;
      state.mouseY = e.clientY - state.cnvRect.top;
      return state;
    }, this.draw);
  }

  draw() {
    const ctx = this.state.ctx;

    ctx.clearRect(0, 0, this.state.width, this.state.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 0, .15)";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    for (let x = 12; x < this.state.width; x += 40) {
      for (let y = 12; y < this.state.height; y += 40) {
        const deltaX = x - this.state.mouseX;
        const deltaY = y - this.state.mouseY;
        let length = 15 - Math.sqrt(
          Math.pow(deltaX, 2) +
          Math.pow(deltaY, 2)
        ) / 30;
        length = Math.min(Math.max(length, 5), 15);
        ctx.fillRect(x, y, length, length);

        // const length = Math.sqrt(
        //   Math.pow(deltaX, 2) +
        //   Math.pow(deltaY, 2)
        // );
        // const unitX = -(deltaX / length) * 10;
        // const unitY = -(deltaY / length) * 10;

        // ctx.moveTo(x - unitX, y - unitY);
        // ctx.lineTo(x + unitX, y + unitY);
      }
    }

    ctx.stroke();
  }

  render() {
    return (
      <div id="flow-field" style={{ marginTop: globals.topBarHeight - 10 }}>
        <canvas ref="cnv" width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}