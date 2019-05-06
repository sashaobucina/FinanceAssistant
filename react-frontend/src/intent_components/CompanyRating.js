import React, { Component } from "react";

class CompanyRating extends Component {
  showRating(rating) {
    return rating === 0 ? '🤮 (0 stars)': '⭐'.repeat(rating)
  }

  render() {
    console.log(this.props.data)
    const { rating, ticker } = this.props.data
    return (
      <div>{ticker.companyName}'s Company Rating: {this.showRating(rating)}</div>
    )
  }
}

export default CompanyRating