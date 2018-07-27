import React, { Component } from 'react'
import { Header, Divider, List, Card, Form, Input, Checkbox, Button, Select, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import hctef from '../ipa'
import './visa.css';

class VisaService extends Component {
  render() {
    return (
      <div className="visa-container">
        <WhyChooseUs/>
        <OnlineQuoteForm/>
        <CallExecutiveForm/>
      </div>
    );
  }
}

export default VisaService;

class WhyChooseUs extends Component {
  render() {

    const whyChooseUsPoints = [
      '100% Hassle Free',
      'Secure & Confidential',
      '100% Clear Document Verification',
      'Expertise Consultants',
      '24*7 updates on your visa status',
      'Visa information at your fingertips',
    ]

    return (
      <div className="body-container why-us-container">
        <Header as='h2' textAlign='center'>Why Choose Us</Header>
        <Divider />
        <List bulleted items={whyChooseUsPoints} />
        <Divider />
        <Card.Group itemsPerRow={2} doubling className='visaCard'>
          <Card raised header='Thailand Visa @ INR 4500'/>
          <Card raised header='Singapore Visa @ INR 2999'/>
          <Card raised header='Malaysian Visa  @ INR 2999'/>
          <Card raised header='Australian Visa @ INR 12999' />
        </Card.Group>
      </div>
    )
  }
}

const clearQuoteForm = {comment: '', company_or_individual: '', country: null, visa_type: null, email: '', mobile_number: ''}
class OnlineQuoteForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => hctef(this.state).catch(console.error).then(() => this.setState(clearQuoteForm))

  render = () => {
    const {
      acceptTerms, country, visa_type, company_or_individual, email, mobile_number, comment
    } = this.state;
    const checkUncheck = () => this.setState({ acceptTerms: !acceptTerms })
    const countryOptions = [
      { text: 'Thailand', value: 'Thailand' },
      { text: 'Singapore', value: 'Singapore' },
      { text: 'Malaysia', value: 'Malaysia' },
      { text: 'Australia', value: 'Australia' },
    ]
    const visaTypes = [
      { text: 'Tourist Visa', value: 'Tourist Visa' },
      { text: 'Business Visa', value: 'Business Visa' },
      { text: 'Other', value: 'Other' },
    ]

    return (
      <div className="quote-form body-container">

        <Header as='h2' textAlign='center'>Get Your Online Quote</Header>
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required value={country} control={Select} label='Country:' name='Country' placeholder='Country' options={countryOptions} onChange={this.handleChange} />
          <Form.Field required value={visa_type} control={Select} label='Visa Type:' name='visaType' placeholder='Visa Type' options={visaTypes} onChange={this.handleChange} />
          <Form.Field value={company_or_individual} required control={Input} name='Company' label='Company or Individual:' placeholder='Company or Individual' onChange={this.handleChange} />
          <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
          <Form.Field value={mobile_number} required control={Input} name='phone' label='Phone Number:' placeholder='Phone Number' onChange={this.handleChange} />
          <Form.Field required control={Checkbox} label='I agree to the Terms and Conditions' checked={acceptTerms} onClick={checkUncheck} />
          <Button fluid type='submit' positive disabled={!acceptTerms}>Get Quote</Button>
        </Form>
      </div>
    )
  }
}

const clearExecutiveForm = { name: '',  company: '', email: '', mobile_number: '' }
class CallExecutiveForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => hctef(this.state).catch(console.error).then(() => this.setState(clearExecutiveForm))

  render = () => {
    const {
      name, company, email, mobile_number
    } = this.state;
    return (
      <div className="executive-call-form body-container">

        <Header as='h3' textAlign='center'> Fill up the details, Our Executive will give you a call</Header>
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
          <Form.Field inline value={company} required control={Input} name='Company' label='Company:' placeholder='Company' onChange={this.handleChange} />
          <Form.Field inline value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
          <Form.Field inline value={mobile_number} required control={Input} name='phone' label='Phone Number:' placeholder='Phone Number' onChange={this.handleChange} />
          <Button type='submit' positive floated='right'>Submit</Button>
        </Form>
      </div>
    )
  }
}