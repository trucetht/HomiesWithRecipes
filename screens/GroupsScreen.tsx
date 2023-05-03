import React from 'react';
import { ScrollView, VStack, Text, Box } from 'native-base';
import HomeScreenFooter from '../components/HomeScreenFooter';

const GroupsScreen = () => {
  const data = [
    { id: '1', name: 'Group 1', lastMessage: 'Last message in Group 1' },
    { id: '2', name: 'Group 2', lastMessage: 'Last message in Group 2' },
    { id: '3', name: 'Group 3', lastMessage: 'Last message in Group 3' },
    { id: '4', name: 'Group 4', lastMessage: 'Last message in Group 4' },
    { id: '5', name: 'Group 5', lastMessage: 'Last message in Group 5' },
  ];

  return (
    <><ScrollView style={{ paddingTop: 44 }}>
      <VStack space={3} p={3}>
        {data.map((item) => (
          <Box bg="gray.50" p={3} rounded="md" key={item.id}>
            <Text fontWeight="bold" fontSize="md">
              {item.name}
            </Text>
            <Text fontSize="sm">{item.lastMessage}</Text>
          </Box>
        ))}
      </VStack>
    </ScrollView><HomeScreenFooter routeName='Groups' /></>
  );
};

export default GroupsScreen;
