import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AuthScreen = ({ navigation }) => {
  const [infoVisible, setInfoVisible] = useState(false);

  const handleInfoPress = () => {
    setInfoVisible(!infoVisible);
  };

  const handleNavigation = (screen) => {
    console.log(`Navigating to ${screen}`);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME TO</Text>
      <Text style={styles.appName}>SAKHI</Text>
      <TouchableOpacity onPress={handleInfoPress} style={styles.infoButton}>
        <Ionicons name="information-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.authContainer}>
        <Button title="Sign Up" onPress={() => handleNavigation('SignUp')} />
        <Button title="Sign In" onPress={() => handleNavigation('SignIn')} />
      </View>
      <Modal
        transparent={true}
        visible={infoVisible}
        onRequestClose={() => setInfoVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button title="Close" onPress={() => setInfoVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3498db',
    marginVertical: 20,
  },
  infoButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default AuthScreen;
