import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/person.png";
const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 info">
            <h6>
              Welcome To My World <span>,</span>
            </h6>
            <h2>
              Hello I<span>’</span>am <span>Moamen Hussein , </span>
            </h2>
            <h5 className="job">A Frontend Developer.</h5>
            <p>
              A Frontend Developer. I am a self-taught frontend developer,
              Creating web pages and web applications is my passion. I am
              looking forward to being the kind of assistant you need to make
              your business flourish.
            </p>
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/moamenhussein">
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                    <i className="fa-brands fa-linkedin-in linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                    <i className="fa-brands fa-instagram insta"></i>
                  </a>
                </li>
                <li>
                  <Link to="/whatsapp">
                    <i className="fa-brands fa-whatsapp whats"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="btnTogeather" href="#contact">
              <span>Let's Work Together</span>
              <span className="ms-4">
                <i className="fa-solid fa-arrow-down"></i>
              </span>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={Image} alt="Image Person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
