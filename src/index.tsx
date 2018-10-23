import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import 'animate.css';
import './fontawesomeRegistration';
import "./styles/bulma.scss"; 

import { Home } from "./pages/Home";

ReactDOM.render(<Home />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
