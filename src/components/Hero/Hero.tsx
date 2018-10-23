import * as React from "react";
// import { NavBar } from "../NavBar";

const styles = require("./Hero.module.scss");

// const logo = require("../../images/logos/512x512.png");


export const Hero: React.SFC = () => {
  return (
    <>
      <section className={`hero is-fullheight is-dark ${styles.root}`}>
        <div className={`hero-body has-text-centered ${styles.body}`}>
          <div className="container">
            {/* <NavBar /> */}
            {/* <article className="media">
              <figure className="media-left">
                <p className="image is-128x128">
                  <img src={logo} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-1">Vlamm</h1>
                  <h2 className="subtitle">IT Solutions</h2> */}
                  {/* <a href="mailto:veldman@vlamm.nl">veldman@vlamm.nl</a><br/>
            <a href="https://twitter.com/Vlammnl">@vlammnl</a> */}
                {/* </div>
              </div>
            </article> */}
          </div>
        </div>
      </section>
      {/* <section className={`hero is-fullheight is-dark`}>
        <div className={`hero-body has-text-centered ${styles.body}`}>
          <div className="container">
            <p>test</p>
          </div>
        </div>
      </section>

      <section className={`hero is-fullheight is-dark`}>
        <div className={`hero-body has-text-centered ${styles.body}`}>
          <div className="container">
            <p>test</p>
          </div>
        </div>
      </section>

      <section className={`hero is-fullheight is-dark`}>
        <div className={`hero-body has-text-centered ${styles.body}`}>
          <div className="container">
            <p>test</p>
          </div>
        </div>
      </section> */}
    </>
  );
};
