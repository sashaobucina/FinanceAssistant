import React, { Component } from "react";
import Plot from "react-plotly.js";
import { getMinMax } from "../helper";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HistoricalStockPrice extends Component {
  render() {
    const { historicalStockPrices, ticker } = this.props.data;

    // plot values
    const dates = historicalStockPrices.map(price => price.date);
    const highs = historicalStockPrices.map(price => price.high);
    const lows = historicalStockPrices.map(price => price.low);

    // traces
    const trace1 = {
      type: "scatter",
      mode: "lines",
      name: `${ticker.symbol} High`,
      x: dates,
      y: highs,
      line: {color: 'rgb(23, 155, 207)'}
    }

    const trace2 = {
      type: "scatter",
      mode: "lines",
      name: `${ticker.symbol} Low`,
      x: dates,
      y: lows,
      line: {color: '#7F7F7F'}
    }

    // ranges
    const dateRange = getMinMax(historicalStockPrices, 'date');
    const low = getMinMax(historicalStockPrices, "low").low;
    const high = getMinMax(historicalStockPrices, "high").high;

    return (
      <div className="historical-stock-prices">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <Plot
                data={[ trace1, trace2 ]}
                layout={{
                  title: `Historical Stock Price for ${ticker.companyName} (NYSE)`,
                  xaxis: {
                    range: [dateRange["low"], dateRange["high"]],
                    rangeselector: { buttons: [
                      {
                        count: 1,
                        label: "1m",
                        step: "month",
                        stepmode: "backward"
                      },
                      {
                        count: 3,
                        label: "3m",
                        step: "month",
                        stepmode: "backward"
                      },
                      {
                        count: 6,
                        label: "6m",
                        step: "month",
                        stepmode: "backward"
                      },
                      {
                        count: 1,
                        label: "1y",
                        step: "year",
                        stepmode: "backward"
                      }
                    ]},
                    rangeslider: { range: [dateRange["low"], dateRange["high"]] },
                    type: 'date'
                  },
                  yaxis: {
                    autorange: true,
                    range: [low, high],
                    type: 'linear'
                  }
                }}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default HistoricalStockPrice;