import React from "react";
import ImageOne from "../images/html5.a7362949.svg";
import ImageTwo from "../images/css.svg";
import ImageThree from "../images/javascript.svg";
import ImageFour from "../images/Bootstrap.png";
import ImageFive from "../images/Saas.png";
import ImageSix from "../images/TypeScript.png";
import ImageSiven from "../images/TS & JS.png";
import ImageEight from "../images/react.dcb621ad.svg";
import ImageNine from "../images/git.7d475742.svg";
import ImageTen from "../images/github.16ac66a4.svg";
import ImageEleven from "../images/chrome.67b19d85.svg";
const Skills = () => {
  return (
    <div>
      <div className="skills" id="skills">
        <div className="container">
          <div className="info">
            <h2>
              My Tech Stack <span className="and">&</span> Tools
            </h2>
            <p>This is how i do my magic</p>
          </div>
          <div className="gallery">
            <img src={ImageOne} alt="" />
            <img src={ImageTwo} alt="" />
            <img src={ImageThree} alt="" />
            <img src={ImageFour} alt="" />
            <img src={ImageFive} alt="" />
            <img src={ImageSix} alt="" />
            <img src={ImageSiven} alt="" />
            <img src={ImageEight} alt="" />
            <img src={ImageNine} alt="" />
            <img src={ImageTen} alt="" />
            <img src={ImageEleven} alt="" />
            <img src={ImageOne} alt="" />
            <img src={ImageTwo} alt="" />
            <img src={ImageThree} alt="" />
            <img src={ImageFour} alt="" />
            <img src={ImageFive} alt="" />
            <img src={ImageSix} alt="" />
            <img src={ImageSiven} alt="" />
            <img src={ImageEight} alt="" />
            <img src={ImageNine} alt="" />
            <img src={ImageTen} alt="" />
            <img src={ImageEleven} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
