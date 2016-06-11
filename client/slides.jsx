import React from 'react';
import Slider from 'react-viewport-slider';
import Carousel from './carousel';
import ImageSlide from './imageSlide';
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
  constructor(props) {
    super(props);
    this.setSelection = this.setSelection.bind(this);

    this.state = {
      userSelections: {
        headshot: 0,
        athletic: 0,
        professional: 0,
        adventurous: 0,
        quote: '',
      },
    };
  }

  setSelection(category, imageIndex) {
    const userSelections = this.state.userSelections;
    userSelections[category] = imageIndex;
    this.setState({ userSelections });
    console.log('headshot index: ', this.state.userSelections.headshot);
  }
  render() {
    const slides = [
      {
        category: 'headshot',
        title: 'Headshot',
        bgColor: '#002D8E',
      },
      {
        category: 'professional',
        title: 'Professional',
        bgColor: '#00B1F2',
      },
      {
        category: 'athletic',
        title: 'Athletic',
        bgColor: '#0099F2',
      },
      {
        category: 'adventurous',
        title: 'Adventurous',
        bgColor: '#F2D500',
      },
    ];
    return (
      <Slider>
        {
          slides.map(({ category, title, bgColor }) => (
            <ImageSlide
              index={this.state.userSelections[category]}
              images={this.props.images[category]}
              category={category}
              title={title}
              bgColor={bgColor}
              setSelection={this.setSelection}
            />
          )).concat([
            (
              <div itemStyle={{ backgroundColor: 'grey' }}>
                <div className="Aligner centering text-center">
                  <div className="col-md-8 choiceAligner choiceContainer">
                    <div className="content h1">
                      <h1>Pick Your Tagline</h1>
                      <div className="photoContainer">
                        {this.props.quotes.map(quote =>
                          <div className="container-fluid quote">{quote}
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            (
              <div itemStyle={{ backgroundColor: '#C9009D' }}>
                <div className="Aligner  centering text-center">
                  <div className="col-xs-8 choiceAligner choiceContainer">
                    <div className="content h1">
                      <h1>You're done!</h1>
                      <div className="final-profile-container">
                        <div className="final-profile-images-container">
                          <div className="sq-pic-left">
                            <div className="square-pic" style={{ backgroundImage: `url(${this.props.images.headshot[this.state.userSelections.headshot].urls})` }}></div>
                          </div>
                          <div className="sq-pic-right-top">
                            <div className="square-pic" style={{ backgroundImage: `url(${this.props.images.professional[this.state.userSelections.professional].urls})` }}></div>
                          </div>
                          <div className="sq-pic-right-middle">
                            <div className="square-pic" style={{ backgroundImage: `url(${this.props.images.athletic[this.state.userSelections.athletic].urls})` }}></div>
                          </div>
                          <div className="sq-pic-right-bottom">
                            <div className="square-pic" style={{ backgroundImage: `url(${this.props.images.adventurous[this.state.userSelections.adventurous].urls})` }}></div>
                          </div>
                        </div>
                        <div className="profile-text-title">
                          About {this.props.usersName.split(' ')[0]}
                        </div>
                        <div className="profile-text">
                          This is my profile text
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ),
          ])
        }

      </Slider>
    );
  }
}
Slides.propTypes = {
  images: React.PropTypes.object,
  quotes: React.PropTypes.object,
  setChoice: React.PropTypes.func,
  usersName: React.PropTypes.string,
};
export default Slides;
