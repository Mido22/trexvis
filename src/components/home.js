import React, { Component } from 'react'
import Slideshow from 'react-slidez'
import { Grid, Segment, Container, Label, Card, Image } from 'semantic-ui-react'
import wooriBank from '../static/home/Woori_Bank.jpg'
import cxPresicion from '../static/home/CX.jpg'
import slideImages from '../data/slideImages'
import './../css/home.css'

class Home extends Component {
  render() {
    const clientsPane = (
      <Segment raised className='home-column'>
        <Container className='client-header'>
          <Label size='huge' color='red' centered> Our Clients </Label>
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
    
    const slideShow = (
      <Container className='slide-container'>
        <Slideshow
          showIndex
          enableKeyboard={false}
          useDotIndex={true}
          slideInterval={3100}
          slides={slideImages}
          effect='left'
        />
      </Container>
    )

    return (
      <Container fluid className='home-container'>
        <Grid fluid relaxed stretched doubling columns={2}>
          <Grid.Row>
            <Grid.Column width={5}>
              {clientsPane}
            </Grid.Column>
            <Grid.Column width={11}>
              {slideShow}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Home;
