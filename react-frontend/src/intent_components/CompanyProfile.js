import React, { Component } from "react";
import { MDBRow, MDBContainer, MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem, MDBJumbotron, MDBInput } from "mdbreact";
import { nFormatter } from "../helper";

class CompanyProfile extends Component {
  render() {
    const { profile, rating, ticker } = this.props.data
    const { companyName, symbol } = ticker;
    return (
      <div className="company-profile">
        <MDBContainer>
          <MDBJumbotron>
            <MDBRow>
              <MDBCol md="12">
                <h4 className="">{companyName}</h4>
                <img src={`https://financialmodelingprep.com/images-New-jpg/${symbol}.jpg`} alt="comapanyLogo" className="img-thumbnail" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-2 mt-3">
              <MDBCol md="4">
                <p className="text-muted">Company Rating:</p>
                <div className="rating-stars">{showCompanyRating(rating)}</div>
              </MDBCol>
              <MDBCol md="4">
                <p className="text-muted">Stock Price:</p>
                <div className="profile-stock-price">{showStockPrice(profile)}</div>
              </MDBCol>
              <MDBCol md="4">
                <p className="text-muted">Symbol:</p>
                <h3>{symbol}</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
              <MDBCol md="12" style={{ textAlign: "left" }}>
                {showOverview(profile)}
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ textAlign: "left" }}>
              <MDBCol md="12">
                {showCompanyProfile(profile)}
              </MDBCol>
            </MDBRow>
          </MDBJumbotron>
    </MDBContainer>
      </div>
    )
  }
}

export const showOverview = (companyProfile) => {
  const { Beta, VolAvg, MktCap, LastDiv } = companyProfile;
  return (
    <>
      <h5 className="text-muted font-weight-bolder">Financials:</h5>
      <MDBListGroup className="profile-financials">
        <MDBListGroupItem><span className="text-muted">Beta:</span> <b>{Number(Beta).toFixed(2)}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Vol Average:</span> <b>{`$${nFormatter(VolAvg)}`}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Market Cap:</span> <b>{`$${nFormatter(MktCap)}`}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Last Dividend:</span> <b>{LastDiv !== "0" ? LastDiv : "N/A"}</b></MDBListGroupItem>
      </MDBListGroup>
    </>
  )
}

export const showCompanyProfile = (companyProfile) => {
  const { CEO, description, exchange, industry, sector, website } = companyProfile;
  return (
    <>
      <h5 className="text-muted font-weight-bolder">Company Overview:</h5>
      <MDBListGroup className="profile-description">
        <MDBListGroupItem><span className="text-muted">CEO: </span> <b>{CEO}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Stock Exchange: </span> <b>{exchange}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Industry: </span> <b>{industry}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Sector: </span> <b>{sector}</b></MDBListGroupItem>
        <MDBListGroupItem><span className="text-muted">Website: </span> <a href={website}>{website}</a></MDBListGroupItem>
        <MDBListGroupItem>
          <MDBInput type="textarea" label="Description:" labelClass="text-muted " value={description} disabled />
        </MDBListGroupItem>
      </MDBListGroup>
    </>
  );
}

export const showCompanyRating = (companyRating) => {
  const rating = companyRating["rating"];
  return [...Array(5)].map((_e, i) => {
    const color = (i < rating) ? "amber-text" : "grey-text";
    return <MDBIcon key={i} className={color} icon="star" />
  });
}

export const showStockPrice = (companyProfile) => {
  const { Changes, ChangesPerc, Price } = companyProfile;
  const color = Changes >= 0 ? "green-text": "red-text";
  const changeIcon = (Changes >= 0) ? <MDBIcon icon="caret-up" className={`ml-2 ${color}`} /> : <MDBIcon icon="caret-down" className={`ml-2 ${color}`} />;
  return (
    <>
      <h5>
        {`$${Number(Price).toFixed(2)}`}
        {changeIcon}
      </h5>
      <p className={color}>{Changes} {ChangesPerc}</p>
      <p className={color}></p>
    </>
  )
}

export default CompanyProfile;