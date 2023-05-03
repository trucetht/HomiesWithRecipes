/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Avatar, Box, Center, Heading, Text, Input, Button, Stack, FlatList, Pressable,} from 'native-base';
import HomeScreenFooter from '../components/HomeScreenFooter';

const RecipesScreen = () => {

    const [recipes, setRecipes] = useState([
        { id: 1, title: 'Pancakes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
        { id: 2, title: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
        { id: 3, title: 'Burgers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
        { id: 4, title: 'Tacos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
      ]);

      const renderRecipeItem = ({ item }) => {
        return (
          <Pressable onPress={() => console.log(item)}>
            <Box
              bg="gray.100"
              borderRadius={10}
              p={4}
              shadow={3}
              my={2}
            >
              <Heading size="md" color="black" mb={2}>
                {item.title}
              </Heading>
              <Text fontSize="md" color="black">
                {item.description}
              </Text>
            </Box>
          </Pressable>
        );
      };

  return (
    <Box flex={1} bg="white" alignItems="center" justifyContent="center" px={5}>
      <Center>
        <Heading size="lg" color="black" mt={2} mb={4}>
          Recipes
        </Heading>
      </Center>
      <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecipeItem}
          style={{ width: '100%', marginTop: 20 }}
        />
        <HomeScreenFooter routeName='Recipes' />
      {/* Add your recipe list component here */}
    </Box>
  );
};

export default RecipesScreen;
