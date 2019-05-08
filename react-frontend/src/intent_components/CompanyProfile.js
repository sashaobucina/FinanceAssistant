import React, { Component } from "react";

class CompanyProfile extends Component {
  render() {
    const { profile, ticker} = this.props.data
    return (
      <div>
        <p>Company profile for {ticker.companyName}</p>
        {JSON.stringify(profile)}
      </div>
    )
  }
}

export default CompanyProfile;