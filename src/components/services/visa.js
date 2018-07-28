import React, { Component } from 'react'
import { Divider, List, Card, Form, Input, Checkbox, Button, Select, Container, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import hctef from '../ipa'
import countryList from '../../data/countries'
import './visa.css';

class VisaService extends Component {
  render() {
    return (
      <Container className='visa-container' fluid>
        <Card.Group>
          <Card className='WhyChooseUs' raised>
            <WhyChooseUs />
          </Card>
          <Card className='OnlineQuoteForm' raised>
            <OnlineQuoteForm />
          </Card>
          <Card className='CallExecutiveForm' raised>
            <CallExecutiveForm />
          </Card>
        </Card.Group>
      </Container>
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
      <Card.Content>
        <Card.Header textAlign='center'>Why Choose Us</Card.Header>
        <List bulleted items={whyChooseUsPoints} />
        <Divider />
        <Card.Group itemsPerRow='2'>
          <Card raised header='Thailand Visa @ INR 4500' className='visaCard'/>
          <Card raised header='Singapore Visa @ INR 2999' className='visaCard'/>
          <Card raised header='Malaysian Visa  @ INR 2999' className='visaCard'/>
          <Card raised header='Australian Visa @ INR 12999' className='visaCard' />
        </Card.Group>
      </Card.Content>
    )
  }
}

const countryOptions = countryList.map(country => ({ text: country, value: country }))
const clearQuoteForm = { comment: '', company_or_individual: '', country: null, visa_type: null, email: '', mobile_number: '' }
class OnlineQuoteForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (event) => hctef(this.state).catch(console.error).then(() => this.setState(clearQuoteForm))

  render = () => {
    const {
      acceptTerms, country, visa_type, company_or_individual, email, mobile_number, comment
    } = this.state;
    const checkUncheck = () => this.setState({ acceptTerms: !acceptTerms })
    const visaTypes = [
      { text: 'Tourist Visa', value: 'Tourist Visa' },
      { text: 'Business Visa', value: 'Business Visa' },
      { text: 'Other', value: 'Other' },
    ]

    return (
      <Card.Content className='quote-form'>
        <Card.Header textAlign='center'>Get Your Online Quote</Card.Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required value={country} control={Select} label='Country:' name='Country' placeholder='Country' options={countryOptions} onChange={this.handleChange} />
          <Form.Field required value={visa_type} control={Select} label='Visa Type:' name='visa_type' placeholder='Visa Type' options={visaTypes} onChange={this.handleChange} />
          {
            visa_type === 'Other' ?
              <Form.Field value={comment} control={TextArea} name='Comment' placeholder='Visa Description' onChange={this.handleChange} />
              : null }
          <Form.Field value={company_or_individual} required control={Input} name='Company' label='Company or Individual:' placeholder='Company or Individual' onChange={this.handleChange} />
          <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
          <Form.Field value={mobile_number} required control={Input} name='phone' label='Phone Number:' placeholder='Phone Number' onChange={this.handleChange} />
          <Form.Field required control={Checkbox} label='I agree to the Terms and Conditions' checked={acceptTerms} onClick={checkUncheck} />
          <Button fluid type='submit' positive disabled={!acceptTerms}>Get Quote</Button>
        </Form>
      </Card.Content>
    )
  }
}

const clearExecutiveForm = { name: '', company: '', email: '', mobile_number: '' }
class CallExecutiveForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => hctef(this.state).catch(console.error).then(() => this.setState(clearExecutiveForm))

  render = () => {
    const {
      name, company, email, mobile_number
    } = this.state;
    return (
      <Card.Content className='executive-call-form body-container'>

        <Card.Header textAlign='center'> Fill up the details, Our Executive will give you a call</Card.Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
          <Form.Field inline value={company} required control={Input} name='Company' label='Company:' placeholder='Company' onChange={this.handleChange} />
          <Form.Field inline value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
          <Form.Field inline value={mobile_number} required control={Input} name='phone' label='Phone Number:' placeholder='Phone Number' onChange={this.handleChange} />
          <Button type='submit' positive floated='right'>Submit</Button>
        </Form>
      </Card.Content>
    )
  }
}