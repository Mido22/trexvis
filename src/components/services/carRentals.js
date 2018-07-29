import React, { Component } from 'react'
import { Divider, List, Card, Form, Input, Checkbox, Button, Select, 
  Container, Grid, Segment, TextArea, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EnquiryModal from '../enquiryModal.js'
import hctef from '../ipa'
import './../../css/services/carRentals.css';
import imageSlide1 from '../../static/serivces/carRentals/Rolls-Royce_Ghost.jpg'
import imageSlide2 from '../../static/serivces/carRentals/opening-door-to-car.jpg'
import hour24 from '../../static/serivces/carRentals/24x7-Technical-Support.jpg'

class CarRentals extends Component {
  render() {
    return (
      <div className='car-rentals-container'>
        {imagesPane}
        {whyChooseTrexvis}
        {imagesPane}
      </div>
    );
  }
}

const imagesPane = (
  <Segment raised className='image-slider'>
    <Image src={imageSlide1} bordered rounded className='image-slide' />
    <Image src={imageSlide2} bordered rounded className='image-slide' />
  </Segment>
)
const chooseList = [
  'Dedicated Driver',
  'Crystalline Invoices',
  'Quality Vehicles',
  'Excellent Customer Service',
  'Best Customer Experience',
  'Best Pricing',
  '24/7 Customer Support',
]

const whyChooseTrexvis = (
<Segment raised className='why-choose-texvis'>
    <Header as='h3' fluid className="header">Why Choose Trexvis Car Rentals</Header>
    <Image src={hour24} centered rounded height='200px' width='440px' className='two-hour' />
    <Divider/>
    <p>
      Trexvis India ofers you best in class Car Rental Services with the 
      following strategy based on ta tripod of flexibility which includes Mini,
      Economy & Comfort. Our chauffers are well trained and also good with basic english knowledge and are well expertise in all aspects of the 
      routes and also work as per the needs of the clients.
    </p>
    <List items={chooseList} className='choose-list'/>
    <p>We look forward to welcoming you into a world of luxury and discretion with us.  </p>
    <div className='enquiry'>
      <EnquiryModal />
    </div>
</Segment>
)

export default CarRentals;

