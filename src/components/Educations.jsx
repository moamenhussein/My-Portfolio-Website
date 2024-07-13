import React from "react";
import ImageEducation from "../images/education.jpg";
const Educations = () => {
  return (
    <div className="educations">
      <div className="info">
        <div className="icon">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>
            My <span>Education</span>
          </span>
        </div>
        <p>
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img src={ImageEducation} alt="Image Education" />
          </div>
          <div className="col-lg-10 informatics">
            <h2>
              I study at the Faculty of Computers and Information, Tanta
              University, Department of Computer Science
            </h2>
            <p>Tanta University For Science & Technology</p>
            <h5>2024 – 2025 | Completed</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
