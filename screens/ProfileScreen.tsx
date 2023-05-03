import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Avatar, Box, Center, Heading, Text, Input, Button, Stack, FlatList, Pressable,} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';
import HomeScreenFooter from '../components/HomeScreenFooter';

const ProfileScreen = () => {
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.');
  const [isEditing, setIsEditing] = useState(false);
  const [friends, setFriends] = useState(100);
  const [followers, setFollowers] = useState(500);
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pancakes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
    { id: 2, title: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
    { id: 3, title: 'Burgers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
    { id: 4, title: 'Tacos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis risus arcu.' },
  ]);

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'Login'>
  >();


  const handleSaveDescription = () => {
    // Save the description to the server or database
    console.log('Saved description:', description);
    setIsEditing(false);
  };

  const handleEditDescription = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDescription(description);
    setIsEditing(false);
  };

  const handleViewRecipes = () => {
    navigation.navigate('Recipes');
  };

  return (
    <><Box flex={1} bg="white" alignItems="center" justifyContent="center" px={5}>
          <SafeAreaView style={{ flex: 1 }}>
              <Center>
                  <Avatar size="2xl" source={{ uri: 'https://picsum.photos/id/237/200/200' }} mt={2} />
                  <Heading size="lg" color="black" mt={2} mb={4}>
                      John Doe
                  </Heading>
              </Center>
              <Stack direction="row" space={2} alignItems="center" justifyContent="center" my={2}>
                  <Text fontSize="lg" color="black" textAlign="center">
                      Friends: {friends}
                  </Text>
                  <Text fontSize="lg" color="black" textAlign="center">
                      Followers: {followers}
                  </Text>
              </Stack>
              <Center>
                  <Box
                      bg="gray.100"
                      borderRadius={10}
                      px={4}
                      py={3}
                      shadow={3}
                      alignItems="center"
                      justifyContent="center"
                  >
                      {isEditing ? (
                          <Stack>
                              <Input
                                  variant="outline"
                                  size="lg"
                                  value={description}
                                  onChangeText={setDescription}
                                  placeholder="Enter your profile description"
                                  mt={2}
                                  mb={2}
                                  maxLength={500} />
                              <Stack direction="row" space={2}>
                                  <Button onPress={handleSaveDescription} colorScheme="blue">
                                      Save
                                  </Button>
                                  <Button onPress={handleCancelEdit} colorScheme="gray">
                                      Cancel
                                  </Button>
                              </Stack>
                          </Stack>
                      ) : (
                          <Stack>
                              <Text fontSize="xl" color="black" textAlign="center">
                                  {description}
                              </Text>
                              <Button onPress={handleEditDescription} colorScheme="blue" mt={2}>
                                  Edit
                              </Button>
                          </Stack>
                      )}
                  </Box>
              </Center>
              <Button onPress={handleViewRecipes} colorScheme="blue" mt={4}>
                  View All Recipes
              </Button>
          </SafeAreaView>
      </Box><HomeScreenFooter routeName='Profile' /></>
  );
};

export default ProfileScreen;