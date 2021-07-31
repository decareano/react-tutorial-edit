import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from "./login-button";
//import LoginButton from "./login-button";

ReactDOM.render(
  <Auth0Provider
    domain="dev-dqd-oq6b.us.auth0.com"
    clientId="EC7ypdJS4x1v9q8qRQfibqeZskmPN9SX"
    redirectUri={window.location.origin}
  >
    <LoginButton />
  </Auth0Provider>,
  document.getElementById("root")
);

