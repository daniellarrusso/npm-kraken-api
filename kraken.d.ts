// kraken.d.ts

declare module 'kraken-api-node' {
  interface KrakenClientOptions {
    otp?: string;
    timeout?: number;
  }

  type KrakenCallback = (err: any, result: any) => void;

  export default class KrakenClient {
    constructor(
      key: string,
      secret: string,
      options?: string | KrakenClientOptions
    );

    api(
      method: string,
      params?: Record<string, any>,
      callback?: KrakenCallback
    ): Promise<any>;

    publicMethod(
      method: string,
      params?: Record<string, any>,
      callback?: KrakenCallback
    ): Promise<any>;

    privateMethod(
      method: string,
      params?: Record<string, any>,
      callback?: KrakenCallback
    ): Promise<any>;
  }
}
