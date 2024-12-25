import React from "react";
import "../Styles/OurProduts.css";
import NewPro from "../Assets/OurProducts/new.jpg";
import cookee from "../Assets/OurProducts/cookee.png";
import cake from "../Assets/OurProducts/cake.png";
import role from "../Assets/OurProducts/role.png";
import bhakarvadi from "../Assets/OurProducts/Bakarvadi.png";
import chintamani from "../Assets/OurProducts/chitamani.png";
import Footer from "./Footer";
import gul from "../Assets/OurProducts/gul.jpg"
import basundi from "../Assets/OurProducts/basundi.jpg"

const OurProducts = () => {
  return (
    <div className="OurProducts">
      <div className="OurProductsContainer">
        <div className="OurProductsCharecter">
          <img src={chintamani} className="OurProductsCharecterimg" alt="" />
        </div>
        <div className="OurProductsInfo">
          <p className="OurProductsInfoHeadf">OUR</p>
          <p className="OurProductsHeads">PRODUCTS</p>
          <p className="OurProductsHeadpara">
            The business of tea never just remains a business of tea! A great
            product range, multiple offerings, innovative taste and healthy
            options together make it a wholesome deal. We offer not just
            varieties of tea but milk products, cold beverages and food items
            that complement the beverages well.
          </p>
        </div>
      </div>
      <div className="MainProductsContainer">
        <div className="mainProductsCardContainer">
          <div className="ProductCards">
            <img src={NewPro} alt="" />
          </div>
          <div className="ProductCards">
            <img src={gul} alt="" />
          </div>
          <div className="ProductCards">
            <img src={basundi} alt="" />
          </div>
          <div className="ProductCards">
            <img src={NewPro} alt="" />
          </div>
          <div className="ProductCards">
            <img src={bhakarvadi} alt="" />
          </div>
          <div className="ProductCards">
            <img src={cookee} alt="" />
          </div>
          
         
          <div className="ProductCards">
            <img src={role} alt="" />
          </div>
          <div className="ProductCards">
            <img src={cake} alt="" />
          </div>
        </div>
      </div>

      <div className="setUp">
        <div className="setupbackImg">
          <img
            src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-7500/pdp/laptops_inspiron_15_7500_gy_pdp_mod-01.jpg?fmt=jpg"
            alt=""
          />
          <div className="overBlack"></div>
          <div className="overlayText">
            <div className="MainOverLayTextContainer">
              <div className="OverlayContainerHead">
                <p className="OverlayHp">
                  Franchise Outlet Setup Cost Starting From 1.50 Lacs
                </p>
                <p className="OverlayNexttHp">
                  We are working on customize module that allow franchise owner
                  to do interior work by their own with given and approved
                  standard
                </p>
              </div>
              <div className="overlayTextContainer">
                <div className="leftSidetextContainer">
                  <ul>
                    <li>Minimum 100 sq.ft. Shop area Require</li>
                    <li>Location need to have minimum 2000 cup sale per day</li>
                    <li>Franchise Term is Lifetime</li>
                    <li>FSSAI, Shop Act, Fire NOC, Licenses Require</li>
                    <li>
                      Interior Work Include, Decoration, Plumbing, Civil, ACP
                      panel, Sign Board
                    </li>
                  </ul>
                </div>
                <div className="rightSidetextContainer">
                  <ul>
                    <li>Furniture Work Include Customize Cash Counter</li>
                    <li>
                      SS Material Consist Sink Pot, Service Table, Gas Burner
                    </li>
                    <li>OPTIONAL – Statue and Ducting for Kitchen</li>
                    <li>Franchise fees – Free</li>
                    <li>100% Fresh and Unique Taste</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////SecondStup///////////////////////////// */}
      <div className="SecondStup">
        <div className="SecondStupContainer">
          <div className="leftSecondStupContainer">
            <ul>
              
              <li>High Quality and Low cost Franchise Module</li>
              <li>Low Investment, Only Outlet Setup</li>
              <li>Safe Business as there is always demand for Tea in Market place</li>
              <li>100% assistance given to enable ready to run shop including for machinery, Process etc.</li>
              <li>Very High margin. Upto 2 lakhs net profit a month, depending on location etc.</li>
              <li>All raw material suppliers provided</li>
              <li>Friendly and professional support</li>
              <li>Become independent. Own, Get Discount on multiple franchises in future</li>
             <li>Become independent. Own, Get Discount on multiple franchises in future</li>
            
            </ul>
          </div>
          <div className="rightSecondStupContainer">
            <ul>
              <li>High Standard style shop designing</li>
              <li>Ready to run, A-Z setup done by our appointed third party contractor</li>
              <li>Shop requirement – 100 sq. ft. to 200 sq. ft.</li>
              <li>Fully training provided, as many and whenever required. Full training also given to Owner staff.</li>
              <li>Easy to run. No experience required.</li>
              <li>Promotion material and promotion methods provided to increase sales.</li>
              <li>Become, or help your family member / friend become, a proud owner of a successful Franchise.</li>
            </ul>
          </div>
        </div>
      </div>

    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default OurProducts;
