import React from 'react'
import { Image, Button, Form, Modal, Input, TextArea, Select } from 'semantic-ui-react'
import logo from '../static/trexvis_Logo.png'
import SubmitForm from './submitForm'
import './../css/enquiryModal.css'

const serviceOptions = [
  'Short Term Rental',
  'Immigration',
  'Relocation',
  'Air Ticketing',
  'Tour Packages',
  'Visa Services',
  'Hotel Reservation',
].map(text => ({ text, value: text }))

const otherOptions = [
  'Suggest',
  'Complain',
  'Appreciate',
].map(text => ({ text, value: text }))

class EnquiryModal extends SubmitForm {
  state = { modalOpen2: true }
  handleSubmit2 = () => this.handleSubmit().then(() => this.handleClose())
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false, modalOpen2: false })

  render = () => {
    const {
      name, email, company, phone, service, comment, reason
    } = this.state;

    return (
      <Modal closeIcon trigger={<Button className='bounce_button' color='red' open={this.state.modalOpen2} onClose={this.handleClose}>Feedback</Button>}>
      <Modal.Header>Feedback Form</Modal.Header>
      <Modal.Content image scrolling>
        <Image wrapped size='medium' src={logo} />
          <Modal.Description style={{width: '100%'}}>
            <Form onSubmit={this.handleSubmit2}>
            <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
            <Form.Field value={company} required control={Input} name='Company' label='Company Name:' placeholder='Company' onChange={this.handleChange} />
            <Form.Field value={service} control={Select} label='Line of Business:' name='Service' placeholder='Service' options={serviceOptions} onChange={this.handleChange} />
            <Form.Field value={email} required control={Input} name='Email' label='Email' placeholder='Email' onChange={this.handleChange} />
            <Form.Field value={phone} required control={Input} name='phone' label='Phone Number' placeholder='Phone Number' onChange={this.handleChange} />
            <Form.Field value={reason} control={Select} label='Would you like to:' name='Reason' placeholder='Reason for Feedback' options={otherOptions} onChange={this.handleChange} />
            <Form.Field value={comment} control={TextArea} name='Comment' placeholder='Comment' onChange={this.handleChange} />
            <Button type='submit' positive floated='right'>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>)
  }
}

export default EnquiryModal