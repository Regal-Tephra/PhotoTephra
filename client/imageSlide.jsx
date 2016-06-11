import React from 'react';
import Carousel from './carousel';


const imageSlide = (props) => (
  <div className="image-slide-container" style={{ backgroundColor: props.bgColor }}>
  {console.log(props)}

    <div className="Aligner centering text-center">
      <div className="col-md-8 choiceAligner choiceContainer">
        <div className="content h1">
          <h1>{props.title}</h1>
          <div className="photoContainer">
            <Carousel index={props.index} images={props.images} category={props.category} setSelection={props.setSelection}/>
            {console.log('imageSlide images', props.images)}
            {props.images.map((image, index) =>
              <img
                alt={props.category}
                onClick={props.setSelection.bind(null, props.category, index)}
                className="photoSmall"
                src={image.urls}
              />)}

          </div>
        </div>
      </div>
    </div>
  </div>
);


imageSlide.propTypes = {
  index: React.PropTypes.int,
  images: React.PropTypes.array,
  category: React.PropTypes.string,
  title: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  setSelection: React.PropTypes.func,
};

export default imageSlide;
