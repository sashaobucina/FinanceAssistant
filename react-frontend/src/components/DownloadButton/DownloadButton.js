import React, { Component } from "react";
import { CSVLink } from "react-csv";
import { MDBBtn, MDBIcon } from "mdbreact";

class DownloadButton extends Component {
  render() {
    const { csv, filename } = this.props
    return (
      <div className="download-div">
        <MDBBtn outline color="success" className="download-btn" size="sm">
          <CSVLink className="csv-link" data={csv} filename={filename} title={filename}>
            <p className="green-text mt-2" style={{ fontSize: "13px" }}>
              Download<MDBIcon className="ml-2" icon="file-excel" size="2x" />
            </p>
          </CSVLink>
        </MDBBtn>
      </div>
    )
  }
}

export default DownloadButton