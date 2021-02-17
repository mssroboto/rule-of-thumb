import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Firebase from './components/Common/Firebase/Firebase'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Placeholder from './components/Placeholder/Placeholder'

const ROUTES = {
  home: '/',
  trials: '/past-trials',
  how: '/how-it-works',
  login: '/log-in',
  submit: '/submit-a-name',
  terms: '/terms-and-conditions',
  privacy: '/privacy-policy',
  contact: '/contact-us'
}

const PLACEHOLDERS = {
  trials: 'Past trials',
  how: 'How it works',
  login: 'Log in / Sign up',
  submit: 'Submit a name',
  terms: 'Terms and conditions',
  privacy: 'Privacy policy',
  contact: 'Contact us'
}

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    Firebase.database().ref('sections').once('value', (snapshot) => {
      setContent(snapshot.val())
    });
  }, [])

  const loading = () => {
    return (
      <div></div>
    )
  }

  return (
    content ? (
      <Router>
        <Header content={content.header} />
        <Route exact path={ROUTES.home} component={() => <Home content={content} />} />
        <Route exact path={ROUTES.trials} component={() => <Placeholder title={PLACEHOLDERS.trials} />} />
        <Route exact path={ROUTES.how} component={() => <Placeholder title={PLACEHOLDERS.how} />} />
        <Route exact path={ROUTES.login} component={() => <Placeholder title={PLACEHOLDERS.login} />} />
        <Route exact path={ROUTES.submit} component={() => <Placeholder title={PLACEHOLDERS.submit} />} />
        <Route exact path={ROUTES.terms} component={() => <Placeholder title={PLACEHOLDERS.terms} />} />
        <Route exact path={ROUTES.privacy} component={() => <Placeholder title={PLACEHOLDERS.privacy} />} />
        <Route exact path={ROUTES.contact} component={() => <Placeholder title={PLACEHOLDERS.contact} />} />
        <Footer content={content.footer} />
      </Router>
    ) : loading()
  )
}

export default App;