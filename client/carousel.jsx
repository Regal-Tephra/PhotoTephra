import ImageSlider from 'react-slick';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      draggable: false,
      slickGoTo: this.props.index,
    };

    let imageElements = this.props.images.map( (image, i) => (
      <div className="photoContainer">
        <img className="photo" style={{ backgroundImage: `url(${image.urls})` }} key={i} />
      </div>
    ));

    return (
      <div className="carouselContainer">
      <div>
        <ImageSlider {...settings}>
          {imageElements}
        </ImageSlider>
      </div>
      </div>
    );
  }
}


Carousel.propTypes = {
  images: React.PropTypes.object,
};
export default Carousel;

