import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function BookingRoom() {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>9:41</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Book Room</Text>
          <Text>My Bookings</Text>
          <Text>My Profile</Text>
        </View>
      </View>

      <TextInput placeholder="Meeting Title" />
      <TextInput placeholder="Meeting Room No." />
      
      {/* Date picker component would go here */}
      
      {/* Time picker component would go here */}
      
      <TextInput placeholder="Description" />

      {/* Logo component or image would go here */}

      {/* Book room button would go here */}
    </View>
  );
}

export default BookingRoom;
