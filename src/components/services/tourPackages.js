import React from 'react'
import { Divider, List, Card, Form, Input, Segment, Button, Select, Container, Icon, Header } from 'semantic-ui-react'
import SubmitForm from '../submitForm'
import {
  countires,
  themes,
  passengers,
  tourTypes,
  domesticDestionations,
  internationalDestionations,
  religiousDestionations,
} from './../../data/tourPackages.js'
import './../../css/services/tourPackages.css'


export default class TourPackages extends SubmitForm {
  render() {
    const {
      theme, name, email, mobile_number, country = 'India', passenger, domestic, international, religious, tourType = tourTypes[0].value,
    } = this.state

    let tourSelected

    switch (tourType) {
      case 'International':
        tourSelected = <Form.Field required value={international} control={Select} label='International Destination:' name='International Destination' placeholder='International Destination' options={internationalDestionations} onChange={this.handleChange} />; break;
      case 'Domestic':
        tourSelected = <Form.Field required value={domestic} control={Select} label='Domestic Destination:' name='Domestic Destination' placeholder='Domestic Destination' options={domesticDestionations} onChange={this.handleChange} />; break;        
      default:
        tourSelected = <Form.Field required value={religious} control={Select} label='Religious destination:' name='Religious destination' placeholder='Religious destination' options={religiousDestionations} onChange={this.handleChange} />; break;
    }

    return (
      <Container>
        <Segment raised>
          <Header as='h2' icon textAlign='center'>
            <Icon color='teal' name='plane' size='big' />
            Welcome to Trexvis India (Holiday Destination Packages)
            <Header.Subheader>Find your holiday destination on your budget</Header.Subheader>
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field required value={theme} control={Select} label='Vacation Theme:' name='Vacation Theme' placeholder='Vacation Theme' options={themes} onChange={this.handleChange} />
            <Form.Field required value={tourType} control={Select} label='Tour type:' name='Tour type' placeholder='Tour type' options={tourTypes} onChange={this.handleChange} />
            {tourSelected}
            <Form.Field value={name} required control={Input} name='Name' label='Name:' placeholder='Name' onChange={this.handleChange} />
            <Form.Field value={email} required control={Input} name='Email' label='Email:' placeholder='Email' onChange={this.handleChange} />
            <Form.Field value={country} control={Select} name='country' label='Country:' placeholder='Country' options={countires} onChange={this.handleChange} />
            <Form.Field value={mobile_number} required control={Input} name='phone' label='Contact No.:' placeholder='Contact No.' onChange={this.handleChange} />
            <Form.Field value={passenger} control={Select} name='passengers' label='No. of passengers:' placeholder='No. of passengers' options={passengers} onChange={this.handleChange} />
            <Button fluid type='submit' positive>Submit</Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}
