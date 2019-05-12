import React, { Component } from "react";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import { numberWithCommas, isNumber } from "../helper";
import { MDBDataTable, MDBRow, MDBCol } from "mdbreact";

class FinancialStatement extends Component {
  render() {
    const { csv, financials, ticker } = this.props.data;
    let data = [];
    if (financials.length !== 0) {
      const entry = financials[0];
      const columns = Object.keys(entry).map(key => ({
        label: key,
        field: key.toLowerCase()
      }))
      const rows = this.formatNumbers(financials);
      data = { columns, rows };
    }
    return (
      <div className="financial-statment">
        { financials.length === 0
            ? <h4 className="text-muted">No information for {ticker.companyName}</h4>
            : <>
                <MDBRow>
                  <MDBCol md="3" style={{ textAlign: "left" }}>
                    <DownloadButton csv={csv} filename={`AnnualCashFlow_${ticker.symbol}`} />
                  </MDBCol>
                  <MDBCol md="6">
                    <h5 className="mt-4 financial-statement-title text-muted">
                      {this.props.title} for {ticker.companyName} (in millions)
                    </h5>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="annual-cash-flow">
                      <MDBDataTable
                        bordered
                        striped
                        info={false}
                        paging={false}
                        sortable={false}
                        theadColor="blue-gradient"
                        data={data}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </>
        }
        </div>
    )
  }

  formatNumbers(financials) {
    financials.forEach(financial => {
      Object.keys(financial).forEach(key => {
        if (financial[key] === '') {
          financial[key] = 'N/A';
        } else if (isNumber(financial[key])) {
          financial[key] = `$${numberWithCommas(financial[key])}`;
        }
      })
    })
    return financials;
  }
}

export default FinancialStatement;