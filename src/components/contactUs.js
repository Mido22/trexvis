import React from 'react'
import {
  Divider, Container, Form, Input, Button, TextArea, 
  Segment
} from 'semantic-ui-react'
import './../css/contactUs.css'
import SubmitForm from './submitForm'

class ContactUs extends SubmitForm {
  render() {
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
      <div className='contact-details'>
        <h3>Connect with us</h3>
        <div>For support or any questions:</div>
        <div>Email us at info@trexvisindia.com</div>
        <div></div>
        <div>Address:</div>
        <div>35/70 Gajapathy Street,</div>
        <div>Shenoy Nagar, Chennai- 600 030.</div>
      </div>
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
