export interface IOngoinTradesTable {
  currencyPair: string;
  createdAt: IcreatedAt;
  marketOrder: string;
  profit: string;
  id: string;
}

interface IcreatedAt {
  date: string;
  time: string;
}
