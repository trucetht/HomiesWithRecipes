import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';

type HomeScreenFooterProps = {
  routeName: string;
};

const HomeScreenFooter: React.FC<HomeScreenFooterProps> = ({ routeName }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  if (routeName === 'Login' || routeName === 'Signup') {
    return null;
  }

  return (
    <HStack bg="white" alignItems="center" justifyContent="space-around" px={2} py={3}>
      <IconButton
        variant="unstyled"
        onPress={() => navigation.navigate('Home')}
        icon={<Icon as={MaterialIcons} name="home" color="black" size="sm" />}
        aria-label="Home"
      />
      <IconButton
        variant="unstyled"
        onPress={() => navigation.navigate('Groups')}
        icon={<Icon as={MaterialIcons} name="people" color="black" size="sm" />}
        aria-label="Groups"
      />
      <IconButton
        variant="unstyled"
        onPress={() => navigation.navigate('Profile')}
        icon={<Icon as={MaterialIcons} name="person" color="black" size="sm" />}
        aria-label="Profile"
      />
    </HStack>
  );
};

export default HomeScreenFooter;
