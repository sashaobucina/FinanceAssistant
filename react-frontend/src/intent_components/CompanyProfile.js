import React, { Component } from "react";

class CompanyProfile extends Component {
  render() {
    const { profile, rating, ticker} = this.props.data
    return (
      <div>
        <p>Company profile for {ticker.companyName}</p>
        {JSON.stringify(profile)}
        {JSON.stringify(rating)}
      </div>
    )
  }
}

export default CompanyProfile;