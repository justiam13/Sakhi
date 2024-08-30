// // UserLocation.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import * as Location from 'expo-location';
// import { auth, db } from './FirebaseConfig'; // Import the auth and db from FirebaseConfig
// import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

// const UserLocation = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let loc = await Location.getCurrentPositionAsync({});
//       setLocation(loc);
      
//       if (loc) {
//         storeLocationInFirebase(loc);
//       }
//     })();
//   }, []);

//   const storeLocationInFirebase = async (loc) => {
//     try {
//       const user = auth.currentUser;
//       if (user) {
//         await addDoc(collection(db, 'userLocations'), {
//           userId: user.uid,
//           latitude: loc.coords.latitude,
//           longitude: loc.coords.longitude,
//           timestamp: new Date(),
//         });
//         console.log('Location stored successfully!');
//       }
//     } catch (error) {
//       console.error('Error storing location:', error.message);
//     }
//   };

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title={isVisible ? "Hide Location" : "Show Location"}
//         onPress={() => setIsVisible(!isVisible)}
//       />
//       {isVisible && (
//         <Text style={styles.locationText}>{location ? text : "Getting location..."}</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
//   locationText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default UserLocation;
// UserLocation.js
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import MapScreen from './MapScreen';

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? "Hide Location" : "Show Location"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && location && (
        <MapScreen
          latitude={location.coords.latitude}
          longitude={location.coords.longitude}
        />
      )}
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
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
  errorText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default UserLocation;