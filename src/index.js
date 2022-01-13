import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_4ckYH7azfFGscvq8s1OmQlV9Nh2dBmI",
  authDomain: "blog-f7632.firebaseapp.com",
  projectId: "blog-f7632",
  storageBucket: "blog-f7632.appspot.com",
  messagingSenderId: "999534760762",
  appId: "1:999534760762:web:2758ba9cf84da621363603",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
