import React, { Component } from "react";
import { CSVLink } from "react-csv";
import { MDBBtn, MDBIcon } from "mdbreact";

class DownloadButton extends Component {
  render() {
    const { csv, filename } = this.props
    return (
      <div className="download-div">
        <MDBBtn className="download-btn teal accent-4" >
          <CSVLink className="csv-link" data={csv} filename={filename} title={filename}>
            <MDBIcon className="white-text" icon="file-excel" size="2x" />
          </CSVLink>
        </MDBBtn>
      </div>
    )
  }
}

export default DownloadButton