import React from "react";
import "../../Styles/Network.css";
import map from "../../Assets/Everywhere/map.png"
import Slideshow from "./Slideshow";
const Network = () => {
  return (
    <div className="NetworkMainContainer">
      <div className="NetworkContainer">
        <div className="NetWorkContainerParts-1">
          <p className="NetWorkp1">A CHAI</p>
          <p className="NetWorkp2">NETWORK!</p>
          <p className="NetWorkp3">
            Families are bound by emotions, and tea lovers are bound by their
            love for tea. All these tea lovers across India have created a Chai
            Network that takes pride in being associated with Chintamani
            Amruttulya. This ever-expanding network is always open to including
            newer entrepreneurs passionate about growing together.
          </p>
        </div>
        <div className="NetWorkContainerParts-2">
          <div className="NetWorkCardsContainer">
            <div>
              <p className="NetworkAmount">5+</p>
              <p>Years Legacy</p>
            </div>
            <div>
              <p className="NetworkAmount">6+</p>
              <p>Signature Products</p>
            </div>
            <div>
              <p className="NetworkAmount">250+</p>
              <p>Branches</p>
            </div>
            <div>
              <p className="NetworkAmount">2L+</p>
              <p>Daily Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="CupMapContainer">
        <div className="mapNetwork">
          <img className="mapNetworkimg" src={map} alt="" />
        </div>
        <div className="netWorkSilderShow">
        <Slideshow/>
        </div>
      </div>
    </div>
  );
};

export default Network;
