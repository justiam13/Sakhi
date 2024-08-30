// ProfileDashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from './FirebaseConfig'; // Import the auth from firebaseConfig
import { signOut } from 'firebase/auth';

const ProfileDashboard = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigation.replace('SignIn'); // Redirect to SignIn if no user is signed in
      }
    });

    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully!');
      navigation.replace('SignIn');
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text style={styles.title}>Profile Dashboard</Text>
          <Text style={styles.profileText}>Email: {user.email}</Text>
          {/* Emergency Contacts Section */}
          <Text style={styles.sectionTitle}>Emergency Contacts:</Text>
          {/* List your emergency contacts here */}
          <Text style={styles.contactText}>Contact 1: +1234567890</Text>
          <Text style={styles.contactText}>Contact 2: +0987654321</Text>
          {/* Sign Out Button */}
          <Button title="Sign Out" onPress={handleSignOut} color="#e74c3c" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  profileText: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ProfileDashboard;
