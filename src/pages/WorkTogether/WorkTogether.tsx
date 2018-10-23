import * as React from "react";

import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Translate } from "src/i18n/Translate";
import { Container, Section, Tile } from "../../components/Bulma/Layout";
import styles from "./WorkTogether.module.scss";

export const WorkTogether: React.SFC = () => (
  <Section background="light" className={styles.overflowTop}>
    <Container isFluid={true} alignment="centered">
      <Tile level="ancestor">
        <Tile level="parent">
          <Tile level="child" className="box">
            <h1 className="title">
              <Translate msgid="Interested in working together? Let's talk." />
            </h1>
            <p>
              <Translate msgid="I'm always interested in working together" />
            </p>
            <a href="mailto:veldman@vlamm.nl" className="button is-success">
              <span className="icon is-small">
                <FontAwesomeIcon icon="envelope" />
              </span>
              <span>Mail</span>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/kennethveldman/"
              className="button is-success"
              target="_blank"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={faLinkedin as IconDefinition} />
              </span>
              <span>LinkedIn</span>
            </a>{" "}
            <a
              href="https://twitter.com/Vlammnl"
              className="button is-success"
              target="_blank"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={faTwitter as IconDefinition} />
              </span>
              <span>Twitter</span>
            </a>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  </Section>
);
