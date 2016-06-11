import React from 'react';
import $ from 'jquery';
import Promise from 'bluebird';
import { hashHistory } from 'react-router';


class FacebookButton extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      authenticated: false,
      userMessage: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId      : '1614598852200788',
        xfbml      : true,
        version    : 'v2.6',
      });
      console.log('init fbook', window.FB);
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  
  checkLoginState() {
    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        console.log('fb res:', response.getUserID);
        this.setState({ authenticated: true });
                this.props.getImages();
                this.props.getQuotes();
                this.props.setView('slides');
      } else {
        this.props.getQuotes();
        FB.login((response) => {
          let access_token = response.authResponse.accessToken;
          if (response.authResponse) {
            FB.api('/me', (response) => {
              this.setState({ authenticated: true });
              $.post('/signin', { name: response.name, userId: response.id, access_token: access_token }).done(() => {
                window.fbId = response.id;
                window.access_token = access_token;
                this.props.getImages();
                this.props.setView('slides');
              }).fail((err) => {
                console.log(err, 'error in checkLoginState');
              });
            });
          } else {
            console.log('user did not authenticate');
          }
        }, { scope: 'public_profile,user_photos' });
      }
    }, true);
  }

  logout() {
    FB.logout(() => {
      this.setState({ authenticated: false });
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.authenticated) {
      this.logout();
    } else {
      this.checkLoginState();
    }
  }


  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-md"
          onClick={this.handleClick}
        >Log in with Facebook
        </button>
      </div>
    );
  }
}
FacebookButton.propTypes = {
  setView: React.PropTypes.func,
  getImages: React.PropTypes.func,
  getQuotes: React.PropTypes.func,
};
export default FacebookButton;
