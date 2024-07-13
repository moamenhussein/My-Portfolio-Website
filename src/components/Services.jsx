import React from "react";

const Services = () => {
  return (
    <div className="serices" id="services">
      <div className="info">
        <h2>My Services</h2>
        <p>This is what i can do for you</p>
      </div>
      <div className="container text-center">
        <div className="row informationContainer">
          <div className="col-lg-4 col-md-6 col-sm-12 information">
            <i className="fa-solid fa-code"></i>
            <h2>
              HTML<span>5</span>/CSS<span>3</span>
            </h2>
            <p>Responsive Development</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 information">
            <i className="fa-solid fa-laptop-code"></i>
            <h2>
              Next<span>.</span>js<span>/</span>React
            </h2>
            <p>Web App Development</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 information">
            <i className="fa-solid fa-pen-to-square"></i>
            <h2>
              Editing <span>&</span> Re-design
            </h2>
            <p>Editing Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
