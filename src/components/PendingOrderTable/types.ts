interface IcreatedAt {
  date: string;
  time: string;
}
export interface IPendingOrderTable {
  currencyPair: string;
  createdAt: IcreatedAt;
  marketOrder: string;
  confirmationCandle: string;
  timeFrame: string;
  confidence: string;
  mood: string;
  didFollowThePlan: boolean;
  actions: string;
}
