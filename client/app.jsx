import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AboutUs from './aboutUs';
import Login from './login';
import Nav from './nav';
import Slides from './slides';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getImages = this.getImages.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
    this.setView = this.setView.bind(this);
    this.setToggle = this.setToggle.bind(this);
    this.setUsersName = this.setUsersName.bind(this);

    this.state = {
      photos: {},
      quotes: [],
      view: 'login',
      toggle: '',
      images: {
        headshot: [{ urls: '' }],
        athletic: [{ urls: '' }],
        professional: [{ urls: '' }],
        adventurous: [{ urls: '' }],
      },
      usersName: '',
    };
    this.render();
  }
  setToggle() {
    this.setState({ toggle: this.state.toggle === 'toggled' ? '' : 'toggled' });
  }
  setView(view) {
    this.setState({ view });
  }
  setUsersName(usersName) {
    this.setState({ usersName });
  }
  getImages() {
    const end = new Date();
    const start = new Date(end);
    start.setFullYear(end.getFullYear() - 2);
    const max = 2000;

    const formatDate = date => {
      const month = ((date.getMonth() + 1) + 100).toString().slice(1, 3);
      const day = (date.getDate() + 100).toString().slice(1, 3);
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };

    FB.api(`me/photos?type=tagged&fields=images,created_time&limit=${max}&until=${formatDate(end)}&since=${formatDate(start)}`, response => {
      console.log(response);
      // includes filtering out links with '&' as this seems to cause an issue for calrifai api.
      let imagesArray = response.data.map((item) => {
        for (let i = 0; i < item.images.length; i++) {
          if (item.images[i].source.indexOf('&') === -1) {
            return item.images[i].source;
          }
        }
        return '';
      });
      // remove blanks from array
      imagesArray = _.filter(imagesArray, d => d !== '');

      const data = {
        id: window.fbId,
        photos: response,
      };
      $.post({
        url: 'api/categorize',
        data: JSON.stringify(imagesArray),
        contentType: 'application/json',
      })
      .done((categorizedImages) => {
        console.log(categorizedImages);
        this.setState({ images: categorizedImages });
      })
      .fail(err => console.error(err));
    });
  }

  getQuotes() {
    const that = this;
    $.get({
      url: 'api/quotes',
      contentType: 'application/json',
    })
    .done((returnedQuotes) => {
      console.log(returnedQuotes);
      // Pick 5 Random Quotes
      const quotes = returnedQuotes.slice();
      const quoteResults = [];
      for (let j = 0; j < 5; j++) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteResults.push(quotes[randomIndex]);
        quotes.splice(randomIndex, 1);
      }
      that.setState({ quotes: quoteResults });
    })
    .fail((err) => console.error(err));
  }

  render() {
    const views = {
      login: (<Login
        setView={this.setView}
        getImages={this.getImages}
        getQuotes={this.getQuotes}
        setUsersName={this.setUsersName}
      />),
      // slides: (<Slides photos={this.state.photos} />),
      slides: (
        <div id="wrapper" className={this.state.toggle}>
          <Nav setView={this.setView} />
          <div id="page-content-wrapper">
            <div className="horizontalBar">
              <button id="menu-toggle" className="btn btn-lg" onClick={this.setToggle}>
                <span id="hamburger" className="glyphicon glyphicon-menu-hamburger"></span>
              </button>
            </div>
            <Slides
              photos={this.state.photos}
              images={this.state.images}
              quotes={this.state.quotes}
              setChoice={this.state.setChoice}
              usersName={this.state.usersName}
            />
          </div>
        </div>
      ),
      aboutUs: (
        <div id="wrapper" className={this.state.toggle}>
          <Nav setView={this.setView} />
          <div id="page-content-wrapper">
            <div className="horizontalBar">
              <button id="menu-toggle" className="btn btn-lg" onClick={this.setToggle}>
                <span id="hamburger" className="glyphicon glyphicon-menu-hamburger"></span>
              </button>
            </div>
            <AboutUs />
          </div>
        </div>
      ),
    };
    return (<div>{views[this.state.view]}</div>);
  }

}
ReactDOM.render(<App />, document.getElementsByClassName('mounting')[0]);
// ReactDOM.render(<App />, document.body);


// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={Login} />
//     <Route path="/login" component={Login} />
//     <Route component={Main}>
//       <Route path="create" component={Form} />
//       <Route path="/slides" component={Slides} />
//     </Route>
//   </Router>
//   ), document.getElementsByClassName('mounting')[0]);
