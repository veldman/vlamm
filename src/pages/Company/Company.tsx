import * as React from "react";

import {
  faCss3Alt,
  faDocker,
  faGithub,
  faGitlab,
  faGrunt,
  faGulp,
  faHtml5,
  faJs,
  faLinux,
  faMailchimp,
  faNode,
  faPython,
  faReact,
  faSass,
  faSlack,
  faStackOverflow,
  faTrello,
  faVuejs,
  faWindows
} from "@fortawesome/free-brands-svg-icons";
import {
  faCubes,
  faTh,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as classNames from "classnames";

import { Translate } from "src/i18n/Translate";
import { Column, Columns } from "../../components/Bulma/Columns";
import { Container, Section, Tile } from "../../components/Bulma/Layout";
import styles from "./Company.module.scss";

export const Company: React.SFC = () => (
  <Section background="primary">
    <Container isFluid={true} alignment="centered">
      <Tile level="ancestor">
        <Tile level="parent">
          <Tile level="child" className="box">
            <Columns>
              <Column size="half" offset="one-quarter">
                <p>
                  <Translate msgid="companyIntro" />
                </p>
              </Column>
            </Columns>
            <hr />
            <Columns>
              <Column>
                <Columns className="is-size-1 has-text-info">
                  <Column className="has-text-success">
                    <FontAwesomeIcon
                      icon={faDocker as IconDefinition}
                      title="Docker"
                    />
                  </Column>
                  <Column>
                    <FontAwesomeIcon icon={faTh} title="Microservices" />
                  </Column>
                  <Column>
                    <FontAwesomeIcon icon={faCubes} title="Monolith" />
                  </Column>
                </Columns>
                <h3 className="subtitle">
                  <Translate msgid="Software Architecture" />
                </h3>
                <p>
                  <Translate msgid="softwareArchitectureText" />
                </p>
              </Column>
              <Column>
                <Columns className="is-size-1 has-text-info">
                  <Column>
                    <FontAwesomeIcon
                      icon={faVuejs as IconDefinition}
                      title="VueJS"
                    />
                  </Column>
                  <Column>
                    <FontAwesomeIcon
                      icon={faCss3Alt as IconDefinition}
                      title="CSS3"
                    />
                  </Column>
                  <Column className="has-text-success">
                    <FontAwesomeIcon
                      icon={faReact as IconDefinition}
                      title="React"
                    />
                  </Column>
                </Columns>
                <h3 className="subtitle">
                  <Translate msgid="Front-end Development" />
                </h3>
                <p>
                  <Translate msgid="frontendDevelopmentText" />{" "}
                  <a href="https://vuejs.org/">Vue.js</a>{" "}
                  <Translate msgid="and" />{" "}
                  <a href="https://reactjs.org/">React</a>.
                </p>
              </Column>
              <Column>
                <Columns className="is-size-1 has-text-info">
                  <Column>
                    <FontAwesomeIcon
                      icon={faWindows as IconDefinition}
                      title="Windows"
                    />
                  </Column>
                  <Column className="has-text-success">
                    <FontAwesomeIcon icon={faPython as any} title="Python" />
                  </Column>
                  <Column>
                    <FontAwesomeIcon
                      icon={faLinux as IconDefinition}
                      title="Linux"
                    />
                  </Column>
                </Columns>
                <h3 className="subtitle">
                  <Translate msgid="Back-end Development" />
                </h3>
                <p>
                  <Translate msgid="backendDevelopmentText" />
                </p>
              </Column>
            </Columns>
            <hr />
            <div className={styles.icons}>
              <h4>
                <Translate msgid="Each icon tells a story, just ask me!" />
              </h4>
              <div className={classNames("is-size-2", styles.spacing)}>
                <FontAwesomeIcon
                  icon={faGithub as IconDefinition}
                  title="Github"
                />
                <FontAwesomeIcon
                  icon={faGitlab as IconDefinition}
                  title="Gitlab"
                />
                <FontAwesomeIcon
                  icon={faGrunt as IconDefinition}
                  title="Grunt"
                />
                <FontAwesomeIcon icon={faGulp as IconDefinition} title="Gulp" />
                <FontAwesomeIcon
                  icon={faHtml5 as IconDefinition}
                  title="HTML5"
                />
                <FontAwesomeIcon
                  icon={faJs as IconDefinition}
                  title="Javascript"
                />
                <FontAwesomeIcon
                  icon={faMailchimp as IconDefinition}
                  title="Mailchimp"
                />
                <FontAwesomeIcon
                  icon={faNode as IconDefinition}
                  title="NodeJS"
                />
                <FontAwesomeIcon icon={faSass as IconDefinition} title="sass" />
                <FontAwesomeIcon
                  icon={faSlack as IconDefinition}
                  title="Slack"
                />
                <FontAwesomeIcon
                  icon={faStackOverflow as IconDefinition}
                  title="StackOverflow"
                />
                <FontAwesomeIcon
                  icon={faTrello as IconDefinition}
                  title="Trello"
                />
              </div>
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  </Section>
);
