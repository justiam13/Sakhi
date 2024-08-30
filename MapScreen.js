// MapScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

// Set the Mapbox access token
MapboxGL.setAccessToken('pk.eyJ1Ijoic3VzaG1hMTIwOSIsImEiOiJjbTBkYmZjNTMwYjFpMmpzZ2kzdTBod3J1In0.LTlFWZ3cyKxmb1HS7mMNvw');

const MapScreen = ({ latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} logoEnabled={false}>
        <MapboxGL.Camera
          zoomLevel={14}
          centerCoordinate={[longitude, latitude]}
        />
        <MapboxGL.PointAnnotation coordinate={[longitude, latitude]} />
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;