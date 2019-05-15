import React, { Component } from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from "mdbreact";

class Forex extends Component {
  render() {
    const { forex } = this.props.data;
    const columns = [
      {
        label: 'Foreign Exchanges',
        field: 'forex'
      },
      {
        label: 'Price',
        field: 'price'
      },
      {
        label: 'Change',
        field: 'change',
        sort: 'asc'
      },
      {
        label: 'Currency',
        field: 'currency'
      },
    ]
    const rows = forex.map((forexInfo, index) => {
      const { change, currency, exchange, price } = forexInfo;
      const changeClassName = change >= 0
        ? "fa fa-chevron-up mr-2 fa-lg green-text"
        : "fa fa-chevron-down mr-2 fa-lg red-text"
      const changeElem = [<i key={index} className={changeClassName} aria-hidden={true}></i>, change]
      return {
        forex: exchange,
        price: price,
        change: changeElem,
        currency: currency
      }
    })
    return (
      <div className="sector-performances mt-4">
        <MDBCard narrow>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient text-center align-items-center">
            <h5 className="text-white mt-2">
              Foreign Exchange Market (FOREX)
              <MDBIcon className="white-text ml-2" icon="dollar-sign" size="sm" />
              <MDBIcon className="white-text ml-2" icon="yen-sign" size="sm" />
              <MDBIcon className="white-text ml-2" icon="euro-sign" size="sm" />
            </h5>
          </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBTable>
              <MDBTableHead columns={columns}/>
              <MDBTableBody rows={rows} />
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}

export default Forex;