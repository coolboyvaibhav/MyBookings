import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Sample booking data (you can replace this with actual data)
const bookings = [
  {
    id: '1',
    title: 'Quantum Physics Theory Discussion',
    time: '07:45 am to 10:45 am',
    date: '11 May 2024',
    roomNumber: 'Room No. 213',
  },
  // Add more booking entries here
];

function MyBookings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text>{item.title}</Text>
            <Text>{item.time}</Text>
            <Text>{item.date}</Text>
            <Text>{item.roomNumber}</Text>
          </View>
        )}
      />
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
  bookingItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
  },
});

export default MyBookings;
