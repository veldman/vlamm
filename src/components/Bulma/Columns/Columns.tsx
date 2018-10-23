import * as React from "react";

import * as classNames from "classnames";

interface IColumnsProps {
    className?: string;
}

export const Columns: React.SFC<IColumnsProps> = ({ children, className }) => (
  <div className={classNames("columns", className)}>{children}</div>
);
