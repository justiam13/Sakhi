import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const PermissionsScreen = ({ navigation }) => {
  const [locationStatus, setLocationStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      setLocationStatus(status);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissions</Text>
      <Text style={styles.info}>
        {locationStatus === 'granted'
          ? 'Location permission granted'
          : 'Location permission not granted'}
      </Text>
      <Button title="Go to Location Screen" onPress={() => navigation.navigate('Location')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default PermissionsScreen;