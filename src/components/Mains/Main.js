import React from "react";
import "./Main.css";
import HeroImage from "../../assets/learning.webp";
import TypingEffect from "./Typing";
import { useRef, useEffect, useState } from "react";
const Main = () => {
  const strings = ["Professional Development", "Personal Development"];
  const sliderRef = useRef(null);

  useEffect(() => {
    // scroll the slider for every 3 seconds scroll if for 250px
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      slider.scrollLeft += 1;
      scrollAmount += 1;
    }, 3);

    return () => {
      window.clearInterval(slideTimer);
    };
  }, []);

  return (
    <div className="home_container">
      <div className="home_left">
        <div className="head_title">Leading Career Counsellors</div>
        <div className="heading">
          <span className="heading_up">Explore India’s Top</span>
          <span>Distance Colleges for</span>
          <span className="heading_down">   <TypingEffect /></span>
         
        </div>
        <div className="sub_title">Unleash Your Hidden Potential</div>
        <div className="search_wrapper">
          <div className="search_icon"></div>
          <input />
        </div>
      </div>
      <div className="home_right">
        <img src={HeroImage} alt="hero" className="home_img" />
      </div>

      <div className="slider" ref={sliderRef}>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
      </div>
    </div>
  );
};

export default Main;