import React from 'react'
import { Divider, List, Form, Input, Checkbox, Button, Select, 
  Segment, TextArea, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EnquiryModal from '../enquiryModal.js'
import SubmitForm from '../submitForm'
import './../../css/services/carRentals.css';
import imageSlide1 from '../../static/serivces/carRentals/Rolls-Royce_Ghost.jpg'
import imageSlide2 from '../../static/serivces/carRentals/opening-door-to-car.jpg'
import hour24 from '../../static/serivces/carRentals/24x7-Technical-Support.jpg'
import countryList from '../../data/countries'

const countryOptions = countryList.map(country => ({ text: country, value: country }))
class CarRentals extends SubmitForm {
  render() {
    const {
      acceptTerms, country, visa_type, company_or_individual, email, mobile_number, comment
    } = this.state;
    const checkUncheck = () => this.setState({ acceptTerms: !acceptTerms })
    const visaTypes = [
      { text: 'Tourist Visa', value: 'Tourist Visa' },
      { text: 'Business Visa', value: 'Business Visa' },
      { text: 'Other', value: 'Other' },
    ]


    const formPane = (
    <Segment className='quote-form'>
      <Header textAlign='center'>Get Your Online Quote</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field required value={country} control={Select} label='Country:' name='Country' placeholder='Country' options={countryOptions} onChange={this.handleChange} />
        <Form.Field required value={visa_type} control={Select} label='Visa Type:' name='visa_type' placeholder='Visa Type' options={visaTypes} onChange={this.handleChange} />
        {
          visa_type === 'Other' ?
            <Form.Field value={comment} control={TextArea} name='Comment' placeholder='Visa Description' onChange={this.handleChange} />
            : null}
        <Form.Field value={company_or_individual} required control={Input} name='Company' label='Company or Individual:' placeholder='Company or Individual' onChange={this.handleChange} />
        <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
        <Form.Field value={mobile_number} required control={Input} name='phone' label='Phone Number:' placeholder='Phone Number' onChange={this.handleChange} />
        <Form.Field required control={Checkbox} label='I agree to the Terms and Conditions' checked={acceptTerms} onClick={checkUncheck} />
        <Button fluid type='submit' positive disabled={!acceptTerms}>Get Quote</Button>
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
