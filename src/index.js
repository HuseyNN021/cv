import React from "react";
import ReactDOM from "react-dom";
// import Name from './Product'
import UserCv from "./UserCV";
const element = (
  <>
    <UserCv />
  </>
);

const rootElement = document.querySelector("#root");

ReactDOM.render(element, rootElement);
