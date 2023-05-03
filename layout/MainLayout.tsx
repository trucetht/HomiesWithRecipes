import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHeaderProps } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigator';
import HomeScreen from '../screens/HomeScreen';
import GroupsScreen from '../screens/GroupsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreenFooter from '../components/HomeScreenFooter';

type MainLayoutProps = StackHeaderProps & {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <HomeScreenFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export { MainLayout, HomeScreen, GroupsScreen, ProfileScreen };
