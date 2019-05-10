import React, { Component } from "react";
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardBody } from "mdbreact";
import cashFlowImg from "../static/images/cash-flow.jpg";
import cardImg from "../static/images/fintech.jpg";
import cryptoImg from "../static/images/cryptos.jpg"
import incomeImg from "../static/images/income-statement.jpg";
import forexImg from "../static/images/forex.jpg";
import indexImg from "../static/images/index.jpg";
import overviewImg from "../static/images/overview.jpg"
import sectorImg from "../static/images/sector.jpg";
import stockImg from "../static/images/stock-price.jpg";

class Help extends Component {
  intentToImg(intentName) {
    switch(intentName) {
      case "AnnualCashFlow": return cashFlowImg;
      case "CompanyProfile": return overviewImg;
      case "Cryptocurrencies": return cryptoImg;
      case "IncomeStatement": return incomeImg;
      case "Forex": return forexImg;
      case "MajorIndexes": return indexImg;
      case "SectorPerformance": return sectorImg;
      case "StockPrice": return stockImg;
      default: return cardImg;
    }
  }

  generateIntentCards(intentInfos) {
    return intentInfos.map(intentInfo => (
      <MDBCol key={intentInfo.intent} className="mb-4" md="4">
        <MDBCard>
          <MDBCardImage className="card-img" src={this.intentToImg(intentInfo.intent)} />
          <MDBCardBody style={{ textAlign: "center" }}>
            <MDBCardTitle>{intentInfo.intent}</MDBCardTitle>
            <MDBCardText>
              Shows the annual income statements for the past few years if provided a
              <span className="font-italic"> valid symbol</span>.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ))
  }

  render() {
    const { intentInfos } = this.props.data;
    console.log(this.generateIntentCards(intentInfos))
    return(
      <div className="help-intent mb-3">
        <div className="help-label">
          <p>
            You can invoke the following actions by chatting with the
            <span className="font-weight-bolder font-italic"> Finance Assistant</span>
          </p>
        </div>
        <div className="help-cards">
          <MDBContainer>
            <MDBRow>
              {this.generateIntentCards(intentInfos)}
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    )
  }
}

export default Help;