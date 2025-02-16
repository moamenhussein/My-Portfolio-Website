import React from "react";

const MoreProjectsInfo = (props) => {
  return (
    <div className="portolio ">
      <div className="container">
        <div className="box">
          <img src={props.image} alt="" />
          <div className="information">
            <div className="info type">
              <p>
                {props.heading}
              </p>
              <p>
                Mar <span className="dash">18, 2023</span>
              </p>
            </div>
            <div className="skill">
              <div className="css">
                CSS <span className="dash">45.6%</span>
              </div>
              <div className="html">
                HTML <span className="dash">32.5%</span>
              </div>
              <div className="js">
                JavaScript <span className="dash">91.9%</span>
              </div>
            </div>
            <div className="sillsLogo">
              <i className="fa-brands fa-html5 html"></i>
              <i className="fa-brands fa-css3-alt css"></i>
              <i className="fa-brands fa-js js"></i>
            </div>
            <button className="showproject">
              <a href={props.link}>
                Show Project
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProjectsInfo;
