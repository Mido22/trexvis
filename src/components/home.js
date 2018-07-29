import React, { Component } from 'react'
import Slideshow from 'react-slidez'
import { Grid, Segment, Container, Label, Card } from 'semantic-ui-react'
import wooriBank from '../static/home/handshake2_large.jpg'
import cxPresicion from '../static/home/cx_precition.jpg'
import slideImages from '../data/slideImages'
import './../css/home.css'

class Home extends Component {
  render() {
    const clientsPane = (
      <Segment raised className='home-column'>
        <Container className='client-header'>
          <Label size='huge' color='red' centered> Our Clients </Label>
        </Container>
        <Card raised image={wooriBank} header='Woori Bank' centered/>
        <Card raised image={cxPresicion} header='CX Precision' centered/>
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
