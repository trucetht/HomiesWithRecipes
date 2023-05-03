import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecipesScreen from './screens/RecipesScreen';
import HomeScreenFooter from './components/HomeScreenFooter';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Groups: undefined;
  Profile: undefined;
  Recipes: undefined;
};

const AuthenticatedStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const AuthenticatedNavigator = () => (
    <AuthenticatedStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticatedStack.Screen name="Login" component={LoginScreen} />
      <AuthenticatedStack.Screen name="Signup" component={SignupScreen} />
      <AuthenticatedStack.Screen name="Home" component={HomeScreen} />
      <AuthenticatedStack.Screen name="Groups" component={GroupsScreen} />
      <AuthenticatedStack.Screen name="Profile" component={ProfileScreen} />
      <AuthenticatedStack.Screen name="Recipes" component={RecipesScreen} />
    </AuthenticatedStack.Navigator>
  );

  return (
    <>
      <AuthenticatedNavigator />
    </>
  );
};

export default AppNavigator;
