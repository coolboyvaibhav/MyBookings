import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here (e.g., register with a server)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
    console.log('Password:', password);
    // Clear fields after sign-up attempt (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setContactNumber('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.logo} />
      <View style={styles.signUpBox}>
        <Text style={styles.welcomeText}>Hi there! 👋</Text>
        <Text style={styles.signUpText}>Sign Up</Text>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          style={styles.textInput}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          style={styles.textInput}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Your email"
          style={styles.textInput}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={contactNumber}
          onChangeText={setContactNumber}
          placeholder="Contact Number"
          style={styles.textInput}
          keyboardType="phone-pad"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
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
  signUpBox: {
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
  signUpText: {
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
});

export default SignUpScreen;
