import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Firebase from './components/Common/Firebase/Firebase';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PlaceholderOne from './components/Placeholder/PlaceholderOne';
import PlaceholderTwo from './components/Placeholder/PlaceholderTwo';
import PlaceholderThree from './components/Placeholder/PlaceholderThree';

const ROUTES = {
  home: '/',
  trials: '/past-trials',
  how: '/how-it-works',
  login: '/log-in'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const content= Firebase.database().ref('sections');
    content.on('value', (snapshot) => {
      this.setState({content: snapshot.val()})
    });
  }

  loading_() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    return this.state.content ? (
      <Router>
        <Header content={this.state.content.header} />
        <Route exact path={ROUTES.home} component={() => <Home content={this.state.content} />} />
        <Route exact path={ROUTES.trials} component={PlaceholderOne} />
        <Route exact path={ROUTES.how} component={PlaceholderTwo} />
        <Route exact path={ROUTES.login} component={PlaceholderThree} />
        <Footer content={this.state.content.footer} />
      </Router>
    ) : this.loading_();
  }
}

export default App;