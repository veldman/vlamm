import * as React from "react";

import * as classNames from "classnames";

import { Column, Columns } from "src/components/Bulma/Columns";
import { Translate } from "src/i18n/Translate";
import image from "../../images/me_256_256.jpg";
import styles from "./Me.module.scss";

export const Me: React.SFC = () => (
  <section className="section has-background-light">
    <div className="container is-fluid has-text-centered">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className={classNames("image is-128x128", styles.image)}>
              <img className="is-rounded" src={image} />
            </figure>
            <h1 className="title">Kenneth Veldman</h1>
            <Columns>
              <Column
                offset="one-quarter"
                size="half"
                className="has-text-justified"
              >
                <p>
                  <Translate msgid="Web developer since a young age with an interest in every aspect of software and hardware." />
                </p>
                <p>
                  <Translate msgid="currentlyLivingAndWorking" />
                </p>
                <p>
                  <Translate msgid="activitiesPrevCompanies" />
                </p>
              </Column>
            </Columns>
          </div>
        </div>
      </div>
    </div>
  </section>
);
