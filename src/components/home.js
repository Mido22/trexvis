import React, { Component } from 'react';
import { Button, Form, Card, Image } from 'semantic-ui-react'
import sportsImg from '../static/home_sport.jpg';
import suvImg from '../static/home_suv.jpg';
import luxuryImg from '../static/home_luxury.jpg';
import './home.css';

class Home extends Component {
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

    return (
      <div className="home">
        <div className="form">
          <Form>
            <h3>Get a Quote</h3>
            <Form.Input fluid label='Name' placeholder='Name' inverted={true} />
            <Form.Select fluid label='Vehicle Type' placeholder='Vehicle Type' options={vehicleOptions} />
            <Form.Input fluid label='Pickup Location' placeholder='Pickup Location' />
            <Form.Input fluid label='Telephone' placeholder='Telephone' type="tel"/>
            <Form.Input fluid label='Pickup date' type="date" placeholder='Pickup date' />
            <Form.Input fluid label='Pickup time' type="time" placeholder='Pickup time' />
            <Form.Input fluid label='Drop-off date' type="date" placeholder='Drop-off date' />
            <Form.Input fluid label='Drop-off time' type="time" placeholder='Drop-off time' />
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
