import React, { Component } from "react";
import { CSVLink } from "react-csv";
import { MDBBtn, MDBIcon } from "mdbreact";

class DownloadButton extends Component {
  render() {
    const { csv, filename } = this.props
    return (
      <div className="download-div">
        <MDBBtn className="download-btn teal accent-4" size="sm">
          <CSVLink className="csv-link" data={csv} filename={filename} title={filename}>
            <p className="text-white mt-3" style={{ fontSize: "14px" }}>
              Download<MDBIcon className="white-text ml-2" icon="file-excel" size="lg" />
            </p>
          </CSVLink>
        </MDBBtn>
      </div>
    )
  }
}

export default DownloadButton