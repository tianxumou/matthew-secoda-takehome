'use client';

import { Group, MantineProvider, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { ColumnNames, CryptoItem } from '../common';

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
  });

  //TODO: add shimmer loading effects
  if (isLoading) {
    return (
      <Text fw={500} ta="center">
        loading...
      </Text>
    );
  }

  if (error) {
    <Text fw={500} ta="center">
      {error.message}
    </Text>;
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
                        {/* TODO: add icons  */}
                        {/* <Avatar size={26} src={crypto.avatar} radius={26} /> */}
                        <Text size="sm" fw={500}>
                          {crypto.name} ({crypto.symbol})
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>${crypto.quote.USD.price.toFixed(2)}</Table.Td>
                    <Table.Td>${crypto.quote.USD.market_cap.toFixed(2)}</Table.Td>
                    <Table.Td>{crypto.circulating_supply.toFixed(3)}</Table.Td>
                    <Table.Td>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</Table.Td>
                    <Table.Td>${crypto.quote.USD.volume_24h.toFixed(4)}</Table.Td>
                  </Table.Tr>
                ))
              : null}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </MantineProvider>
  );
}
