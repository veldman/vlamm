import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { LanguageContext } from "src/contexts/languageContext";
import { Translate } from "src/i18n/Translate";
import { Languages } from "src/i18n/translations";
import { Company } from "./Company";
import { Intro } from "./Intro";
import { Me } from "./Me";
import { WorkTogether } from "./WorkTogether";

const initialState = {
  language: "nl-NL" as Languages
};

type IHomeState = Readonly<typeof initialState>;

export class Home extends React.Component<{}, IHomeState> {
  public state = initialState;
  public render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <ParallaxProvider>
          <div className="content">
            <Intro handleLanguageChange={this.LanguageChange} />
            <Company />
            <WorkTogether />
            <Me />
            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Vlamm</strong> <Translate msgid="by" /> Kenneth
                  Veldman.
                </p>
                {/* <p><a href="#"><Translate msgid="Terms and Conditions" /></a></p> */}
              </div>
            </footer>
          </div>
        </ParallaxProvider>
      </LanguageContext.Provider>
    );
  }

  private LanguageChange = (language: Languages) => this.setState({ language });
}
