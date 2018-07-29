import React, { Component } from 'react'
import { Image, Button, Form, Modal, Input, TextArea, Select } from 'semantic-ui-react'
import logo from '../static/trexvis_Logo_JPEG.jpg'
import hctef from './ipa.js'
import './../css/enquiryModal.css'

const serviceOptions = [
  { text: 'Visa', value: 'Visa' },
  { text: 'Travel', value: 'Travel' },
  { text: 'Immigration', value: 'Immigration' },
  { text: 'Tour Packages', value: 'Tour Packages' },
  { text: 'Hotel Reservations', value: 'Hotel Reservations' },
  { text: 'Car Rentals', value: 'Car Rentals' },
  { text: 'Forex', value: 'Forex' },
]

class EnquiryModal extends Component {
  state = { modalOpen2: true }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => hctef(this.state).catch(console.error).then(() => this.handleClose())

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false, modalOpen2: false })

  render = () => {

    const {
      name, email, company, phone, service, comment
    } = this.state;
    return (
      <Modal closeIcon trigger={<Button color='red' open={this.state.modalOpen2} onClose={this.handleClose}>Enquiry</Button>}>
      <Modal.Header>Enquiry Form</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={logo} />
          <Modal.Description style={{width: '100%'}}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
            <Form.Field value={company} required control={Input} name='Company' label='Company:' placeholder='Company' onChange={this.handleChange} />
            <Form.Field value={email} required control={Input} name='Email' label='Email' placeholder='Email' onChange={this.handleChange} />
            <Form.Field value={phone} required control={Input} name='phone' label='Phone Number' placeholder='Phone Number' onChange={this.handleChange} />
            <Form.Field value={service} control={Select} label='Service' name='Service' placeholder='Service' options={serviceOptions} onChange={this.handleChange} />
            <Form.Field value={comment} control={TextArea} name='Comment' placeholder='Comment' onChange={this.handleChange} />
            <Button type='submit' positive floated='right'>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>)
  }
}

export default EnquiryModal