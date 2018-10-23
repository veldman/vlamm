import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Languages } from "src/i18n/translations";
import NavBar from "../../components/NavBar/NavBar";
import { Translate } from "../../i18n/Translate";

const styles = require("./Intro.module.scss");

interface IIntroProps {
  handleLanguageChange: (language: Languages) => void;
}

interface IIntroState {
  height?: number;
  yPos?: number;
  showScroll: boolean;
}

class Intro extends React.Component<IIntroProps, IIntroState> {
  public state = {
    height: undefined,
    showScroll: true,
    yPos: undefined
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
    const { yPos, height, showScroll } = this.state;
    const { handleLanguageChange } = this.props;
    return (
      <section className={`hero is-fullheight is-light ${styles.root}`}>
        <div className={`hero-body has-text-centered ${styles.body}`}>
          <div className="container">
            <NavBar
              handleLanguageChange={handleLanguageChange}
              containerHeight={height}
              containerYPos={yPos}
            />
          </div>
        </div>
        <div
          className={classNames("hero-footer has-text-centered animated", {
            bounceOutUp: !showScroll,
            "delay-5s": showScroll,
            fadeIn: showScroll
          })}
        >
          <div className="is-size-5 has-text-weight-semibold has-text-primary animated bounce infinite slow">
            <p>
              <Translate msgid="scroll" />
            </p>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </section>
    );
  }

  /**
   * @deprecated
   */
  public handleScroll = () => {
    const boundingRect: ClientRect = (ReactDOM.findDOMNode(
      this
    ) as HTMLDivElement).getBoundingClientRect();
    this.setState({
      height: boundingRect.height,
      showScroll: boundingRect.top >= 0,
      yPos: boundingRect.top
    });
  };
}

export default Intro;
