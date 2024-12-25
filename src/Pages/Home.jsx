import React from "react";
import Slider from "../Components/Slider";
import HeaderSection from "../Components/HeaderSection";
import OurProducts from "../Components/OurProducts";
import khalbtta from "../Assets/Everywhere/qualityImg.png";
import ReactWhatsapp from "react-whatsapp";
import "../Styles/Home.css";
import { RiWhatsappLine } from 'react-icons/ri';
import { MdWifiCalling3 } from 'react-icons/md';
const Home = () => {
  return (
    <div>

      <div className="callOnMobile">
        <a href="tel: +91 7768910285"><MdWifiCalling3 size="27px" className="MdWifiCalling3" /></a>
      </div>
      <div className="ReactWhatsApp">
      <ReactWhatsapp
          number="7768910285"
           className="ReactWhatsapptext"
          message="Hello Chintamani Amrutulya"
        >
          <RiWhatsappLine  size="40px"  className="ReactWhatsAppicon"/>
        </ReactWhatsapp>
      </div>
      <div>
        <Slider />
      </div>
      <div className="Quality">
        <p className="QualityPara">QUALITY IS</p>
        <p className="QualityPara">DEFINITELY</p>
        <p className="QualityPara nexparaqua">OUR CUP OF TEA</p>
        <div className="QualityImg">
          <img src={khalbtta} className="QualityImgimg" alt="" />
        </div>
      </div>
      <div>
        <HeaderSection />
      </div>
      <div>
        <OurProducts />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
