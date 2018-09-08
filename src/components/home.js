import React, { Component } from 'react'
import { Segment, Container, Label, Card, Image } from 'semantic-ui-react'
import wooriBank from '../static/home/Woori_Bank.jpg'
import cxPresicion from '../static/home/CX.jpg'
import './../css/home.css'
import { setBackground } from '../utils'

class Home extends Component {
  render() {
    setBackground()

    const clientsPane = (
      <Segment raised className='home-column'>
        <Container className='client-header'>
          <Label size='huge' color='red'> Our Clients </Label>
        </Container>
        <Card raised centered>
          <Card.Content>
            <Card.Header textAlign='center'>Woori Bank</Card.Header>
            <Image src={wooriBank} />
          </Card.Content>
        </Card>
        <Card raised centered>
          <Card.Content>
            <Card.Header textAlign='center'>CX Precision</Card.Header>
            <Image src={cxPresicion} />
          </Card.Content>
        </Card>
      </Segment>
    )

    return (
      <Container className='home-container'>
        {clientsPane}
      </Container>
    )
  }
}

export default Home;
