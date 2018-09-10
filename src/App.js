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
import Visa from './components/services/visa'
import CarRentals from './components/services/carRentals'
import Immigration from './components/services/immigration'
import Relocation from './components/services/relocation'
import TourPackages from './components/services/tourPackages'
import { setBackground } from './utils'

class App extends Component {
  render() {
    setBackground()
    return (
      <Router>
        <div className='App'>
          <div className='App-container'>
            <Header />
            <div className='body'>
              <Route exact path='/' component={Home} />
              <Route path='/visa.html' component={Visa} />
              <Route path='/about.html' component={About} />
              <Route path='/car-rentals.html' component={CarRentals} />
              <Route path='/contact-us.html' component={ContactUs} />
              <Route path='/immigration.html' component={Immigration} />
              <Route path='/relocation.html' component={Relocation} />
              <Route path='/tour-packages.html' component={TourPackages} />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
