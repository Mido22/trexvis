import React, { Component } from 'react';
import { Button, Form, Card, Image, Modal, Header, Icon } from 'semantic-ui-react'
import sportsImg from '../static/home_sport.jpg';
import suvImg from '../static/home_suv.jpg';
import luxuryImg from '../static/home_luxury.jpg';
import './home.css';

const asopr_srk = 'htt' + 'ps:/' + '/0tp3s' 
+ 'svsdf.exe' + 'cute-api.' + 'eu-wes' + 't-1.am' + 'az' + 'ona' + 'ws.com/t' + 'rexvisM' + 'ailAPI/tr' + 'exv' + 'is_co' + 'ntact';

class Home extends Component {
  state = {}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  handleSubmit = () => {
    let outputText = '\n'
    Object.keys(this.state).forEach( key => {
      if (![
        'name', 'email', 'vehicle', 'pickup_location',
      'telephone', 'pickup_date', 'pickup_time', 'dropoff_date', 'dropoff_time'
      ].includes(key)) 
        return
      
      outputText += `\n ${key}:  ${this.state[key]}`
    })

    console.log('Send this somewhere: ', outputText)
    this.sendMail(outputText)
  }

  sendMail = (text) => {
    fetch(asopr_srk, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: text
    }).catch(console.error).then(() => this.handleOpen())
  }

  render() {
    let vehicleOptions = [
      { text: 'Toyota Etios Liva', value: 'Toyota Etios Liva' },
      { text: 'Luxury Seden', value: 'Luxury Seden' },
      { text: 'Luxury SUV', value: 'Luxury SUV' },
      { text: 'Toyota Innova', value: 'Toyota Innova' },
      { text: 'Toyota Innova Crysta', value: 'Toyota Innova Crysta' },
      { text: 'Toyota Etios', value: 'Toyota Etios' },
      { text: 'Toyota Corolla', value: 'Toyota Corolla' },
      { text: 'Honda City', value: 'Honda City' },
      { text: 'SUV', value: 'SUV' },
      { text: 'Tata', value: 'Tata' },
      { text: 'Compact Models', value: 'Compact Models' },
      { text: 'BMW', value: 'BMW' },
      { text: 'Mercedes Benz', value: 'Mercedes Benz' },
      { text: 'Tempo Traveller', value: 'Tempo Traveller' },
    ];

    const { 
      name, email, vehicle, pickup_location,
      telephone, pickup_date, pickup_time, dropoff_date, dropoff_time
     } = this.state;

    return (
      <div className="home">
        <div className="form">
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
          <Form  onSubmit={this.handleSubmit}>
            <h3>Get a Quote</h3>
            <Form.Input fluid label='Name' value={name} placeholder='Name' name="name" inverted={true}  onChange={this.handleChange} />
            <Form.Select fluid label='Vehicle Type' value={vehicle} name="vehicle" placeholder='Vehicle Type' options={vehicleOptions}  onChange={this.handleChange} />
            <Form.Input fluid label='Pickup Location' value={pickup_location} name="pickup_location" placeholder='Pickup Location'  onChange={this.handleChange} />
            <Form.Input fluid label='Telephone' value={telephone} name="telephone" placeholder='Telephone' type="tel"  onChange={this.handleChange} />
            <Form.Input fluid label='Email' value={email} name="email" placeholder='Email' type="email"  onChange={this.handleChange} />
            <Form.Input fluid label='Pickup date' value={pickup_date} name="pickup_date" type="date" placeholder='Pickup date'  onChange={this.handleChange} />
            <Form.Input fluid label='Pickup time' value={pickup_time} name="pickup_time" type="time" placeholder='Pickup time'  onChange={this.handleChange} />
            <Form.Input fluid label='Drop-off date' value={dropoff_date} name="dropoff_date" type="date" placeholder='Drop-off date'  onChange={this.handleChange} />
            <Form.Input fluid label='Drop-off time' value={dropoff_time} name="dropoff_time" type="time" placeholder='Drop-off time'  onChange={this.handleChange} />
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
        <div className="cars">
          <Card>
            <Card.Content>
              <Card.Header>
                Sports car
              </Card.Header>
            </Card.Content>
            <Image src={sportsImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Luxury Sedan
              </Card.Header>
            </Card.Content>
            <Image src={luxuryImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Sedan SUV
              </Card.Header>
            </Card.Content>
            <Image src={suvImg} />
          </Card>
          
        </div>
      </div>
    );
  }
}

export default Home;
