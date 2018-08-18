import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-datetime/css/react-datetime.css'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import ContactUs from './components/contactUs'
import Services from './components/services'
import Visa from './components/services/visa'
import CarRentals from './components/services/carRentals'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='App-container'>
            <Header />
            <div className='body'>
              <Route exact path='/' component={Home} />
              <Route path='/visa.html' component={Visa} />
              <Route path='/services.html' component={Services} />
              <Route path='/about.html' component={About} />
              <Route path='/car-rentals.html' component={CarRentals} />
              <Route path='/contact-us.html' component={ContactUs} />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
