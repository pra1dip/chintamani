import { useEffect, useRef, useState } from "react";
import locationpng from "../../Assets/Everywhere/pngwing.com.png"
import "../../Styles/slider2.css";
const colors = [{ city:"Gujarat",branches:"18" }, { city:"Maharashtra",branches:"150+" },{ city:"Rajastan",branches:"19" }, { city:"Madya Pradesh",branches:"43" }];


// , "#00C49F", "#FFBB28"
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow2">
      <div
        className="slideshowSlider2"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((ele, index) => (
          <div className="slide22" key={index}>
            <img src={locationpng} className="LoactionSliderpng" alt="" />
           <p className="SecSliderp1">{ele.city}</p>
           <p className="SecSliderp2"> Total Branches - {ele.branches}</p>
           <p className="SecSliderp3">चिंतामणी चाय</p>
          </div>
        ))}
      </div>

     
    </div>
  );
}
export default Slideshow;
