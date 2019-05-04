export interface IGetRequest {
  json: boolean;
  method: HttpRequestMethod;
  uri: string;
}

export interface IPostRequest {
  body: any;
  headers: {
    "Content-Type": string;
  };
  json: boolean;
  method: HttpRequestMethod;
  uri: string;
}

export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export type RequestType = IGetRequest | IPostRequest;
