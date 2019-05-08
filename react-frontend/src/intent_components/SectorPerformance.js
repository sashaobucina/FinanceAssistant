import React, { Component } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBCardHeader, MDBCard, MDBCardBody } from "mdbreact";

class SectorPerformance extends Component {
  render() {
    const { sectorPerformances } = this.props.data;
    const columns = [
      {
        label: 'Sector',
        field: 'sector',
        sort: 'asc'
      },
      {
        label: 'Change',
        field: 'change'
      },
    ]
    const rows = sectorPerformances.map((sectorPerformance, index) => {
      const { change, name } = sectorPerformance;
      const changeAsNum = Number(change.replace('%', ''));
      const changeClassName = changeAsNum >= 0
        ? "fa fa-chevron-up mr-2 fa-lg green-text"
        : "fa fa-chevron-down mr-2 fa-lg red-text"
      const changeElem = [<i key={index} className={changeClassName} aria-hidden={true}></i>, change]
      return {
        sector: name,
        change: changeElem
      }
    })
    return (
      <div className="sector-performances mt-4">
        <MDBCard narrow>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient text-center align-items-center">
            <h5 className="text-white">
              Performance of Financial Sectors
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

export default SectorPerformance;