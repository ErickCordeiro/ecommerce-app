import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SlickSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300x150"
            className="d-block w-100 p-2"
            alt="..."
          />
        </div>
      </Slider>
    );
  }
}
