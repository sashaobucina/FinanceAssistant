import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import { numberWithCommas } from "../helper";
import { MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";

class IncomeStatement extends Component {
  render() {
    const { csv, financials, ticker } = this.props.data
    const years = this.extractYears(financials)
    const tableRows = Object.keys(financials).map(financial => {
      const values = this.extractValues(financials[financial])
      return <IncomeStatementRow key={financial} financial={financial} values={values} />
    })
    const columns = [
      {
        'label': 'Financials',
        'field': 'financial'
      },
      {
        'label': '2014',
        'field': 'year1'
      },
      {
        'label': '2015',
        'field': 'year2'
      },
      {
        'label': '2016',
        'field': 'year3'
      },
      {
        'label': '2017',
        'field': 'year4'
      },
      {
        'label': 'TTM',
        'field': 'TTM'
      }
    ]
    const rows = [
      {
        'financial': 'Revenue',
        'year1': '0.00',
        'year2': '11.21',
        'year3': '2,000.54',
        'year4': '431.34',
        'TTM': '300.21'
      },
      {
        'financial': 'Revenue',
        'year1': '0.00',
        'year2': '11.21',
        'year3': '2,000.54',
        'year4': '431.34',
        'TTM': '300.21'
      }
    ]
    return(
      <>
        <Row style={{ textAlign: "center" }}>
          <Col md={12}>
            <DownloadButton csv={csv} filename={`IncomeStatement_${ticker.symbol}.csv`} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <MDBCard narrow>
              <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient text-center align-items-center">
                <h5 className="text-white">
                  {ticker.companyName}'s Annual Income Statement (in millions)
                </h5>
              </MDBCardHeader>
              <MDBCardBody cascade>
                <MDBTable btn fixed>
                  <MDBTableHead columns={columns}/>
                  <MDBTableBody rows={rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </>
    )
  }

  extractYears(financials) {
    const entries = financials[Object.keys(financials)[0]].entries
    return entries.map(entry => entry.year)
  }

  extractValues(financial) {
    return financial.entries.map(entry => entry.value)
  }
}

class IncomeStatementRow extends Component {
  render() {
    const { financial, values } = this.props
    return (
      <tr>
        <td>{financial}</td>
        {values.map((value, index) => <td data-positive={value >= 0} key={index}>${numberWithCommas(Number(value).toFixed(0))}</td>)}
      </tr>
    )
  }
}

export default IncomeStatement