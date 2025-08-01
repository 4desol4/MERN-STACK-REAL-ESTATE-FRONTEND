import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-j65vry3p5rpawtf4.us.auth0.com"
     clientId="vUmfdDoNylN3hplt9u4iV7XPeRUeTRi1"
     authorizationParams={{
      redirect_uri: "https://mern-stack-real-estate-frontend.vercel.app/",
      audience:"http://localhost:8000",
      scope:"openid profile email"
     }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
