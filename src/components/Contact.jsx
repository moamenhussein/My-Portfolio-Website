import React from "react";
import contact from "../images/contact.png"
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="info">
        <h2>
          <i className="fa-solid fa-headset"></i>
          Get In <span>Touch</span>
        </h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={contact} alt="Contact Image"/>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <form>
              <input type="text" placeholder="Name" required/><br />
              <input type="email" placeholder="Email" required/><br />
              <textarea placeholder="Message"></textarea><br />
            </form>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
