import React from 'react';
const testData = [ { username: 'Steven',
      headshot: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13100690_10208272746391839_223693133460415313_n.jpg?oh=ebf000696e6a9e4a5fc3f6b0f17b3cb2&oe=57CBE11D#.jpg',
      athletic: "https://scontent.xx.fbcdn.net/t31.0-8/12484741_10207288525666936_5053017157545856962_o.jpg#.jpg",
      professional: "https://scontent.xx.fbcdn.net/v/t1.0-9/12241323_10206996628689694_5449847592439127282_n.jpg?oh=8399ffd40d0a5d35d68d6369163ee074&oe=5800E2A3#.jpg",
      adventurous: "https://scontent.xx.fbcdn.net/v/t1.0-9/10639376_10204024796075736_2947119624606504994_n.jpg?oh=0dc848d16f97a42d2b784c57b97d9bfb&oe=57D7D106#.jpg",
      quote: 'test Quote', }, { username: 'Aaron Freidus',
      headshot: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13100690_10208272746391839_223693133460415313_n.jpg?oh=ebf000696e6a9e4a5fc3f6b0f17b3cb2&oe=57CBE11D#.jpg',
      athletic: "https://scontent.xx.fbcdn.net/t31.0-8/12484741_10207288525666936_5053017157545856962_o.jpg#.jpg",
      professional: "https://scontent.xx.fbcdn.net/v/t1.0-9/12241323_10206996628689694_5449847592439127282_n.jpg?oh=8399ffd40d0a5d35d68d6369163ee074&oe=5800E2A3#.jpg",
      adventurous: "https://scontent.xx.fbcdn.net/v/t1.0-9/10639376_10204024796075736_2947119624606504994_n.jpg?oh=0dc848d16f97a42d2b784c57b97d9bfb&oe=57D7D106#.jpg",
      quote: 'test Quote', }, { username: 'Sam',
      headshot: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13100690_10208272746391839_223693133460415313_n.jpg?oh=ebf000696e6a9e4a5fc3f6b0f17b3cb2&oe=57CBE11D#.jpg',
      athletic: "https://scontent.xx.fbcdn.net/t31.0-8/12484741_10207288525666936_5053017157545856962_o.jpg#.jpg",
      professional: "https://scontent.xx.fbcdn.net/v/t1.0-9/12241323_10206996628689694_5449847592439127282_n.jpg?oh=8399ffd40d0a5d35d68d6369163ee074&oe=5800E2A3#.jpg",
      adventurous: "https://scontent.xx.fbcdn.net/v/t1.0-9/10639376_10204024796075736_2947119624606504994_n.jpg?oh=0dc848d16f97a42d2b784c57b97d9bfb&oe=57D7D106#.jpg",
      quote: 'test Quote', },
      ]

//   "https://scontent.xx.fbcdn.net/t31.0-8/12484741_10207288525666936_5053017157545856962_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/12310036_10207056305501577_3307527667839448203_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/12241323_10206996628689694_5449847592439127282_n.jpg?oh=8399ffd40d0a5d35d68d6369163ee074&oe=5800E2A3#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/11109437_10205450636520856_3106000668922565474_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/18687_10205445922363005_8643246825540455017_n.jpg?oh=1633adee9aeaf99a3803d1669be200ef&oe=57D674E0#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/10639376_10204024796075736_2947119624606504994_n.jpg?oh=0dc848d16f97a42d2b784c57b97d9bfb&oe=57D7D106#.jpg",
//   "https://scontent.xx.fbcdn.net/t31.0-8/10506885_10203766215731389_8273713365625673583_o.jpg#.jpg",
//   "https://scontent.xx.fbcdn.net/v/t1.0-9/10372539_10202332334659952_3436401212391021871_n.jpg?oh=33c969e2bb49e78a5e7dc6da2731470a&oe=57CBDCF9#.jpg"
const Profiles = (props) => (
  <div>
    <h1> This is where the profiels go </h1>
    {testData.map(({ username, headshot, professional, athletic, adventurous, quote }) => {
      return (<div className="final-profile-container">
        <div className="final-profile-images-container">
          <div className="sq-pic-left">
            <div className="square-pic" style={{ backgroundImage: `url(${headshot})` }}></div>
          </div>
          <div className="sq-pic-right-top">
            <div className="square-pic" style={{ backgroundImage: `url(${professional})` }}></div>
          </div>
          <div className="sq-pic-right-middle">
            <div className="square-pic" style={{ backgroundImage: `url(${athletic})` }}></div>
          </div>
          <div className="sq-pic-right-bottom">
            <div className="square-pic" style={{ backgroundImage: `url(${adventurous})` }}></div>
          </div>
        </div>
        <div className="profile-text-title">
          About {username.split(' ')[0]}
        </div>
        <div className="profile-text">
          {quote}
        </div>
      </div>
      );
    })}
  </div>
);

Profiles.propTypes = {
  profiles: React.PropTypes.object,
};

export default Profiles;
