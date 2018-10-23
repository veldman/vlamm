import * as React from "react";

import * as classNames from "classnames";

export interface ISectionProps {
  background?: "dark" | "light" | "primary";
  className?: string;
}

export const Section: React.SFC<ISectionProps> = ({ background, className, children }) => (
  <section
    className={classNames("section", className, {
      [`has-background-${background}`]: background
    })}
  >
    {children}
  </section>
);
