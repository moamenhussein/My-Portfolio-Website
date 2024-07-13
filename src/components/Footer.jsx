import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <>
          <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2>Moamen Hussein</h2>
            <p className="mt-4">
              Welcome to my Portfolio! ❤️ I'm glad you're interested in getting
              in touch with me.
            </p>
            <p className="mt-4">
              If you have any questions, comments, or just want to say hello,
              you can use the contact form above.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="mt-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/"> Portfolio</Link>
              </li>
              <li>
                <Link to="/"> Tutorials</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2>Find Me on Social Media</h2>
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
          </div>
        </div>
      </div>
    </div>
    <div className="footerTwo">
      <h3>&copy; <span>2024</span> Made with <span>❤</span> by <span>Eng / Moamen Hussein</span></h3>
    </div>
    </>
  );
};

export default Footer;
