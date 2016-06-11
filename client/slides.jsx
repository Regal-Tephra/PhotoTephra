import React from 'react';
import Slider from 'react-viewport-slider';
import Slider2 from 'react-slick';
// const data = [
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/13100690_10208272746391839_223693133460415313_n.jpg?oh=ebf000696e6a9e4a5fc3f6b0f17b3cb2&oe=57CBE11D#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/12484741_10207288525666936_5053017157545856962_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/12310036_10207056305501577_3307527667839448203_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/12241323_10206996628689694_5449847592439127282_n.jpg?oh=8399ffd40d0a5d35d68d6369163ee074&oe=5800E2A3#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/11109437_10205450636520856_3106000668922565474_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/18687_10205445922363005_8643246825540455017_n.jpg?oh=1633adee9aeaf99a3803d1669be200ef&oe=57D674E0#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/10639376_10204024796075736_2947119624606504994_n.jpg?oh=0dc848d16f97a42d2b784c57b97d9bfb&oe=57D7D106#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/10506885_10203766215731389_8273713365625673583_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/10372539_10202332334659952_3436401212391021871_n.jpg?oh=33c969e2bb49e78a5e7dc6da2731470a&oe=57CBDCF9#.jpg"
// ];

class Slides extends React.Component {
    constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.state = {
      index: 0,
    };
  }

  add(key, event) {
    this.setState({ index: key });
  }
render() {

  return(
  <Slider>
    <div itemStyle={{ backgroundColor: '#002D8E' }}>
      <div className="Aligner  centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content">
          <h1>Headshot</h1>
            <div className="photoContainer">
              {this.props.images.headshot.map(image => <img className='photo' src={image.urls} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div itemStyle={{ backgroundColor: '#00B1F2' }}>
      <div className="Aligner centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content h1">
            <h1>Professional</h1>
            <div className="photoContainer">
              {this.props.images.professional.map(image => <img className='photo' src={image.urls} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div itemStyle={{ backgroundColor: '#0099F2' }}>
      <div className="Aligner centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content h1">
            <h1>Athletic</h1>
            <div className="photoContainer">
              {this.props.images.athletic.map(image => <img className='photo' src={image.urls} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div itemStyle={{ backgroundColor: '#F2D500' }}>
      <div className="Aligner  centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content h1">
            <h1>Adventurous</h1>
            <div className="photoContainer">

            <Carousel index={this.state.index} images={this.props.images.adventurous}/>
            {this.props.images.adventurous.map((image, key) => <img onClick={this.add.bind(this, key)} className='photoSmall' src={image.urls} key={key} />)}

            </div>
          </div>
        </div>
      </div>
    </div>
    <div itemStyle={{ backgroundColor: 'grey' }}>
      <div className="Aligner  centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content h1">
            <h1>Pick Your Tagline</h1>
            <div className="photoContainer">
              {this.props.quotes.map(quote => <div className="container-fluid quote">{quote}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div itemStyle={{ backgroundColor: '#C9009D' }}>
      <div className="Aligner  centering text-center">
        <div className="col-md-8 choiceAligner choiceContainer">
          <div className="content h1">You're done!</div>
        </div>
      </div>
    </div>
  </Slider>
);
}
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false,
      slickGoTo: this.props.index,
    };
    console.log('over here', this.props.index);
    console.log('slide# ', this.props.index);

    let imageElements = this.props.images.map( (image, i) => (
      <div className='photoContainer'>
        <img className='photo' src={image.urls} key={i}></img>
      </div>
    ));
    // if (imageElements.length === 0) {
    //   imageElements = (<div></div>);
    // }
    // var item = this.props.images.map( (image, i ) => (
    //   ));

    // console.log(this.props.images.map( (image, i) => (
    //             <div className='photoContainer'>
    //               <img className='photo' src={image} key={i}></img>
    //             </div>
    //           )));
    return (
      <div className="carouselContainer">
          <Slider2 {...settings}>
              {imageElements}
          </Slider2>
      </div>
    );
  }
}



Slides.propTypes = {
  images: React.PropTypes.object,
  quotes: React.PropTypes.object,
  setChoice: React.PropTypes.func,
};
export default Slides;
