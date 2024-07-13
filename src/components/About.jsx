import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="info">
        <h2>About Me</h2>
      </div>
      <div className="container aboutInfo">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h4>I’m <span>Moamen Hussein</span>, a Web developer</h4>
            <h6>
              I’m a front-end web developer with a strong passion for creating
              visually appealing and user-friendly web applications. I am very
              passionate about improving my coding skills & developing
              applications & websites. I have also gained a solid foundation in
              HTML, CSS, JavaScript, and ReactJs. I am always eager to learn new
              technologies and techniques to enhance my skillset.
            </h6>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 containerIformations">
            <p>Age: 21</p>
            <p>Email: moamenhussein2424@gmail.com</p>
            <p>Place: Tanta, Al Garbiyah, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
