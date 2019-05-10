import React, { Component } from "react";
import Chart from "chart.js";

class HistoricalStockPrice extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: "line",
        data: {
            //Bring in data
            labels: ["Jan", "Feb", "March"],
            datasets: [
                {
                    label: "Sales",
                    data: [86, 67, 91],
                }
            ]
        },
        options: {
            //Customize chart options
        }
    });
  }

  render() {
    const { historicalStockPrices } = this.props.data;
    return (
      <>
        <div>
          <canvas
            id="myChart"
            ref={this.chartRef}
          />
        </div>
        <div className="historical-stock-prices">
          {JSON.stringify(historicalStockPrices)}
        </div>
      </>
    )
  }
}

export default HistoricalStockPrice;