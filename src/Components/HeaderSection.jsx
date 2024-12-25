import React from "react";
import "../Styles/HeaderSection.css";
import character from "../Assets/Everywhere/character.png";
const HeaderSection = () => {
  return (
    <div className="HeaderSction">
      <div className="headerContainer">
        <div className="HeaderInfo">
          <p className="HeaderInfoHeadf">PREMIUM QUALI-TEA</p>
          <p className="HeaderInfoHeads">PRODUCTS PLEN-TEA!</p>
          <p className="HeaderInfoHeadpara">
          Premium quality, sought after taste, carefully curated recipes, the
            original flavour of teas and some snack options that will refresh
            you from within. Explore our range of teas, beverages and other food
            products below.
          </p>
        </div>
        <div className="HeaderCharecter">
          <img src={character} className="HeaderCharecterimg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
