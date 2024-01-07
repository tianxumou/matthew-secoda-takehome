export const ColumnNames = [
  'Name',
  'Price',
  'Market Cap',
  'Circulating Supply',
  'Change %',
  'Last (24h)',
];

export type CryptoItem = {
  id: string;
  name: string;
  symbol: string;
  circulating_supply: number;
  quote: {
    USD: {
      price: number;
      market_cap: number;
      percent_change_24h: number;
      volume_24h: number;
    };
  };
};

// one min is 60000 in ms.
export const MIN_IN_MS = 60000;
