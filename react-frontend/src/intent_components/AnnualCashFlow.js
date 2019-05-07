import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import { numberWithCommas } from "../helper";

class AnnualCashFlow extends Component {
  render() {
    const { csv, financials, ticker } = this.props.data
    const years = this.extractYears(financials)
    const anyYear = financials[0].financials
    const tableRows = Object.keys(anyYear).map(financialEntry => {
      console.log(financialEntry)
      const values = this.extractValues(financials, financialEntry)
      return <AnnualCashFlowRow key={financialEntry} financial={financialEntry} values={values} />
    })
    return (
      <>
        <Row style={{ textAlign: "center" }}>
          <Col md={12}>
            <DownloadButton csv={csv} filename={`AnnualCashFlow_${ticker.symbol}`} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="annual-cash-flow">
              <Table striped bordered hover>
                <caption style={{ captionSide: "top", textAlign: "center" }}>
                  {ticker.companyName}'s Annual Cash Flow (in millions)
                </caption>
                <thead>
                  <tr>
                    <th>Financials</th>
                    {years.map((year, i) => <th key={year}>{year}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tableRows}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </>
    )
  }

  extractYears(financials) {
    return financials.map(annualEntry => annualEntry.date)
  }

  extractValues(financials, key) {
    return financials.map(annualCashFlowEntry =>
      annualCashFlowEntry.financials[key]
    )
  }
}

class AnnualCashFlowRow extends Component {
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

export default AnnualCashFlow