// CameraPermissionScreen.js
// CameraPermissionScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';

const CameraPermissionScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (hasPermission === true) {
      // Navigate to the next screen if permission is granted
      navigation.navigate('Home');
    }
  }, [hasPermission, navigation]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <Text>Camera access granted!</Text>
      {/* You can display the Camera component or navigate to another screen here */}
    </View>
  );
};

export default CameraPermissionScreen;
