import React from "react";
import scanCode from "../../../images/scan-code.jpg";
import "./whatsApp.css";
const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <div className="info">
        <h2>WhatsApp Contact Page</h2>
        <p>scan the Qr code or just press the link</p>
      </div>
      <div className="container text-center whatsAppContainer">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h5>
              WhatsApp <span>Installed</span>
            </h5>
            <p>
              If You Have WhatsApp Installed On This Device Press The Button
              Below To Start Chat
            </p>
            <button className="start">
              <a href="https://wa.me/qr/O7BJLZVEUXVYK1">Start Chat</a>
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
            <h5>
              WhatsApp <span>Not Installed</span>
            </h5>
            <p>
              Scan The Qr Code Below With A Device Has WhatsApp Installed To
              Start Chat
            </p>
            <img src={scanCode} alt="Scan Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
