import React from 'react'
import {
  Divider, List, Form, Input, Button, Select,
  Segment, Image, Header
} from 'semantic-ui-react'
import Datetime from 'react-datetime'
import EnquiryModal from '../enquiryModal.js'
import SubmitForm from '../submitForm'
import './../../css/services/carRentals.css';
import imageSlide1 from '../../static/serivces/carRentals/Rolls-Royce_Ghost.jpg'
import imageSlide2 from '../../static/serivces/carRentals/opening-door-to-car.jpg'
import hour24 from '../../static/serivces/carRentals/24x7-Technical-Support.jpg'
import cars from '../../data/cars'
import chennaiLocalAreas from '../../data/chennaiLocalAreas'
import { setBackground } from '../../utils'

const toOptions = value => ({ text: value, value })
const carOptions = cars.map(toOptions)
const chennaiLocalAreaOptions = chennaiLocalAreas.map(toOptions)
const airportTypes = [
  'Chennai International Airport',
  'Chennai Domestic Airport',
].map(toOptions)

const packageList = [
  '4 Hr / 40 KM',
  '5 HR / 50 KM',
  '8 HR / 80 KM',
  '10 HR / 100 KM',
  '12 HR / 120 KM',
].map(toOptions)

class CarRentals extends SubmitForm {
  render() {
    setBackground()
    const {
      car_type, city, name, email, mobile_number, transport_type = 'Airport Transfer',
      to_from_airport = 'to_airport', airport_type = airportTypes[0].value, pickup_time,
      pickup_city, drop_city, package_type
    } = this.state
    const yesterday = Datetime.moment().subtract(1, 'day')
    const validDay =  (current) => current.isAfter(yesterday)

    let conditionalPart

    switch (transport_type) {
      case 'Airport Transfer':
        const pickLabel = to_from_airport === 'to_airport' ? 'Pickup Point' : 'Dropoff point';
        conditionalPart = (
          <div>
            <Form.Group inline>
              <label>Chennai Airport: </label>
              <Form.Radio name='to_from_airport' label='Dropoff To Airport' value='to_airport' checked={to_from_airport === 'to_airport'} onChange={this.handleChange} />
              <Form.Radio name='to_from_airport' label='Pickup From Airport' value='from_airport' checked={to_from_airport === 'from_airport'} onChange={this.handleChange} />
            </Form.Group>
            <Form.Field value={airport_type} control={Select} label='Airport: ' name='Airport' placeholder='Airport' options={airportTypes} onChange={this.handleChange} />
            <Form.Field value={city} control={Select} label={pickLabel} name='city' placeholder={pickLabel} options={chennaiLocalAreaOptions} onChange={this.handleChange} />
          </div>
        ); break;
      case 'Local Trip':
        conditionalPart = (
          <div>
            <Form.Field value={city} control={Select} label='Pickup Location' name='city' placeholder='Pickup Location' options={chennaiLocalAreaOptions} onChange={this.handleChange} />
            <Form.Field value={package_type} control={Select} label='Package:' name='package_type' placeholder='Package' options={packageList} onChange={this.handleChange} />
          </div>
        ); break;
      case 'Outstation Trip':
        conditionalPart = (
          <div>
            <Form.Field value={pickup_city} control={Input} name='pickup_city' label='Pickup City:' placeholder='Pickup City' onChange={this.handleChange} />
            <Form.Field value={drop_city} control={Input} name='drop_city' label='Drop City:' placeholder='Drop City' onChange={this.handleChange} />
          </div>
        ); break;
      default: conditionalPart = '';
    }


    const formPane = (
      <Segment className='quote-form'>
        <Header textAlign='center'>
          < Button color='red' onClick={() => this.setState({ transport_type: 'Airport Transfer' })}> Airport Transfer </Button>
          < Button color='red' onClick={() => this.setState({ transport_type: 'Local Trip' })}> Local Trip </Button>
          < Button color='red' onClick={() => this.setState({ transport_type: 'Outstation Trip' })}> Outstation Trip </Button>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          {conditionalPart}
          <Form.Group inline className='rentals-margin-up'>
            <label>Pick up Time: </label>
            <Datetime isValidDate={validDay} value={pickup_time} onChange={(value) => this.setState({ pickup_time: value })} />
          </Form.Group>
          <Form.Field required value={car_type} control={Select} label='Vehicle Model:' name='Type of Car' placeholder='Type of Car' options={carOptions} onChange={this.handleChange} />
          <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
          <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
          <Form.Field value={mobile_number} required control={Input} name='phone' label='Contact No.:' placeholder='Contact No.' onChange={this.handleChange} />
          <Button fluid type='submit' positive>Submit</Button>
          <Divider/>
          <div>
          <div>* If you have an urgent requirement: </div>
          <div>Please reach us @ 9600013001 / 9944445393 / 8248881401.</div>
          <div>We are there to assist you to the best of our ability.</div>
          </div>
        </Form>
      </Segment>
    )
    return (
      <div className='car-rentals-container'>
        {imagesPane}
        {whyChooseTrexvis}
        {formPane}
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
    <Header as='h3' className='header'>Why Choose Trexvis Car Rentals</Header>
    <Image src={hour24} centered rounded height='200px' width='440px' className='two-hour' />
    <Divider />
    <p>
      Trexvis India ofers you best in class Car Rental Services with the
      following strategy based on ta tripod of flexibility which includes Mini,
      Economy & Comfort. Our chauffers are well trained and also good with basic english knowledge and are well expertise in all aspects of the
      routes and also work as per the needs of the clients.
    </p>
    <List items={chooseList} className='choose-list' />
    <p>We look forward to welcoming you into a world of luxury and discretion with us.  </p>
    <div className='enquiry'>
      <EnquiryModal />
    </div>
  </Segment>
)

export default CarRentals;
