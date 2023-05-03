// src/SignupScreen.tsx

import React, {useState} from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  FormControl,
  HStack,
  Text,
} from 'native-base';
import {SafeAreaView} from 'react-native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup:', username, email, password, confirmPassword);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Box flex={1} p={4} justifyContent="center">
        <VStack space={4}>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Sign Up
          </Text>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoComplete="password"
            />
          </FormControl>
          <Button onPress={handleSignup} mt={4}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default SignupScreen;
