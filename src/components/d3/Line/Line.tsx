import * as React from "react";

import { line } from "d3";

const lineData = [
  { x: 1, y: 5 },
  { x: 20, y: 20 },
  { x: 40, y: 10 },
  { x: 60, y: 40 },
  { x: 80, y: 5 },
  { x: 100, y: 60 }
];

class Line extends React.Component {
  public path: React.RefObject<SVGPathElement>;

  public componentDidMount() {
    // Hook up D3 renders
  }
  public componentWillReceiveProps() {
    // Hook up D3 renders
  }

  public render() {
    return (
      <svg width="200" height="200">
        <path ref={this.path} d={this.renderLine()(lineData) as string} stroke="blue" stroke-width="2" fill="none"/>
      </svg>
    );
  }

  private renderLine = () => {
    const l = line<{ x: number; y: number }>()
      .x(d => d.x)
      .y(d => d.y);
    return l;
  };
}

export default Line;
