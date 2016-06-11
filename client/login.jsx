import React from 'react';
import FacebookButton from './fbook-button';
// import Button from 'react-bootstrap/lib/Button';

const Login = (props) => (
  <div>
    <div id="section-1" className="Aligner container">
      <div className="col-md-8 col-md-offset-7 Aligner-item opaqueContainer">
        <h1>Photephra • /fʌ/ˈtɛ.fɹə/</h1>
        <h3>Photo curation for the perfect profile</h3>
        <FacebookButton
          className="col-md-3"
          setView={props.setView}
          getImages={props.getImages}
          getQuotes={props.getQuotes}
          setUsersName={props.setUsersName}
        />
      </div>
    </div>
  </div>
);
Login.propTypes = {
  setView: React.PropTypes.func,
  getImages: React.PropTypes.func,
  getQuotes: React.PropTypes.func,
  setUsersName: React.PropTypes.func,
};
export default Login;

