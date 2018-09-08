import React, { Component } from 'react'
import { Container, Label, Card, Image } from 'semantic-ui-react'
import wooriBank from '../static/home/Woori_Bank.jpg'
import cxPresicion from '../static/home/CX.jpg'
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

    return (
      <Container className='home-container'>
        {clientsPane}
      </Container>
    )
  }
}

export default Home;
