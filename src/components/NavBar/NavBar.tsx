// import * as _ from "lodash";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { LanguageContext } from "src/contexts/languageContext";
import { Languages } from "src/i18n/translations";

// import logoName from "../../images/logos/512_logo_name.png";

const style = require("./NavBar.module.scss");

const logo = require("../../images/logos/512x512.png");

interface INavBarProps {
  handleLanguageChange: (language: Languages) => void;
  containerHeight?: number;
  containerYPos?: number;
}

interface INavBarState {
  fixedTop: boolean;
  menuOpen: boolean;
}

export default class NavBar extends React.PureComponent<
  INavBarProps,
  INavBarState
> {
  public state: INavBarState = {
    fixedTop: false,
    menuOpen: false
  };

  public componentDidMount() {
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll, true);
    document.addEventListener("touchmove", this.handleScroll, true);
  }

  public componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("touchmove", this.handleScroll);
  }

  public render() {
    const { fixedTop, menuOpen } = this.state;
    return (
      <LanguageContext.Consumer>
        {lang => (
          <nav
            className={classNames(
              "navbar is-light",
              {
                "is-fixed-top": fixedTop
              },
              style.navbar
            )}
            role="navigation"
            aria-label="navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <div>
                    <img src={logo} />
                  </div>
                  <h1
                    className={classNames(
                      "has-text-dark",
                      style.heroTitle,
                      "animated",
                      {
                        fadeIn: !fixedTop,
                        fadeOut: fixedTop
                      }
                    )}
                  >
                    vlamm
                  </h1>
                </a>

                {fixedTop && (
                  <a
                    role="button"
                    className={classNames(
                      "navbar-burger burger animated slideInDown",
                      {
                        "is-active": menuOpen
                      }
                    )}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={this.handleBurgerClick}
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </a>
                )}
              </div>

              {fixedTop && (
                <div
                  className={classNames(
                    "navbar-menu has-background-transparent animated slideInDown",
                    {
                      "is-active": menuOpen
                    }
                  )}
                >
                  <div className="navbar-end">
                    <div className="navbar-item is-right">
                      <div className="buttons">
                        <a className="button is-success is-inverted is-medium has-background-transparent">
                          <span className="icon is-medium is-success">
                            <FontAwesomeIcon icon={faLinkedin as any} />
                          </span>
                        </a>
                        <a className="button is-success is-inverted is-medium has-background-transparent">
                          <FontAwesomeIcon icon="envelope" />
                        </a>
                      </div>
                    </div>
                    <div className="navbar-item">
                      <div className="field has-addons">
                        <span className="control">
                          <a
                            className={classNames(
                              "button is-text",
                              style.button,
                              {
                                "no-underscore": lang !== 'nl-NL'
                              }
                            )}
                            onClick={this.handleNlLanguage}
                          >
                            <span>NL</span>
                          </a>
                        </span>
                        <span className="control">
                          <a
                            className={classNames(
                              "button is-text",
                              style.button,
                              {
                                "no-underscore": lang !== 'en-GB'
                              }
                            )}
                            onClick={this.handleEnLanguage}
                          >
                            <span>EN</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        )}
      </LanguageContext.Consumer>
    );
  }

  private handleScroll = () => {
    const { containerHeight, containerYPos } = this.props;
    const boundingRect = (ReactDOM.findDOMNode(
      this
    ) as HTMLDivElement).getBoundingClientRect();

    if (containerHeight !== undefined && containerYPos !== undefined) {
      const fixedTop =
        containerHeight / 2 + containerYPos - boundingRect.height / 2 <= 0;
      this.setState({ fixedTop });
    }
  };

  private handleBurgerClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  private handleNlLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.props.handleLanguageChange("nl-NL");
  };
  private handleEnLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.props.handleLanguageChange("en-GB");
  };
}
