import React from 'react';
// import Button from 'react-bootstrap/lib/Button';

const AboutUs = () => (
  <div>
    <h1 className="title">Meet the team</h1>
    <div className="container-fluid cards">
      <row className="row-fluid profiles">
        <div className="col-xs-5 profile">
          <img alt="me" className="profileImage img-square" src="https://avatars3.githubusercontent.com/u/709295?v=3&s=400" />
          <h3> Aaron<span id="unbold">, 25</span></h3>
          <h6>Washington, DC</h6>
          <h6>less than a mile away <div className="text-muted">Active just now </div></h6>
          <h4> <a className="aboutLink" href="https://github.com/shadowfool">About Aaron</a> </h4>
          <h5> I don't even know what this is. My friends made this account for me.</h5>
        </div>
        <div className="col-xs-5 profile">
          <img alt="me" className="profileImage img-square" src="https://avatars2.githubusercontent.com/u/17420728?v=3&s=400" />
          <h3> Felix<span id="unbold">, 23</span></h3>
          <h6>San Francisco, CA</h6>
          <h6>less than a mile away <div className="text-muted">Active just now </div></h6>
          <h4> <a className="aboutLink" href="https://github.com/felix2feng">About Felix</a> </h4>
          <h5> I'm always down to get Jamba. Hit me up for some jamba action.
          I might feature you in my snapstorm if you"re lucky ;)
          </h5>
        </div>
        <div className="col-xs-5 profile">
          <img alt="me" className="profileImage img-square" src="https://avatars2.githubusercontent.com/u/16586644?v=3&s=400" />
          <h3> Andy<span id="unbold">, 23</span></h3>
          <h6> San Jose, CA </h6>
          <h6>less than a mile away <div className="text-muted">Active just now </div></h6>
          <h4> <a className="aboutLink" href="https://github.com/adtran117">About Andy</a> </h4>
          <h5> Is your name Wi-fi? Because I'm really feeling a connection. Your homepage or mine?
          </h5>
        </div>
        <div className="col-xs-5 profile">
          <img alt="me" className="profileImage img-square" src="https://avatars2.githubusercontent.com/u/2666121?v=3&s=400" />
          <h3> Austin<span id="unbold">, 27 </span></h3>
          <h6> Houston, TX </h6>
          <h6>less than a mile away <div className="text-muted">Active just now </div></h6>
          <h4> <a className="aboutLink" href="https://github.com/austinba">About Austin</a> </h4>
          <h5 className="about"> Trying to find my bae in the bae area :)
          </h5>
        </div>
      </row>
    </div>
  </div>
);

export default AboutUs;

