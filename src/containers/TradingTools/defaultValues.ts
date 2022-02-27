export const createOrderDefaultValues = {
  lotSize: "",
  numberOfPips: "",
  profit: "",
  entryPrice: "",
  stopLoss: "",
  takeProfit: "",
  stockastic: "",
  atr: "",
};
// PROFIT_CALCULATOR_FIELD_NAME.lotSize

export const pendingOrderDefaultValues = {
  currencyPair: "",
  createdAt: {
    time: "",
    date: "",
  },
  marketOrder: "",
  confirmationCandle: "",
  timeFrame: "",
  mood: "",
  confidence: "",
  didFollowThePlan: false,
  actions: "",
};

export const onGoingTradeDefaultValues = {
  marketOrder: "",
  profit: "",
};

export const tradingToolDefaultValues = {
  createOrder: createOrderDefaultValues,
  pendingOrders: [],
  onGoingTrades: [],
};
