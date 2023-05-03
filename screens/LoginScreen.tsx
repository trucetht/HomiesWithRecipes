import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  FormControl,
  HStack,
  Text,
} from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { RootStackParamList } from '../AppNavigator';
import HomeScreenFooter from '../components/HomeScreenFooter';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', email, password);
  };

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList, 'Login'>
  >();

  const handleSignUp = () => {
    navigation.navigate('Home');
  };

  return (
    <><SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Box flex={1} p={4} justifyContent="center">
              <VStack space={4}>
                  <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                      Welcome!
                  </Text>
                  <FormControl>
                      <FormControl.Label>Email</FormControl.Label>
                      <Input
                          value={email}
                          onChangeText={setEmail}
                          autoCapitalize="none"
                          keyboardType="email-address"
                          autoComplete="email" />
                  </FormControl>
                  <FormControl>
                      <FormControl.Label>Password</FormControl.Label>
                      <Input
                          value={password}
                          onChangeText={setPassword}
                          secureTextEntry
                          autoComplete="password" />
                  </FormControl>
                  <Button onPress={handleLogin} mt={4}>
                      Login
                  </Button>
                  <HStack justifyContent="center" mt={4}>

                      <Text>
                          Don&apos;t have an account?</Text>
                      <Text
                          color="primary.500"
                          fontWeight="bold"
                          ml={1}
                          onPress={handleSignUp} // call handleSignUp on button press
                      >
                          Sign up
                      </Text>
                  </HStack>
              </VStack>
          </Box>
      </SafeAreaView><HomeScreenFooter routeName='Login' /></>
  );
};

export default LoginScreen;
