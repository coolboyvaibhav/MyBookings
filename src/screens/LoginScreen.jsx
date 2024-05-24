// import React from 'react'
// import { Text, View } from 'react-native'

// const LoginScreen = () => {
//   return (
//    <View><Text >Login Screen</Text></View>
//   )
// }


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here (e.g., authenticate with a server)
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear email and password after login attempt (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.logo} />
      <View style={styles.loginBox}>
        <Text style={styles.welcomeText}>Welcome back! 👋</Text>
        <Text style={styles.signInText}>Sign in to your account</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Your email"
          style={styles.textInput}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Light blue background color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 5,
    textAlign: 'center',
  },
  signInText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff', // White background for text inputs
  },
  button: {
    width: '100%',
    backgroundColor: '#6A5ACD', // Blue button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 14,
    color: '#000',
  },
  signupLink: {
    color: '#6A5ACD', // Blue link color
    fontWeight: 'bold',
  },
});

export default LoginScreen;
