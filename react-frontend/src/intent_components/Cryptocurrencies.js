import React, { Component } from "react";
import { MDBDataTable, MDBIcon } from "mdbreact";
import { numberWithCommas } from "../helper";

class Cryptocurrencies extends Component{
  render() {
    const { cryptos } = this.props.data;
    const columns = [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Ticker',
        field: 'ticker'
      },
      {
        label: 'Price',
        field: 'price',
      },
      {
        label: 'Percentage Change',
        field: 'changes'
      },
      {
        label: 'Market Cap (USD)',
        field: 'marketCapUsd',
        sort: 'desc'
      },
    ]
    const rows = cryptos.map((crypto, index) => {
      const { changes, marketCapUsd, name, price, ticker } = crypto;
      const changeClassName = changes >= 0
        ? "fa fa-chevron-up mr-2 fa-lg green-text"
        : "fa fa-chevron-down mr-2 fa-lg red-text"
      const changeElem = [<i key={index} className={changeClassName} aria-hidden={true}></i>, `${changes}%`]
      return {
        name,
        ticker,
        price: `$${numberWithCommas(Number(price).toFixed(2))}`,
        changes: changeElem,
        marketCapUsd: `$${numberWithCommas(marketCapUsd)}`
      }
    });
    const data = {
      columns,
      rows
    }
    return (
      <div className="cryptos mt-5 ml-5 mr-5">
        <h5 className="cryptos-title text-muted">
          Cryptocurrencies
          <MDBIcon className="black-text ml-2" fab icon="bitcoin" />
        </h5>
        <MDBDataTable
          bordered
          striped
          entriesLabel="Show cryptocurrencies "
          theadColor="blue-gradient"
          data={data}
        />
      </div>
    )
  }
}

export default Cryptocurrencies;