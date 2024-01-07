'use client';

import { Group, MantineProvider, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ColumnNames, CryptoItem, MIN_IN_MS, TOP_RESULTS_DISPLAY } from '../common';
import { Icon } from './icons';

// to format the money amount input.
const { format } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function CryptoTable() {
  const {
    data: cryptoList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cryptoList'],
    queryFn: () =>
      fetch('api/cryptoCurrencies')
        .then((res) => res.json())
        .then((response) => response.data),
    refetchInterval: MIN_IN_MS,
  });

  if (isLoading || error) {
    return (
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            {ColumnNames.map((field) => (
              <th key={field}>{field}</th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array(TOP_RESULTS_DISPLAY)
            .fill(0)
            .map((_, index) => (
              <Table.Tr key={index}>
                {Array(ColumnNames.length)
                  .fill(0)
                  .map((__, i) => (
                    <Table.Td key={i}>
                      <Skeleton />
                    </Table.Td>
                  ))}
              </Table.Tr>
            ))}
        </Table.Tbody>
        <Table.Caption>
          {error ? (
            <Text c="red" fw={500}>
              Something went wrong, Please Try again.
            </Text>
          ) : null}
        </Table.Caption>
      </Table>
    );
  }

  return (
    <MantineProvider defaultColorScheme="light">
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <Table.Thead style={{ backgroundColor: 'lightgrey' }}>
            <Table.Tr>
              {ColumnNames.map((columnName) => (
                <Table.Th key={columnName}>
                  <Group justify="space-between">
                    <Text fw={600} ta="center">
                      {columnName}
                    </Text>
                  </Group>
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {cryptoList
              ? cryptoList.map((crypto: CryptoItem) => (
                  <Table.Tr key={crypto.id}>
                    <Table.Td>
                      <Group gap="sm">
                        <Icon name={crypto.symbol} />
                        <Text size="sm" fw={500}>
                          {crypto.name} ({crypto.symbol})
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>{format(crypto.quote.USD.price)}</Table.Td>
                    <Table.Td>{format(crypto.quote.USD.market_cap)}</Table.Td>
                    <Table.Td>{crypto.circulating_supply.toFixed(3)}</Table.Td>
                    <Table.Td
                      style={{ color: crypto.quote.USD.percent_change_24h > 0 ? 'green' : 'red' }}
                    >
                      {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                    </Table.Td>
                    <Table.Td>{format(crypto.quote.USD.volume_24h)}</Table.Td>
                  </Table.Tr>
                ))
              : null}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </MantineProvider>
  );
}
