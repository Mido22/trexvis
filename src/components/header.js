import React, { Component } from 'react'
import { Button, Image, Dropdown } from 'semantic-ui-react'
import EnquiryModal from './enquiryModal.js'
import logo from '../static/trexvis_Logo_JPEG.jpg'
import { Link } from 'react-router-dom'
import './../css/header.css'

const linkButtonColor = 'red'

class Header1 extends Component {
  render() {
    const headerLinks = (
      <div className='header-links'>
        <Button className='bounce_button' color={linkButtonColor} as={Link} to='/'>Home</Button>
        <Button className='bounce_button' color={linkButtonColor} as={Link} to='/about.html'>About Us</Button>
        <Dropdown item text='Services' button color={linkButtonColor} className={linkButtonColor}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/visa.html' >Visa</Dropdown.Item>
            <Dropdown.Item as={Link} to='/immigration.html' >Immigration</Dropdown.Item>
            <Dropdown.Item as={Link} to='/car-rentals.html' >Car Rentals</Dropdown.Item>
            {/* <Dropdown.Item as={Link} to='/' >Hotel Reservation</Dropdown.Item> */}
            <Dropdown.Item as={Link} to='/tour-packages.html' >Tour Package</Dropdown.Item>
            <Dropdown.Item as={Link} to='/relocation.html' >Relocation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button className='bounce_button' color={linkButtonColor} as={Link} to='/contact-us.html'>Contact Us</Button>
        <EnquiryModal />
        {/* <Button className='bounce_button' color={linkButtonColor} as={Link} to='/services.html'>Feedback</Button> */}
      </div>
    )

    return (
      <header className='App-header'>
        <div className='header-container'>
          {headerLinks}
          <div className='header-main'>
            <div className='header-logo'>
              <Image src={logo}></Image>
            </div>
            <div className='header-main1'>
              <h1 className='App-title'>Trexvis India</h1>
              <h2 className='App-title1'>Your Travel Partner</h2>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header1
