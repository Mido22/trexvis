import React, { Component } from 'react'
import { Header, Icon, Image, Button, Form, Modal, Input, TextArea, Select } from 'semantic-ui-react'
import logo from '../static/trexvis_Logo_JPEG.jpg'
import hctef from './ipa.js'
import './enquiryModal.css'

const serviceOptions = [
  { text: 'Visa, Travel, Immigration', value: 'Visa, Travel, Immigration' },
  { text: 'Tour Packages', value: 'Tour Packages' },
  { text: 'Hotel Reservation', value: 'Hotel Reservation' },
  { text: 'Car Rental', value: 'Car Rental' },
  { text: 'Forex', value: 'Forex' },
]

class EnquiryModal extends Component {
  state = { modalOpen2: true}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false, modalOpen2: false })


  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    hctef(this.state).catch(console.error).then(() => console.log('submitkllndsf'))
  }

  render = () => {

    const {
      name, email, company, phone, service, comment
    } = this.state;
    return (
    <Modal trigger={<Button color='red' open={this.state.modalOpen2} onClose={this.handleClose}>Enquiry</Button>}>
      <Modal.Header>Enquiry Form</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={logo} />
        <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
              >
                <Header icon='browser' content='Form Submitted' />
                <Modal.Content>
                  <h3>We have received your request, would get back to you soon.</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> Okay
              </Button>
                </Modal.Actions>
              </Modal>
            <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
            <Form.Field value={company} required control={Input} name='Company' label='Company:' placeholder='Company' onChange={this.handleChange} />
            <Form.Field value={email} required control={Input} name='Email' label='Email' placeholder='Email' onChange={this.handleChange} />
            <Form.Field value={phone} required control={Input} name='phone' label='Phone Number' placeholder='Phone Number' onChange={this.handleChange} />
            <Form.Field value={service} control={Select} label='Service' name='Service' placeholder='Service' options={serviceOptions} onChange={this.handleChange} />
            <Form.Field value={comment} control={TextArea} name='Comment' placeholder='Comment' onChange={this.handleChange} />
            <Button type='submit' positive>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>)
  }
}

export default EnquiryModal