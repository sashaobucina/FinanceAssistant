import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton/DownloadButton";

class IncomeStatement extends Component {
  render() {
    const { csv, financials, ticker } = this.props.data
    const years = this.extractYears(financials)
    const tableRows = Object.keys(financials).map(financial => {
      const values = this.extractValues(financials[financial])
      return <IncomeStatementRow key={financial} financial={financial} values={values} />
    })
    return(
      <Row>
        <Col md={{ span: 10, offset: 1}}>
          <div className="income-statement">
            <DownloadButton csv={csv} filename={`${ticker.symbol}IncomeStatememt.csv`}/>
            <Table striped bordered hover>
              <caption style={{ captionSide: "top" }}>{ticker.companyName}'s Income Statement</caption>
              <thead>
                <tr>
                    <th>Financials</th>
                    {years.map(year => <th key={year}>{year}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
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
        {values.map((value, index) => <td key={index}>${Number(value).toFixed(2)}</td>)}
      </tr>
    )
  }
}

export default IncomeStatement