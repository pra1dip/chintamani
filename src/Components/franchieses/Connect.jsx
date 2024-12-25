import React from "react";
import "../../Styles/Connect.css";
const Connect = () => {
  return (
    <div className="MainConnectContainer">
      <div className="ConnectContainer">
        <div className="ConnectHead">
          <p></p>
        </div>
        <form action="https://formspree.io/f/xyyaever" method="POST">
          <div className="ContactDivs">
            <div className="ConnectHead">
              <p>
                {" "}
                GET A <span className="ConnectColor">FRANCHISE</span>
              </p>
            </div>
            <div className="NameContactInput">
              <div>
                <input
                  type="text"
                  name="Contact Person Name"
                  placeholder="Full Name*"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Contact Person Number"
                  placeholder="Contact Number*"
                  required
                />
              </div>
            </div>
            <div className="NameContactInput">
              <div>
                <input
                  type="email"
                  name="Contact Person Email"
                  placeholder="Email id*"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Contact Person City"
                  placeholder="City*"
                  required
                />
              </div>
            </div>
            <div className="NameContactAdress">
              <textarea
                name="Message"
                id="TEXTaREA"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="buttonContact">
              <input type="submit" className="ConnectBtn" value="Connect" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
