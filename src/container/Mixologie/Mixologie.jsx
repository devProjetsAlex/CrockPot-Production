import React, { Component } from "react";
import Slider from "react-slick";
import '../Menu/Menu.css'
import Button from '../../component/Button/Button'

export default class MIxologieSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight:false,
        variableWidth:false,
        centerMode:false
        
      };
      return (
        <div className='Menu'>
          <h2 >Mixologie</h2>
          <Slider {...settings}>
            <div>
              <h3> Corona </h3>
            </div>
            <div>
              <h3>Gin Tonic </h3>
            </div>
            <div>
              <h3> Vodka Mules</h3>
            </div>
            <div>
              <h3> Straberry Shortcake</h3>
            </div>
            <div>
              <h3> Courvoisier</h3>
            </div>
            <div>
              <h3> Cognac </h3>
            </div>
          </Slider>
          <div className='ButtonMenu'>
          <Button crokpot> Ajouter </Button>
          </div>
        </div>
      );
    }
  }