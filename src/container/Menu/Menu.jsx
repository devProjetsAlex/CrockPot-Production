import React, { Component } from "react";
import Slider from "react-slick";
import './Menu.css'
import Button from '../../component/Button/Button'

export default class MenuSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='Menu'>
        <h2 >Menu</h2>
        <Slider {...settings}>
          <div>
            <h3> Steak </h3>
          </div>
          <div>
            <h3> Poisson </h3>
          </div>
          <div>
            <h3> Végétarien </h3>
          </div>
          <div>
            <h3> Poulet </h3>
          </div>
          <div>
            <h3> Gateau au Chocolat</h3>
          </div>
          <div>
            <h3> Gateau au Fraise </h3>
          </div>
        </Slider>
        <div className='ButtonMenu'>
        <Button crokpot> Ajouter</Button>
        </div>
      </div>
    );
  }
}