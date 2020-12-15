import React from 'react'
import Table from 'react-bootstrap/Table'

import { numberWithCommas } from '../utils'


export default function CountryList(props) {
  return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          {props.countries.map((country, i) => (<tr key={country.Slug}>
            <td>{i + 1}</td>
            <td>{country.Country}</td>
            <td>{numberWithCommas(country.TotalConfirmed)}</td>
            <td>{numberWithCommas(country.TotalConfirmed - (country.TotalRecovered + country.TotalDeaths))}</td>
            <td>{numberWithCommas(country.TotalDeaths)}</td>
          </tr>
          )
          )}
        </tbody>
      </Table>
  )
}
