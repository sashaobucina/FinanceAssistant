import { performance } from "perf_hooks";
import YAML from "yaml";
import {
  ICompanyProfile,
  ICrypto,
  IFinancialStatement,
  IForex,
  IHighestMover,
  IHistoricalStockPrice,
  IMajorIndex,
  IRawHistoricalPrices,
  ISector,
  MoverType
} from "./interfaces/financials";
import { ILogger } from "./interfaces/logger";
import { RequestType } from "./interfaces/requests";
import { IRawTicker, IRealTimeStockPrice, Ticker } from "./interfaces/symbols";
import { IRasaConfig } from "./interfaces/training_data";
import {
  purifyCryptos,
  purifyFinancialRatios,
  purifyFinancialStatement,
  purifyForex,
  purifyHighestMovers,
  purifyHistoricalPrices,
  purifyMajorIndexes,
  purifySectorPerformance
} from "./purify";

export class Requester {
  constructor(
    private readonly httpRequest: (obj: RequestType) => Promise<any>,
    private readonly logger: ILogger
  ) {}

  public getCompanyRating(symbol: string): Promise<{ rating: number }> {
    const url = `https://financialmodelingprep.com/api/company/rating/${symbol}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then(result => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get company rating for ${symbol}`
      );
      return result[symbol];
    });
  }
  public getForex(): Promise<IForex[]> {
    const url = `https://financialmodelingprep.com/api/forex?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((rawForex: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get FOREX information`
      );
      return purifyForex(rawForex);
    });
  }

  public getRealTimeStockPrice(symbol: string): Promise<IRealTimeStockPrice> {
    const url = `https://financialmodelingprep.com/api/company/real-time-price/${symbol}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((result: IRealTimeStockPrice) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(
          2
        )} ms to get real time stock price for ${symbol.toUpperCase()}`
      );
      return result;
    });
  }

  public getKeyMetrics(symbol: string): Promise<any> {
    const url = `https://financialmodelingprep.com/api/v3/company-key-metrics/${symbol}`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((rawKeyMetrics: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(
          2
        )} ms to get key metrics information for ${symbol}`
      );
      return rawKeyMetrics;
    });
  }

  public getEnterpriseValues(symbol: string): Promise<any> {
    const url = `https://financialmodelingprep.com/api/v3/enterprise-value/${symbol}`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then(rawEnterpriseValues => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get enterprise values for ${symbol}`
      );
      return rawEnterpriseValues;
    });
  }

  public getFinancialGrowth(symbol: string): Promise<any> {
    const url = `https://financialmodelingprep.com/api/v3/financial-statement-growth/${symbol}`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then(rawFinancialGrowth => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get financial growth for ${symbol}`
      );
      return rawFinancialGrowth;
    });
  }

  public getMajorIndexes(): Promise<IMajorIndex[]> {
    const url = `https://financialmodelingprep.com/api/majors-indexes?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((majorIndexes: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get major indexes changes`
      );
      return purifyMajorIndexes(majorIndexes);
    });
  }

  public getTickers(): Promise<Ticker[]> {
    const url = `https://financialmodelingprep.com/api/stock/list/all?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((result: IRawTicker[]) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get all valid symbols`
      );
      return result.map(
        rawTicker => new Ticker(rawTicker.Ticker, rawTicker.companyName)
      );
    });
  }

  public getFinancialStatement(
    financialStatement: string,
    symbol: string
  ): Promise<IFinancialStatement> {
    const baseUrl = `https://financialmodelingprep.com/api/v2/financials/${financialStatement}/${symbol}`;
    const t0 = performance.now();
    const promises: Array<Promise<any>> = [
      this.httpRequest({
        json: true,
        method: "GET",
        uri: `${baseUrl}?datatype=json`
      }),
      this.httpRequest({
        json: true,
        method: "GET",
        uri: `${baseUrl}?datatype=csv`
      })
    ];
    return Promise.all(promises).then((results: any[]) => {
      const t1 = performance.now();
      const [jsonData, csvData] = results;
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get cash flow for ${symbol}`
      );
      const financials = purifyFinancialStatement(jsonData.financials);
      return {
        csv: csvData,
        financials
      };
    });
  }

  public getCryptos(): Promise<ICrypto[]> {
    const url = `https://financialmodelingprep.com/api/cryptocurrency?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((cryptos: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get all the cryptocurrencies`
      );
      return purifyCryptos(cryptos);
    });
  }

  public getFinancialRatios(symbol: string): Promise<any> {
    const url = `https://financialmodelingprep.com/api/financial-ratios/${symbol}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then(financialRatios => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get financial ratios for ${symbol}`
      );
      return purifyFinancialRatios(financialRatios);
    });
  }

  public getCompanyProfile(symbol: string): Promise<ICompanyProfile> {
    const url = `https://financialmodelingprep.com/api/company/profile/${symbol}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((companyProfile: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get company profile for ${symbol}`
      );
      return companyProfile[symbol];
    });
  }

  public getSectorPerformance(): Promise<ISector[]> {
    const url = `https://financialmodelingprep.com/api/sectors-performance?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((rawSectors: any) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(2)} ms to get sector performance`
      );
      return purifySectorPerformance(rawSectors);
    });
  }

  public getHistoricalStockPrice(
    symbol: string
  ): Promise<IHistoricalStockPrice[]> {
    const url = `https://financialmodelingprep.com/api/v2/historical-price-full/${symbol}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then((historicalPrices: IRawHistoricalPrices) => {
      const t1 = performance.now();
      this.logger.log(
        `Took ${(t1 - t0).toFixed(
          2
        )} ms to get historical stock prices for ${symbol}`
      );
      return purifyHistoricalPrices(historicalPrices);
    });
  }

  public getHighestMovers(type: MoverType): Promise<IHighestMover[]> {
    const url = `https://financialmodelingprep.com/api/stock/${type}?datatype=json`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: url
    }).then(highestMovers => {
      const t1 = performance.now();
      this.logger.log(`Took ${(t1 - t0).toFixed(2)} ms to get highest gainers`);
      return purifyHighestMovers(highestMovers);
    });
  }

  public trainModel(
    trainingData: any,
    rasaConfig: IRasaConfig,
    project: string,
    model: string
  ): Promise<any> {
    const rasaUri = `http://localhost:5000/train?project=${project}&model=${model}`;
    const rasaData = {
      data: { rasa_nlu_data: trainingData }
    };
    const bodyStr = YAML.stringify(rasaConfig) + YAML.stringify(rasaData);
    const t0 = performance.now();
    return this.httpRequest({
      body: bodyStr,
      headers: {
        "Content-Type": "application/x-yml"
      },
      json: false,
      method: "POST",
      uri: rasaUri
    })
      .then((result: any) => {
        const t1 = performance.now();
        this.logger.log(`Took ${(t1 - t0).toFixed(2)} ms to train model`);
        return result;
      })
      .catch(err => {
        this.logger.logError(err);
      });
  }

  public parseQuestion(question: string, model: string): Promise<any> {
    const rasaUri = `http://localhost:5000/parse?q=${question}&model=${model}`;
    const t0 = performance.now();
    return this.httpRequest({
      json: true,
      method: "GET",
      uri: rasaUri
    })
      .then((result: any) => {
        const t1 = performance.now();
        this.logger.log(
          `Took ${(t1 - t0).toFixed(2)} ms to parse - "${question}"`
        );
        return result;
      })
      .catch(this.logger.logError);
  }
}
