// React スライダー:react-slick
// 【公式HP】https://react-slick.neostack.com/docs/get-started/
// 1.ライブラリインポート：npm install react-slick --save
// ２.css：npm install slick-carousel --save

import React, { Component } from "react";
import Slider from "react-slick";
import "./App.css"
// 3.cssのパスを通す
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

function VerticalSlide1() {
  // 設定
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="v-slide sl-1-1">
          <h3>1-1</h3>
        </div>
        <div className="v-slide sl-1-2">
          <h3>1-2</h3>
        </div>
        <div className="v-slide sl-1-3">
          <h3>1-3</h3>
        </div>
      </Slider>
    </div>
  );
}
function VerticalSlide2() {
  // 設定
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="v-slide sl-2-1">
          <h3>2-1</h3>
        </div>
        <div className="v-slide sl-2-2">
          <h3>2-2</h3>
        </div>
        <div className="v-slide sl-2-3">
          <h3>2-3</h3>
        </div>
      </Slider>
    </div>
  );
}
function VerticalSlide3() {
  // 設定
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="v-slide sl-3-1">
          <h3>3-1</h3>
        </div>
        <div className="v-slide sl-3-2">
          <h3>3-2</h3>
        </div>
        <div className="v-slide sl-3-3">
          <h3>3-3</h3>
        </div>
      </Slider>
    </div>
  );
}


function App() {
    // 設定
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <VerticalSlide1/>
          </div>
          <div className="slide">
          <VerticalSlide2/>
          </div>
          <div className="slide">
          <VerticalSlide3/>
          </div>
        </Slider>
      </div>
    );
  }

export default App;
