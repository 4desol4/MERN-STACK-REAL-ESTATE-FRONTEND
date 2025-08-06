import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-eqf4gq8o2bmdznfe.us.auth0.com"
      clientId="3I249xLSHrMQtzOyWFnlmcL0ffTcMI27"
      authorizationParams={{
        redirect_uri: "https://mern-stack-real-estate-frontend.vercel.app/",
        audience: "http://localhost:8000",
        scope: "openid profile email",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
