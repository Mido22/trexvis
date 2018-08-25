import React, { Component } from 'react'
import {
  Card, Segment, Container
} from 'semantic-ui-react'

import './../../css/services/immigration.css'

const immigDescriptions = [
  'Expert Immigration consultants address the challenges of relocating employees while they move through complex immigration laws of the respective place of relocation within India or abroad.',
  'Our experts provide complete documentation services and entire process guidance with 100% Quality and 24/7 Services (Round the clock)',
  'Single point of contact through our Management and to deliver consistent services across the network.',
  'We will keep up your Records with a data storage security and will secure up the storage services',
].map(desc => <div>{desc}</div>)

const visaOptions = [
  {
    header: 'Application On Visa',
    description: '100% guidance with complete assistance with our well professional and experienced team'
  },
  {
    header: 'Visa/ RP Extension',
    description: 'Complete assistance on FRRO with 100% Zero error documentation on your FRRO Process'
  },
  {
    header: 'Work Permit',
    description: 'Providing services related to skilled workforce or professionals acquiring work permit in order to legally authorising them to work in a country.'
  },
  {
    header: 'Residential Permit',
    description: 'Registration will be taken care by our expert team in the stipulated time with the complete documentation, your post arrival will make you understand all the procedures involved and your responsibilities'
  },
  {
    header: 'Change Of Jurisdiction',
    description: '100% guidance with complete assistance of your employees moving from his work location to the other (one city to other city)'
  },
  {
    header: 'Pan Card',
    description: 'We will Completely support & asssit you with raising the application for your Permanent Account Number (PAN Card) which is mandatory for all foreigner earning income in India.'
  },
  {
    header: 'DE Registration',
    description: 'Expats Should De-register with FRRO as they depart from India for official immigration record purposes'
  },
].map(card =>
  <Card raised link='#' className='immigration-card' centered>
    <Card.Content>
      <Card.Header className='immigration-card-header'> {card.header} </Card.Header>
      <Card.Description text-align='center'> {card.description} </Card.Description>
    </Card.Content>
  </Card>
)

export default class Immigration extends Component {
  render() {
    return (
      <Segment raised className='immigration-container'>
      <Container>
          <div className='immigration-description-container'>{immigDescriptions}</div>
          <Card.Group className='immigration-cards' text-align='center' doubling itemsPerRow='3' centered>
            {visaOptions}
          </Card.Group>
      </Container>
      </Segment>
    );
  }
}
