import React, { Component } from "react";
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardImage, MDBCardBody, MDBListGroup, MDBListGroupItem } from "mdbreact";
import balanceSheetImg from "../static/images/balance-sheet.jpg"
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
      case "CashFlow": return cashFlowImg;
      case "BalanceSheet": return balanceSheetImg;
      case "CompanyProfile": return overviewImg;
      case "Cryptocurrencies": return cryptoImg;
      case "HistoricalStockPrice": return stockImg;
      case "IncomeStatement": return incomeImg;
      case "Forex": return forexImg;
      case "MajorIndexes": return indexImg;
      case "SectorPerformance": return sectorImg;
      default: return cardImg;
    }
  }

  createSampleUsagesList = (sampleUsages) => {
    const sampleUsagesJSX = sampleUsages.map(sampleUsage => {
      return <MDBListGroupItem>{`"${sampleUsage}"`}</MDBListGroupItem>
    });
    return (
      <MDBListGroup>
        {sampleUsagesJSX}
      </MDBListGroup>
    )
  }

  generateIntentCards(intentInfos) {
    return intentInfos.map(intentInfo => (
      <MDBCol key={intentInfo.intent} className="mb-4" md="4">
        <MDBCard>
          <MDBCardImage className="card-img" src={this.intentToImg(intentInfo.intent)} />
          <MDBCardBody>
            <MDBCardTitle>{intentInfo.intent}</MDBCardTitle>
            <div className="help-card-text" style={{ textAlign: "left", fontSize: "15px" }}>
              <p>
                <b>Description:</b><br></br>
                {intentInfo.description}
              </p>
              <p>
                <b>Required Entity:</b><br></br>
                <span className="font-italic">{intentInfo.entity !== null ? "Company Symbol" : "None"}</span>
              </p>
              <p><b>Sample Usages: </b></p>
              {this.createSampleUsagesList(intentInfo.sampleUsages)}
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ))
  }

  render() {
    const { intentInfos } = this.props.data;
    console.log(intentInfos);
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