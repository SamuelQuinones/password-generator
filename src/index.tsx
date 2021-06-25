//* Core
import React from "react"; //? is this import still needed?
import { render, hydrate } from "react-dom";
import "./styles/globals.scss";
import App from "./App";
//* PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
//* REDUX
import { Provider } from "react-redux";
import { store } from "store";
//* Translation
import "./lang/i18n";

const rootElement = document.getElementById("root") as HTMLElement;

const MyApp = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

//* https://github.com/stereobooster/react-snap#basic-usage-with-create-react-app
if (rootElement.hasChildNodes()) {
  hydrate(MyApp, rootElement);
} else {
  render(MyApp, rootElement);
}

//* Old code pre react-snap install
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();