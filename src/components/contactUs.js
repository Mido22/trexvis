import React from 'react'
import {
  Form, Input, Button, TextArea, Card
} from 'semantic-ui-react'
import './../css/contactUs.css'
import SubmitForm from './submitForm'
import { setBackground } from '../utils'

const gMapLink ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.32809610234!2d80.22650991469895!3d13.078380816065028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526707e358a5d3%3A0xd199f3493f613c9b!2sTREXVIS+INDIA!5e0!3m2!1sen!2sse!4v1534695897577'

class ContactUs extends SubmitForm {
  render() {
    setBackground()
    const {
      name, email, mobile_number, contact_message
    } = this.state
    const contactForm = (
      <div className='contact-form'>
        <Form onSubmit={this.handleSubmit}>
          <h1>Get in Touch</h1>
          <h3>Please fill out the quick form and we will be in touch with lightning speed.</h3>
          <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
          <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email Address' onChange={this.handleChange} />
          <Form.Field value={mobile_number} required control={Input} name='phone' label='Contact No.:' placeholder='Contact No.' onChange={this.handleChange} />
          <Form.Field value={contact_message} required control={TextArea} name='contact message' label='Message:' placeholder='Message' onChange={this.handleChange} />
          <Button fluid type='submit' positive>Submit</Button>
        </Form>
      </div>
    )
    const contactDetails = (
      <Card.Group itemsPerRow={1} className='contact-details'>
        <Card raised link='#'>
          <Card.Content>
            <Card.Header>Connect with us</Card.Header>
            <Card.Description>
              <div>For support or any questions:</div>
              <div>Email us at <a href='mailto:info@trexvisindia.com'>info@trexvisindia.com</a></div>
            </Card.Description>
          </Card.Content>
        </Card>
        <iframe title='Our Office Address' className='GIframe' src={gMapLink} frameborder='0' height='450' width='600' allowfullscreen></iframe>
      </Card.Group>
    )

    return (
      <div className='contact-form-container'>
        {contactForm}
        {contactDetails}
      </div>
    )
  }
}

export default ContactUs;
