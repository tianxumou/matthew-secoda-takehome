// Don't have much time left, would love to write more test cases.
import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';
import { CryptoTable } from './CryptoTable';

const server = setupServer(
  http.get('api/cryptoCurrencies', () =>
    HttpResponse.json([
      {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        circulating_supply: 50000,
        quote: {
          USD: {
            price: 10000000.231414,
            market_cap: 20000000.0454235,
            percent_change_24h: 2.054,
            volume_24h: 30000000.35235,
          },
        },
      },
    ])
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CryptoTable', () => {
  it('renders cryptolist from mocked response', async () => {
    const queryClient = new QueryClient();

    queryClient.setQueryData(['cryptoList'], {
      error: null,
      isLoading: false,
      cryptoList: [
        {
          id: '1',
          name: 'Bitcoin',
          symbol: 'BTC',
          circulating_supply: 50000,
          quote: {
            USD: {
              price: 10000000.231414,
              market_cap: 20000000.0454235,
              percent_change_24h: 2.054,
              volume_24h: 30000000.35235,
            },
          },
        },
      ],
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CryptoTable />
      </QueryClientProvider>
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
  });
});
