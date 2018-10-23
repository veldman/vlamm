import * as React from "react";

import * as classNames from "classnames";

export interface IContainerProps {
  alignment?: Bulma.Alignment;
  isFluid?: boolean;
}

export const Container: React.SFC<IContainerProps> = ({
  alignment,
  children,
  isFluid
}) => (
  <div
    className={classNames("container", {
      [`has-text-${alignment}`]: alignment,
      'is-fluid': isFluid
    })}
  >
    {children}
  </div>
);
