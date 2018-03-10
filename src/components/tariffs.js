import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react'
import './tariffs.css';

const yes = <Icon color='green' name='checkmark' size='large' />
const no = <Icon color='red' name='remove' size='large' />
const localCarTariffHeaders = ['Local Trips (hours/Km)', 'Indica', 'Indica', 'Indigo',
  'Etios', 'Xylo', 'Innova', 'Tavera', 'Tavera', 'Tempo Traveller', 'Tempo Traveller']
const localCarTariffData = [
  [ 'Air Conditioned', no, yes, yes, yes, yes, yes, no, yes, no, yes ],
  [ '4 Hrs / 40 Kms', '550/-', '600/-', '800/-', '900/-', '1000/-', '1100/-', '900/-', '1000/-', '1250/-', '1400/-' ],
  [ '5 Hrs / 0 Kms', '650/-', '750/-', '950/-', '1100/-', '1100/-', '1200/-', '950/-', '1100/-', '1350/-', '1450/-' ],
  [ '6 Hrs / 0 Kms', '750/-', '850/-', '1100/-', '1300/-', '1350/-', '1425/-', '1150/-', '1325/-', '1600/-', '1750/-' ],
  [ '7 Hrs / 0 Kms', '850/-', '950/-', '1300/-', '1500/-', '1600/-', '1650/-', '1350/-', '1500/-', '1850/-', '2050/-' ],
  [ '10 Hrs / 0 Kms', '1200/-', '1500/-', '1900/-', '2200/-', '2200/-', '2400/-', '1900/-', '2200/-', '2700/-', '2900/-' ],
  [ 'Additional Kms', '9/-', '10/-', '12/-', '14/-', '11/-', '12/-', '12/-', '14/-', '14/-', '15/-' ],
  [ 'Each hour (After 10 hours)', '125/-', '150/-', '180/-', '200/-', '225/-', '240/-', '200/-', '225/-', '250/-', '300/-' ],
]

class Services extends Component {
  render() {
    return (
      <div className="Tariffs">
        <h1>Tariffs</h1>
        {formTable('Local Car Tariff', localCarTariffHeaders, localCarTariffData)}
      </div>
    );
  }
}

function formTable(title, headers, data) {
  return (
  <div>
    <h3> {title} </h3>
    <Table striped>
      <Table.Header>
        <Table.Row>
          { headers.map((name, i) => <Table.HeaderCell key={i}>{name}</Table.HeaderCell>) }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { data.map((row, i0) => 
          <Table.Row key={i0}>
            { row.map((name, i) => <Table.Cell key={i}>{name}</Table.Cell>) }
          </Table.Row>
        ) }
      </Table.Body>
    </Table>
  </div>)
}

export default Services;
