import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ClerkProvider
    publishableKey={process.env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY}
  >
    <App />
  </ClerkProvider>
);
