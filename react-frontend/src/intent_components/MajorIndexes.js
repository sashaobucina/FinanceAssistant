import React, { Component } from "react";
import { numberWithCommas } from "../helper";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

class MajorIndexes extends Component {
  render() {
    const { majorIndexes } = this.props.data
    const columns = [
      {
        label: "Stock Market",
        field: "stockMarket"
      },
      {
        label: "Index",
        field: "index"
      },
      {
        label: "Price",
        field: "price"
      },
      {
        label: "Changes",
        field: "changes"
      },
      {
        label: "Update Date",
        field: "updateDate"
      },
    ];
    const rows = majorIndexes.map((majorIndex, i) => {
      const { change, index, name, price, updateDate } = majorIndex;
      const changeClassName = change >= 0
        ? "fa fa-chevron-up mr-2 fa-lg green-text"
        : "fa fa-chevron-down mr-2 fa-lg red-text"
      const priceClassName = change >= 0 ? "green-text" : "red-text"
      const changeElem = [<i key={i} className={changeClassName} aria-hidden={true}></i>, change]
      const priceElem = [<p key={i} className={priceClassName}>${numberWithCommas(Number(price).toFixed(2))}</p>];
      return {
        stockMarket: name,
        index: index,
        price: priceElem,
        changes: changeElem,
        updateDate: updateDate
      }
    });
    return (
      <div className="major-indexes">
        <MDBCard narrow>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient text-center align-items-center">
            <h5 className="text-white mt-2">
              Major Indexes (Stock Markets)
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

export default MajorIndexes;