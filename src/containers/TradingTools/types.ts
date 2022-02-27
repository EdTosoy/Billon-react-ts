export interface ICreateOrder {
  lotSize?: number | string;
  numberOfPips?: number | string;
  profit?: number | string;
  entryPrice?: number | string;
  stopLoss?: number | string;
  takeProfit?: number | string;
  stockastic?: number | string;
  atr?: number | string;
}

export interface IFormInputs {
  pendingOrders: any;
  onGoingTrades: any;
  news: any;
  createOrder: ICreateOrder | null;
}
