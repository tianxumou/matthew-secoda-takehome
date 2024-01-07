'use client';

import { Group, MantineProvider, ScrollArea, Table, Text } from '@mantine/core';
import { ColumnNames } from '../common';

// add fetched data in later
export function CryptoTable() {
  // const rows = data.map((item) => (
  //   <Table.Tr key={item.id}>
  //     <Table.Td>
  //       <Group gap="sm">
  //         {/* <Avatar size={26} src={item.avatar} radius={26} /> */}
  //         <Text size="sm" fw={500}>
  //           {item.name}
  //         </Text>
  //       </Group>
  //     </Table.Td>
  //     <Table.Td>{item.email}</Table.Td>
  //     <Table.Td>{item.job}</Table.Td>
  //   </Table.Tr>
  // ));

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
          {/* <Table.Tbody>{rows}</Table.Tbody> */}
        </Table>
      </ScrollArea>
    </MantineProvider>
  );
}
