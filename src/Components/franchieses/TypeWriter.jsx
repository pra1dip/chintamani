import React from "react";
import "../../Styles/TypeWriter.css";
import { Typewriter } from "react-simple-typewriter";
import Kitali from "../../Assets/Everywhere/KitaliSoneri.png"
const TypeWriter = () => {
  return (
    <div className="MainTypeWriter">
      <div className="TypeWriterContainerMain">
        <div className="TypeWriterParts-1">
          <div className="TypeHeadContainerHead">
            <p>EXPLORE A</p>
            <p id="TypeHeadContainerHeadpp">BUSINESS</p>
            <p id="TypeHeadContainerHeadpp">OPPORTUNI-TEA!</p>
          </div>
          <div id="TypeWriterContainer">
            <Typewriter
              words={[
                "एक कप चिंतामणी चहा चा...",
                "चिंतामणी चहा एकदा प्याल तर पुन्हा याल...!",
                "जगात चहाचा तुटवडा निर्माण झाला तर अर्धी लोकसंख्या डोकेदुखीने संपेल",
                " प्रवासात चांगला चहा मिळाला की प्रवासाची खरी मजा कळते",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="typeWritterPara2">
            <div className="para2p">
            <p>
              Chintamani tea, based out of Nashik, Maharashtra, has been winning the
              hearts of all tea lovers in Nashik and is now set out to stretch and
              expand its business not only in Maharashtra but all over the
              country.
            </p>
            </div>
          </div>
        </div>
        <div className="TypeWriterParts-2">
            <div className="KitaliImg"><img src={Kitali} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default TypeWriter;
