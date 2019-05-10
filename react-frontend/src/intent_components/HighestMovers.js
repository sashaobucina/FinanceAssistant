import React, { Component } from "react";
import { MDBTable, MDBCard, MDBCardBody, MDBTableHead, MDBTableBody, MDBIcon, MDBCardHeader } from "mdbreact";

class HighestMovers extends Component {
  render() {
    const { data, direction } = this.props;
    const directionIcon = direction === 'up'
      ? "fa fa-chevron-up mr-2 fa-lg green-text"
      : "fa fa-chevron-down mr-2 fa-lg red-text"
    const title = direction === "up" ? "Highest Gainers" : "Biggest Losers"
    const icon = direction === "up"
      ? <MDBIcon className="white-text ml-2" icon="sort-amount-up" size="lg" />
      : <MDBIcon className="white-text ml-2" icon="sort-amount-down" size="lg" />
    const columns = [
      {
        label: 'Company Name',
        field: 'companyName'
      },
      {
        label: 'Symbol',
        field: 'ticker'
      },
      {
        label: 'Price',
        field: 'price'
      },
      {
        label: 'Change',
        field: 'changes'
      },
      {
        label: 'Percentage Change',
        field: 'changesPerc'
      }
    ];
    console.log(data)
    const rows = data.map((elem, index) => {
      const { changes, changesPerc, companyName, price, ticker } = elem;
      const changeElem = [<i key={index} className={directionIcon} aria-hidden={true}></i>, changes];
      return {
        companyName,
        ticker,
        price: `$${Number(price).toFixed(2)}`,
        changes: changeElem,
        changesPerc: `${Number(changesPerc).toFixed(4)}%`
      }
    });
    return (
      <MDBCard narrow>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient text-center align-items-center">
            <h5 className="text-white mt-2">
              {title} {icon}
            </h5>
          </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBTable>
              <MDBTableHead columns={columns}/>
              <MDBTableBody rows={rows} />
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
    )
  }
}

export default HighestMovers;