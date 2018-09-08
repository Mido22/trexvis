import React, { Component } from 'react';

import { Grid, Image, Segment } from 'semantic-ui-react'
import './../css/about.css'
import aboutUsImg from '../static/serivces/aboutUs.jpg'
import { setBackground } from '../utils'

class About extends Component {
  render() {
    setBackground()
    return (
      <Segment className='body-container'>
        <Grid verticalAlign='middle' columns={1} centered >
          <Grid.Row>
            <Grid.Column>
              <div className='about'>
                <div className='detailsDiv'>
                  <h1>About us</h1>

                  <div className='imageDiv'>
                    <Image src={aboutUsImg} />
                  </div>

                  <p>Trexvis India offers you with a broad gamut of services which includes Fleet, Foreign Exchange,Visa, Bill Payments, Money Transfer, and Travel, which is about a door to door delivery services.
  
                </p> <p>For our customer we are here with them with prompt and customized services as per their financial, needs as we would like to continue to grow as a successful travel agency in the industry because we know the value of the customer’s and what our clients needs, prefer and aggrandize. We listen carefully and then suggest the requirement on your travel needs and itineraries that closely match what you are hoping and dreaming.
  
                </p> <p>Even if you have not booked yours tickets and you are holding on your last minute of your booking means and if you need any assistance or help You can email us or call us and We will be there on the right time at the right place to help you and pin-point your best travel needs.
  
                </p> <p>Trexvis India also offers you car rental services with the best quality of cars at affordable prices. Trexvis India cars has a widest variety of cars available at your disposal by offering the best user experience we establish a permanent connect with our customers. </p>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default About;
