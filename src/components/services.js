import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import airImg from '../static/service_air.jpg';
import carImg from '../static/service_car.jpg';
import forexImg from '../static/service_forex.jpg';
import hotelImg from '../static/service_hotel.jpg';
import tempoImg from '../static/force-traveller.jpg';
import visaImg from '../static/Visa_processing.jpg';
import './services.css';

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Services</h1>
        <p>Trexvis India offers you with a wide range of services which includes Fleet, Foreign Exchange,Visa, Bill Payments, Money Transfer, and Travel, which is about a door to door delivery services.</p>

        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>
                Air ticketing, airport pickups
              </Card.Header>
            </Card.Content>
            <Image src={airImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Car rentals
              </Card.Header>
            </Card.Content>
            <Image src={carImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Hotel bookings
              </Card.Header>
            </Card.Content>
            <Image src={hotelImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Foreign exchange
              </Card.Header>
            </Card.Content>
            <Image src={forexImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Visa Processing
              </Card.Header>
            </Card.Content>
            <Image src={visaImg} />
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Tempo Traveller
              </Card.Header>
            </Card.Content>
            <Image src={tempoImg} />
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default Services;
