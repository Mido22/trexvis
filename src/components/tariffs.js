import React, { Component } from 'react';
import { Table, Icon, List, Divider } from 'semantic-ui-react'
import './tariffs.css';

const yes = <Icon color='green' name='checkmark' size='large' />
const no = <Icon color='red' name='remove' size='large' />
const localCarTariffHeaders = ['Local Trips (hours/Km)', 'Indica', 'Indica', 'Indigo',
  'Etios', 'Xylo', 'Innova', 'Tavera', 'Tavera', 'Tempo Traveller', 'Tempo Traveller']
const localCarTariffData = [
  [ 'Air Conditioned', no, yes, yes, yes, yes, yes, no, yes, no, yes ],
  [ '4 Hrs / 40 Kms', '550/-', '600/-', '800/-', '900/-', '1000/-', '1100/-', '900/-', '1000/-', '1250/-', '1400/-' ],
  [ '5 Hrs / 50 Kms', '650/-', '750/-', '950/-', '1100/-', '1100/-', '1200/-', '950/-', '1100/-', '1350/-', '1450/-' ],
  [ '6 Hrs / 60 Kms', '750/-', '850/-', '1100/-', '1300/-', '1350/-', '1425/-', '1150/-', '1325/-', '1600/-', '1750/-' ],
  [ '7 Hrs / 70 Kms', '850/-', '950/-', '1300/-', '1500/-', '1600/-', '1650/-', '1350/-', '1500/-', '1850/-', '2050/-' ],
  [ '10 Hrs / 100 Kms', '1200/-', '1500/-', '1900/-', '2200/-', '2200/-', '2400/-', '1900/-', '2200/-', '2700/-', '2900/-' ],
  [ 'Additional Kms', '9/-', '10/-', '12/-', '14/-', '11/-', '12/-', '12/-', '14/-', '14/-', '15/-' ],
  [ 'Each hour (After 10 hours)', '125/-', '150/-', '180/-', '200/-', '225/-', '240/-', '200/-', '225/-', '250/-', '300/-' ],
]
const outCarTariffHeaders = ['Car Type', 'Indica', 'Indica', 'Indigo',
  'Etios/Swift', 'Xylo', 'Innova', 'Tavera', 'Tavera', 'Tempo Traveller', 'Tempo Traveller', 'Mini Coach', 'Mini Coach']
const outCarTariffData = [
  [ 'Air Conditioned', no, yes, yes, yes, yes, yes, no, yes, no, yes, no, yes ],
  [ 'Per KM Charges', '7.00/-', '8.5.00/-', '9.00/-', '10.00/-', '11.00/-', '12.00/-', '10.00/-', '11.00/-', '14.00/-', '15.00/-', '17.00/-', '22.00/-' ],
  [ 'Driver Batta', '350/-', '350/-', '350/-', '350/-', '400/-', '400/-', '400/-', '400/-', '500/-','500/-','500/-','500/-' ],
]
const innovaHeaders =  ['Local Hourly Packages', 'Package Cost - AC', 'Extra KM', 'Extra Hour']
const innovaData = [
  [ '5 Hrs / 50 Kms', 'Rs. 1200/-', 'Rs. 12/-', 'Rs. 250/-'],
  [ '6 Hrs / 60 Kms', 'Rs. 1450/-', 'Rs. 12/-', 'Rs. 250/-'],
  [ '7 Hrs / 70 Kms', 'Rs. 1700/-', 'Rs. 12/-', 'Rs. 250/-'],
  [ '10 Hrs / 100 Kms', 'Rs. 2400/-', 'Rs. 12/-', 'Rs. 250/-'],
  [ '11 Hrs / 100 Kms', 'Rs. 2650/-', 'Rs. 12/-', 'Rs. 250/-'],
]
const tirupatiHeaders = [ 'Car Type', 'Air Conditoned', '# Persons/Seats', 'One Day Trip', 'Two Day Trip']
const tirupatiData = [
  [ 'Indica', yes, 4, 'Rs. 4000/-', 'Rs. 5800/-'],
  [ 'Indico', yes, 4, 'Rs. 4500/-', 'Rs. 6000/-'],
  [ 'Honda Amaze', yes, 4, 'Rs. 4500/-', 'Rs. 6000/-'],
  [ 'Swift Dezire', yes, 4, 'Rs. 4500/-', 'Rs. 6000/-'],
  [ 'Fiesta', yes, 4, 'Rs. 5400/-', 'Rs. 7400/-'],
  [ 'Etios', yes, 4, 'Rs. 5000/-', 'Rs. 7000/-'],
  [ 'Tavera', yes, 9, 'Rs. 7500/-', 'Rs. 8500/-'],
  [ 'Xylo', yes, 7, 'Rs. 7500/-', 'Rs. 8500/-'],
  [ 'Toyota Innova', yes, 6, 'Rs. 6300/-', 'Rs. 7800/-'],
  [ 'Toyota Innova', yes, 7, 'Rs. 7500/-', 'Rs. 8500/-'],
  [ 'Tempo Traveler', yes, 12, 'Rs. 12,000/-', 'Rs. 13,800/-'],
]

