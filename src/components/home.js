import React, { Component } from 'react'
import { 
  Container, Label, Card, Image, Header, Icon, List
 } from 'semantic-ui-react'
import wooriBank from '../static/home/Woori_Bank.jpg'
import cxPresicion from '../static/home/CX.jpg'
import hourSupport from '../static/home/24hour.jpg'
import './../css/home.css'
import { setBackground } from '../utils'

class Home extends Component {
  render() {

    setBackground()

    const clientsPane = (
      <Container className='clients-container dark'>
        <Label size='huge' color='red'> Our Clients </Label>
        <Card>
          <Image src={wooriBank} />
        </Card>
        <Card>
          <Image src={cxPresicion} />
        </Card>
      </Container>
    )

    const greetingsDiv = (
      <div className='greetings welcome'>
        <Header as='h1' textAlign='center'>
          <Header.Content className='greetings-header'>Trexvis India greets you</Header.Content>
        </Header>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Let us explore and build together</Header.Content>
          <Icon name='angle double down' circular />
        </Header>
      </div>
    )

    const aboutTrexvis = (
      <div className='about-trexvis greetings'>
        <Header icon as='h1' textAlign='center'>
          <Icon name='car' circular />
          <Header.Content>About Trexvis</Header.Content>
        </Header>
        <p className='text'>
          We Trexvis India Incorporated In 2018. Working for the expats with the best quality of services for the expats With a broad gamut of services like Car Rentals, Immigration, Relocation, Travel Visa Processing, Tour Packages, Hotel Reservation etc on the current market trends with prompt and customized services.
        </p>
      </div>
    )

    const whyTrexvis = (
      <div className='why-trexvis greetings'>
        <Header icon as='h1' textAlign='center'>
          <Icon name='question circle outline' circular />
          <Header.Content>Why Trexvis</Header.Content>
        </Header>
        <p className='text'>
          Trexvis India company is with a culture of collaboration, a roster of talent team is working active round the clock in the creative and social community endlessly and will work for our clients looking for their improvements and ideas expecting for the current market trends.
          What makes the brand different, the real uniqueness will be the combination of 4 factors:
        </p>
        <List className='text' bulleted>
          <List.Item content='Authentic value' />
          <List.Item content='100% Quality' />
          <List.Item content='Uniqueness' />
          <List.Item content='Price' />
        </List>
        <p className='text'>
          We have never compromised on the quality and the services provided to the customer. We believe in keeping the customers happy and providing them with our services at a very competent price. We have an excellent staffs who will guide you with their best ideas by keeping in constant touch with your company and informing about the current market trends. We also provide 24 hour support.
        </p>
      </div>
    )

    const support = (
      <div className='support-trexvis greetings'>
        <Header icon as='h1' textAlign='center'>
          <Icon name='talk' circular />
          <Header.Content>Fast and 24 hour Support</Header.Content>
        </Header>
        <Image src={hourSupport} centered />
      </div>
    )

    return (
      <Container className='home-container'>
        {greetingsDiv}
        {clientsPane}
        {aboutTrexvis}
        {whyTrexvis}
        {support}
      </Container>
    )
  }
}

export default Home;
