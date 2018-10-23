import * as React from "react";

import * as classNames from "classnames";

export interface IColumn {
  size?: Bulma.Size | Bulma.SizeColumns;
  offset?: Bulma.Size | Bulma.SizeColumns;
  className?: string;
}

export const Column: React.SFC<IColumn> = ({ children, size, offset, className }) => (
  <div
    className={classNames("column", className, {
      [`is-${size}`]: size,
      [`is-offset-${offset}`]: offset
    })}
  >
    {children}
  </div>
);
