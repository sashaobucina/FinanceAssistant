import React, { Component } from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

class DownloadButton extends Component {
  render() {
    console.log(this.props)
    const { csv, filename } = this.props
    console.log(csv)
    return (
      <div className="download-div">
        <Button className="download-btn" variant="outline-success" >
          <CSVLink className="csv-link" data={csv} filename={filename} title={filename}>Export to CSV</CSVLink>
        </Button>
      </div>
    )
  }
}

export default DownloadButton