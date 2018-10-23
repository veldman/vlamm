import * as React from "react";

import * as classNames from "classnames";

export interface ITile {
  level?: Bulma.TileLevel;
  color?: Bulma.Color;
  vertical?: boolean;
  className?: string;
}

export const Tile: React.SFC<ITile> = ({
  children,
  level,
  vertical,
  className,
  color
}) => (
  <div
    className={classNames("tile", className, {
      [`is-${level}`]: level,
      [`is-${color}`]: color,
      "is-vertical": vertical
    })}
  >
    {children}
  </div>
);
