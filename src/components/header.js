import React, { Component } from 'react'
import { Button, Image, Dropdown } from 'semantic-ui-react'
import EnquiryModal from './enquiryModal.js'
import logo from '../static/trexvis_Logo_JPEG.jpg'
import { Link } from 'react-router-dom'
import './header.css'

const linkButtonColor = 'red'

class Header1 extends Component {
  render() {

    return (
      <header className="App-header">
        <div className="header-container">
          <div className="header-main">
            <div className="header-logo">
              <Image src={logo}></Image>
            </div>
            <div className="header-main1">
              <h1 className="App-title">Trexvis India</h1>
            </div>
          </div>
          <div className="header-links">
            <Button color={linkButtonColor} as={Link} to='/'>Home</Button>
            <Button color={linkButtonColor} as={Link} to='/about.html'>About Us</Button>
            <Dropdown item text='Services' button color={linkButtonColor} className={linkButtonColor}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/visa.html' >Visa</Dropdown.Item>
                <Dropdown.Item as={Link} to='/' >Immigration</Dropdown.Item>
                <Dropdown.Item as={Link} to='/' >Car Rentals</Dropdown.Item>
                <Dropdown.Item as={Link} to='/' >Hotel Reservation</Dropdown.Item>
                <Dropdown.Item as={Link} to='/' >Tour Package</Dropdown.Item>
                <Dropdown.Item as={Link} to='/' >Forex</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button color={linkButtonColor} as={Link} to='/tariffs.html'>Tariff</Button>
            <Button color={linkButtonColor} as={Link} to='/services.html'>Contact Us</Button>
            <EnquiryModal />
            <Button color={linkButtonColor} as={Link} to='/services.html'>Feedback</Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header1;