class Tariffs extends Component {
  render() {
    return (
<div className='Tariffs'>
  <h1>Tariffs</h1>
  {formTable('Local Car Tariff', localCarTariffHeaders, localCarTariffData)}
  {formTable('Out Station Tariff', outCarTariffHeaders, outCarTariffData, '(Out Station per day Minimum 250 Kms coverage)')}
    <Divider hidden />
  {formTerms()}
  {formTable('Innova Local Hourly Packages', innovaHeaders, innovaData)}
  {formInfo0()}
  {formTable('Tou Packages for Tirupati', tirupatiHeaders, tirupatiData)}
  {formInfo()}
</div>
    )
  }
}

function formTable(title, headers, data, moreInfo) {
  return (
  <div>
    <Divider hidden />
    <h3> {title} </h3>
    <p> {moreInfo} </p>
    <Table striped collapsing>
      <Table.Header>
        <Table.Row>
          { headers.map((name, i) => <Table.HeaderCell key={i}>{name}</Table.HeaderCell>) }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { data.map((row, i0) => 
          <Table.Row key={i0}>
            { row.map((name, i) => <Table.Cell key={i} collapsing >{name}</Table.Cell>) }
          </Table.Row>
        ) }
      </Table.Body>
    </Table>
    <Divider hidden />
  </div>)
}

function formTerms () {
  return (
    <div>
    <h3> General Terms:    </h3>
    <p> Tariff Excludes Permit & Toll charges</p>
    <List as='ul'>
      <List.Item as='li'>Starting & closing kilometers, hours will be calculated from our to office.</List.Item>
      <List.Item as='li'>We shall not be held responsible or liable for late running of vehicles due to traffic jams, traffic diversions, accidents etc</List.Item>
      <List.Item as='li'>Starting Kilometers , Hours and Closing Kilometers Hours would be calculated as if the vehicles started from and ended at our office irrespective of where it starts and where it ends. </List.Item>
      <List.Item as='li'>Driver bata calculated on calender day basis, Return journey beyond midnight will be consider as additional driver batta </List.Item>
      <List.Item as='li'>Out station the Minimum coverage Km is 250 kms Per day. </List.Item>
      <List.Item as='li'>Minimum Coverage Km per calender day up to 12 midnight is 250Kms </List.Item>
    </List>
  </div>)
}


function formInfo0 () {
  return (
    <div>
    <List as='ul'>
      <List.Item as='li'>We provide 24/7 Car Rental for all your package needs. You can call us any time for the package service across tamilnadu to anywhere we are always there for you. </List.Item>
      <List.Item as='li'>We have all type of vehicles for your comfortable journey. </List.Item>
      <List.Item as='li'>For Tirupati our package are shown below. Trexvis India has been serving the customers since 2015.  </List.Item>
    </List>
  </div>)
}


function formInfo () {
  return (
    <div>
    <List as='ul'>
      <List.Item as='li'>Package Include: Parking, Toll Gate, Driver Batta, Fuel, Andhra Tax & Permit.</List.Item>
      <List.Item as='li'>Package Exclude: Food, Hotel Staying, dharshan Ticket.</List.Item>
      <List.Item as='li'>For Online Dharshan Ticket: Ticket Amount – 300.00/- Rs</List.Item>
      <List.Item as='li'>Quick Contact: 9600013001 / 9094855306</List.Item>
    </List>
  </div>)
}

export default Tariffs;
