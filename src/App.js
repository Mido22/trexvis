import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Tariffs from './components/tariffs'
import Services from './components/services'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body">
            <Route exact path="/" component={Home} />
            <Route path="/services.html" component={Services} />
            <Route path="/about.html" component={About} />
            <Route path="/tariffs.html" component={Tariffs} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
