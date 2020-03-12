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
      <div>
        <h2 className='Menu'>Menu</h2>
        <Slider {...settings}>
          <div>
            <h3> Hello  World </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div className='ButtonMenu'>
        <Button crokpot> Ajouter</Button>
        </div>
      </div>
    );
  }
}