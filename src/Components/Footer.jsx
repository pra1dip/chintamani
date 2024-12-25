import React from "react";
import "../Styles/footer.css";
import { FaMapMarkerAlt, FaMobile } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

// import Brown from "../Assets/NavbarA/chintamani amruttulya brown logo.png"
const Footer = () => {
  return (
    <div className="MainContainer">
        <div className="Footer">
      <div className="FooterContainer">
        <div className="footerDivs-1">
          <div className="footerlogo"></div>
          <div className="FooterPara">
            <p>
              Chintamni tea, based out of Nashik, Maharashtra, has been winning the
              hearts of all tea lovers in Nashik and is now set out to stretch and
              expand its business not only in Maharashtra but all over the
              country.
            </p>
          </div>
        </div>
        <div className="footerDivs-2">
          <div className="footerDivs-2Head">QUICK LINKS</div>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Franchise Network</li>
              <li>Products</li>
              <li>Gallery</li>
              <li>News & Events</li>
              <li>Franchise Enquiry</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footerDivs-3">
          
          <div>
            <ul>
              <li>Tea</li>
              <li>Jaggery Tea</li>
              <li>Spongy Cake</li>
              <li>Bakarwadi</li>
              <li>Cream Roll</li>
              <li>Masala Tea</li>
              <li>Black Tea</li>
              <li>Water Bottle</li>
              <li>Lassi</li>
            </ul>
          </div>
        </div>
        <div className="footerDivs-4">
        <div className="footerDivs-4Head">GET IN TOUCH</div>
        <div className="footerIconAddress">
            <div className="Faddress">
                <div className="FooterLogoInfoAA"><FaMapMarkerAlt/></div>
                <div>Office no. 101, First floor, satana naka, malegaon (Nashik)- satana Rd, near by bus stop, Maharashtra- 423202</div>
            </div>
            <div className="Faddress Fmobile">
                <div className="FooterLogoInfo"><BsFillTelephoneFill/></div>
                <div>+91 7768910285</div>
            </div>
            <div className="Faddress Fmail">
                <div className="FooterLogoInfo"><GrMail/></div>
                <div>chintamaniamruttulya@gmail.com</div>
            </div>
        </div>
        <div className="WebContact">
            <div className="WebContactIcons"><BsFacebook/></div>
            <div className="WebContactIcons"><ImLinkedin/></div>
            <div className="WebContactIcons"><BsInstagram/></div>
            <div className="WebContactIcons"><BsTwitter/></div>
            <div className="WebContactIcons"><AiFillYoutube/></div>
        </div>
        </div>
      </div>
      
     </div>
      <div className="ProduceBy">
         <div className="ProduceContaint">
         <div>
            Copyright © 2023. All rights reserved.
            </div>
            <div className="vaibhav">
            <a target="_blank" href="https://www.instagram.com/vaibhav_v_j/">Proudly Scaled by Vaibhav Jadhav and Mohammad Saif</a>
            </div>
         </div>
            
      </div>
 </div>
  );
};

export default Footer;


