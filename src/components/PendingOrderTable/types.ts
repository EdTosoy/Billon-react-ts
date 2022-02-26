export interface IPendingOrderTable {
  currencyPair: string;
  createdAt: string;
  marketOrder: string;
  confirmationCandle: string;
  timeFrame: string;
  confidence: string;
  mood: string;
  didFollowThePlan: boolean;
  actions: string;
}
