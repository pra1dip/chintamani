import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Gallery.css";
import chara from "../Assets/Everywhere/character.png";
import a from "../Assets/Gallary/1.jpeg";
import b from "../Assets/Gallary/2.jpeg"
import c from "../Assets/Gallary/3.jpeg"
import d from "../Assets/Gallary/4.jpeg"
import e from "../Assets/Gallary/5.jpeg"
import f from "../Assets/Gallary/6.jpeg"
import g from "../Assets/Gallary/7.jpeg"
import i from "../Assets/Gallary/9.jpeg"

import j from "../Assets/Gallary/10.jpeg"
import k from "../Assets/Gallary/11.jpeg"
import h from "../Assets/Gallary/8.jpeg"
import l from "../Assets/Gallary/12.jpeg"
import m from "../Assets/Gallary/13.jpeg"
import n from "../Assets/Gallary/14.jpeg"
import o from "../Assets/Gallary/15.jpeg"
import p from "../Assets/Gallary/16.jpeg"
import q from "../Assets/Gallary/17.jpeg"
import r from "../Assets/Gallary/18.jpeg"
import s from "../Assets/Gallary/19.jpeg"
import t from "../Assets/Gallary/20.jpeg"
import u from "../Assets/Gallary/21.jpeg"
import v from "../Assets/Gallary/22.jpeg"
import w from "../Assets/Gallary/23.jpeg"
import x from "../Assets/Gallary/24.jpeg"
import y from "../Assets/Gallary/25.jpeg"
import z from "../Assets/Gallary/26.jpeg"
import xz from "../Assets/Gallary/27.jpeg"
import yz from "../Assets/Gallary/28.jpeg"
// import ReactWhatsapp from "react-whatsapp";
// import { BsWhatsapp } from "react-icons/bs";
const Gallery = () => {
  return (
    <div className="MainGalleryContainer">
      
      <div className="galleryContainer">
        <div className="GalleryIntro">
          <div className="GalleryIntroleft">
            <p className="headGallery">GALLERY</p>
            <p className="headGallery1">
              Gallery collection of our memories captured through lenses over
              the 5 years.
            </p>
            <p className="headGallery2">
              itness the expanse of our reach, the new beginnings, the
              initiatives, and some much-loved videos that reflect the true
              essence of Chintamani Amruttulya.
            </p>
          </div>
          <div className="GalleryIntroright">
            <img src={chara} className="GalleryIntrorightimg" alt="" />
          </div>
        </div>
      </div>
      <div className="photoGallery">
      <p className="PHOTOGALLERY">PHOTO GALLERY</p>
        <div className="photoGalleryContainer">
        
          <div>
            <img src={a} alt="" />
          </div>
          <div>
            <img src={b} alt="" />
          </div>
          <div>
            <img src={c} alt="" />
          </div>
          <div>
            <img src={d} alt="" />
          </div>
          <div>
            <img src={e} alt="" />
          </div>
          <div>
            <img src={f} alt="" />
          </div>
          <div>
            <img src={g} alt="" />
          </div>
          <div>
            <img src={h} alt="" />
          </div>
          <div>
            <img src={i} alt="" />
          </div>
          <div>
            <img src={j} alt="" />
          </div>
          <div>
            <img src={k} alt="" />
          </div>
          <div>
            <img src={l} alt="" />
          </div>
          <div>
            <img src={m} alt="" />
          </div>
          <div>
            <img src={n} alt="" />
          </div>
          <div>
            <img src={o} alt="" />
          </div>
          <div>
            <img src={p} alt="" />
          </div>
          <div>
            <img src={q} alt="" />
          </div>
          <div>
            <img src={r} alt="" />
          </div>
          <div>
            <img src={s} alt="" />
          </div>
          <div>
            <img src={t} alt="" />
          </div>
          <div>
            <img src={u} alt="" />
          </div>
          <div>
            <img src={v} alt="" />
          </div>
          <div>
            <img src={w} alt="" />
          </div>
          <div>
            <img src={x} alt="" />
          </div>
          <div>
            <img src={y} alt="" />
          </div>
          <div>
            <img src={z} alt="" />
          </div>
          <div>
            <img src={xz} alt="" />
          </div>
          <div>
            <img src={yz} alt="" />
          </div>

          
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
