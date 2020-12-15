import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loader from './components/Loader'

import CountryList from './components/CountryList'
import { numberFormatter } from './utils'


export default function WorldStatistics() {
  const [worldStatisticsData, setWorldStatisticsData] = useState({
    data: {},
    error: null,
    loading: true
  })

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(
        (result) => {
          setWorldStatisticsData({
            data: result,
            loading: false,
            error: null
          })
        },
        (error) => {
          setWorldStatisticsData({
            ...worldStatisticsData,
            loading: false,
            error
          })
        }
      )
  }, [])

  return (
    <Container style={{ marginTop: 10 }}>
      { worldStatisticsData.loading && <Row>
        <Col style={{ textAlign: 'center' }}>
          <Loader />
        </Col>
      </Row>}

      { worldStatisticsData.error && <Row>
        <Col>
          <p>Problem fetching data!</p>
        </Col>
      </Row>}

      { !worldStatisticsData.loading && worldStatisticsData.data &&
        <div>
          <Row>
            <Col lg={4} md={12}>
              <Card style={{ marginTop: 10 }} >
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Total Cases</Card.Title>
                  <Card.Text>
                    {numberFormatter(worldStatisticsData.data.Global.TotalConfirmed)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card style={{ marginTop: 10 }} >
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Active Cases</Card.Title>
                  <Card.Text>
                    {numberFormatter(worldStatisticsData.data.Global.TotalConfirmed - (
                      worldStatisticsData.data.Global.TotalRecovered + worldStatisticsData.data.Global.TotalDeaths
                    )
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card style={{ marginTop: 10 }} >
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }} >Total Deaths</Card.Title>
                  <Card.Text>
                    {numberFormatter(worldStatisticsData.data.Global.TotalDeaths)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ margin: 0, marginTop: 30 }}>
            <CountryList countries={worldStatisticsData.data.Countries} />
          </Row>
        </div>}
    </Container>
  )
}
