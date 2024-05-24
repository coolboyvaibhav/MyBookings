import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function MyProfile() {
  const [firstName, setFirstName] = useState('Poonima');
  const [lastName, setLastName] = useState('Shetty');
  const [email, setEmail] = useState('poonimashetty@gmail.com');
  const [contactNo, setContactNo] = useState('9876543210');

  // Function to handle changes when editing profile
  const handleEditChanges = () => {
    // Implement logic to save changes to backend or local storage
    // For now, we'll just log the updated values
    console.log('Updated profile:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Contact No.:', contactNo);
  };

  // Placeholder for logout functionality
  const handleLogout = () => {
    // Implement logout logic
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact No."
        value={contactNo}
        onChangeText={(text) => setContactNo(text)}
      />
      <Button title="EDIT CHANGES" onPress={handleEditChanges} />
      <Button title="LOGOUT" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default MyProfile;
