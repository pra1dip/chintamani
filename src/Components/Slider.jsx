import React from 'react'
import"../Styles/Slider.css"
import slider1 from "../Assets/slider/cup.jpg"
import chinta from "../Assets/slider/teachinta.jpg"
import png from "../Assets/slider/pngtree-fragrant.jpg"
import poster from "../Assets/slider/poster1 (1).png"
import cha from "../Assets/slider/vaibhav (1).jpg"
const Slider = () => {
  return ( <div className="slider">
        		<img src={slider1} alt='' className="image5" />
        		<img src={chinta} alt='' className="image4" />
        		<img src={png} alt='' className="image3" />
        		<img src={poster} alt='' className="image2" />
        		<img src={cha} alt='' className="image1" />
        		<div className="null"></div>
    			</div>
  )
}

export default Slider