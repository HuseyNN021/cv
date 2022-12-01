import React, { Fragment } from "react";
import "./index.css";
import Info from "./Contacts";
import Tecrube from "./Experience";
const H1 = () => {
  return (
    <>
      <div className="DS">
        <div className="img">
          <img
            src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1800&t=st=1669848508~exp=1669849108~hmac=c71bc5c82f0db7564d1c880de9047dd38686d07e3eb6c0e78cc69f3e0673d8d6"
            alt="M"
            width="200px"
          />
          <div className="Name">
            <h1>
              <i>Huseyn</i>
            </h1>
            <h1>
              <i>Hesenov</i>
            </h1>
          </div>
        </div>
        <div className="info">
          <h1>Personal Info</h1>
          <p>Ad ve soyad:</p>
          <p>Huseyn Hesenov</p>
          <p>Yas:</p>
          <p>19</p>
          <p>Unvan:</p>
          <p>Nesimi rayonu,9cu mikrorayon,157 sayli mektebin yani</p>
        </div>
        <div className="add">
          <Info />
          <Tecrube />
        </div>
      </div>
    </>
  );
};

export default H1;
