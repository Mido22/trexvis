import React, { Component } from 'react'
import {
  Card, Segment, Container, List
} from 'semantic-ui-react'
import './../../css/services/relocation.css'

const relocationDescription = [
  'Trexvis India provides you with the full gamut of Domestic relocation and the destination services to the corporates, individuals. Small Scale, large Scale industry & Manufacturing Companies for your relocation.',
  <div>For professional assistance and for the guidance for your employee relocation needs, Reach us @ 9600013001 / <a href='mailto:info@trexvisindia.com'>info@trexvisindia.com</a></div>,
].map(desc => <div>{desc}</div>)

const relocationOptions = [
  {
    header: 'Look See Program',
    description: [
      'In the orientation Program we include an overview of Commercial & Residential Places, City\'s Culture, Shopping, Banking, International Schools, etc.',
      'Our orientation services include accompanied tour by our professional with the expertise team identifies key considerations at an early stage to reduce the overall cost of the relocation.',
      'Our Experienced team guide\'s you and also assist you to help on your relocation need for your employees',
    ]
  },
  {
    header: 'School Search',
    description: [
      'Helping our clients to find the internationals schools in the city',
      'Scheduling of interviews with selected schools',
      'Registration Process',
    ]
  },
  {
    header: 'Home Finding Program',
    description: [
      'Finding the right home, in the right location, is quite critical to ensure the satisfaction and success of your new employees.',
      'Here we will analyse with the relocating employee prior to the visit about his requirements',
      'One on One Meeting with the employee prior to the home finding program',
      'Helps him with the welcome kit and the area information',
      'Genuine property list',
      'Guding the employee with the entire process till finalizing the property',
      'Lease negotiations & Registration',
    ]
  },
  {
    header: 'Tenancy Management',
    description: [
      'Our tenancy management services helps you to reduce the impact for both company and also for the employee who is relocating',
      'We will support you on your lease negotiations & agreements, utility connections bill payments, deposits etc',
    ]
  },
  {
    header: 'Settling In Services',
    description: [
      'Our experts team can help & ensure that your employees’ changeover are as smooth as possible.',
      'Will make the clients in to the atmospheric drive in the living city like Getting admissions in schools, Getting Memberships with the clubs, License, Also in bank account opening, Registration with embassies or high commissions, and also with utility set up etc',
    ]
  },
  {
    header: 'Departure Program',
    description: [
      'We support & guide our clients to leave their homeland safely and resettled in India in an orderly manner.',
    ]
  },
  {
    header: 'Temporary Housing (Service Appartments, Hotels & Guest House)',
    description: [
      'Our temporary housing options will helps you on a short term living in the city based on your requirements with in your budget and the employee needs',
      'We will make arrangement of your temporary housing viewings for Individual, group or family, students or for employees on your budget estimate with our experienced team',
    ] 
  },
].map(card =>
  <Card raised link='#' >
    <Card.Content>
      <Card.Header className='relocation-card-header'> {card.header} </Card.Header>
      <Card.Description text-align='center'>
        <List>
          {
            card.description.map(desc =>
              <List.Item>
                <List.Icon name='check' color='green' />
                <List.Content>{desc}</List.Content>
              </List.Item>
            )
          }
        </List>
      </Card.Description>
    </Card.Content>
  </Card>)

export default class Relocation extends Component {
  render() {
    return (
      <Segment raised className='relocation-container'>
        <Container>
          <div className='relocation-description-container'>{relocationDescription}</div>
          <Card.Group centered className='relocation-cards' text-align='center' doubling itemsPerRow='2'>{relocationOptions}</Card.Group>
        </Container>
      </Segment>
    );
  }
}
