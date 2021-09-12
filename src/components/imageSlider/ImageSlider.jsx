/* eslint-disable jsx-a11y/anchor-is-valid */
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './imageSlider.css'
import sliderImage1 from '../../assets/images/slider-badag.jpg'
import sliderImage2 from '../../assets/images/slider-badging.jpg'
import sliderImage3 from '../../assets/images/slider-scale.jpg'
import sliderImage4 from '../../assets/images/slider-scales.jpg'

const ImageSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: false,
    prevArrow: false,
  }

  return (
    <div className="img-slider-main-container">
      <Carousel className="slick-carousel" {...settings}>
        <div className="carousel-item-wrapper">
          <a>
            <img
              src={sliderImage2}
              className="slider-image"
              alt="slider-badging"
              width="100%"
            />
          </a>
        </div>

        <div className="carousel-item-wrapper">
          <a>
            <img
              src={sliderImage1}
              className="slider-image"
              alt="slider-badag"
              width="100%"
            />
          </a>
        </div>

        <div className="carousel-item-wrapper">
          <a>
            <img
              src={sliderImage3}
              className="slider-image"
              alt="slider-scale"
              width="100%"
            />
          </a>
        </div>

        <div className="carousel-item-wrapper">
          <a href="#">
            <img
              src={sliderImage4}
              className="slider-image"
              alt="slider-scales"
              width="100%"
            />
          </a>
        </div>
      </Carousel>
    </div>
  )
}

const Carousel = styled(Slider)`
  margin-top: 1.5rem;
  height: 200px;
`

export default ImageSlider
