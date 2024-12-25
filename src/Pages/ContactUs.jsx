
import React from "react";
import { BiMailSend } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsChatRightQuoteFill } from 'react-icons/bs';

import "../Styles/contactus.css";
import Connect from "../Components/franchieses/Connect";
import Footer from "../Components/Footer";
import chara from "../Assets/Everywhere/character.png";
const ContactUs = () => {
  return (
    <div className="ContactUsMain">
      <div className="ContactUsMainContainer">
        <div className="ContactUsMainPartFirst">
          <div className="ContactUsLogoAndhead">
            <div>
              <p className="ContactUsHeadp">
                CONTACT <span className="ConnectColor">US</span>{" "}
              </p>
              <p>
                it feedback, a grievance, a satisfactory experience or your love
                for Yewale tea, we are all ears to what you have to say. Contact
                us through the form below and wait for us to get back to you.
              </p>
            </div>
            <div>
              <img src={chara} className="ContactUsImg1" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ContactUsDetails">
        <div className="ContactUsDetailsMainCont">
          <div>
            <div className="ContactUsIconContainer">
              <div className="contaiContaine">
                <FiPhoneCall/>
                <p >CALL TODAY</p>
              </div>
              <p>+91 7768910285</p>
            </div>
          </div>
          <div>
            <div className="ContactUsIconContainer">
              <div className="contaiContaine">
              <BsChatRightQuoteFill/>
                <p>REQUEST A QUOTE</p>
              </div>
              <p>+91 7768910285</p>
            </div>
          </div>
          <div>
            <div className="ContactUsIconContainer">
              <div className="contaiContaine">
              <BiMailSend/>
                <p> EMAIL US</p>
              </div>
              <p>chintamaniamruttulya@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Connect />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
