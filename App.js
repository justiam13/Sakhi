// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './SplashScreen';
// import AuthScreen from './AuthScreen';
// import SignUpScreen from './SignUpScreen';
// import SignInScreen from './SignInScreen';
// // import ProfileDashboard from './ProfileDashboard'; // Adjust import if necessary
// import PermissionsScreen from './PermissionsScreen';
// import LocationScreen from './LocationScreen';  // Ensure this is correctly imported

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Auth" component={AuthScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="Permissions" component={PermissionsScreen} />
//         <Stack.Screen name="Location" component={LocationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import MapboxGL from '@react-native-mapbox-gl/maps';

// // Set the Mapbox access token
// MapboxGL.setAccessToken('pk.eyJ1Ijoic3VzaG1hMTIwOSIsImEiOiJjbTBkYmZjNTMwYjFpMmpzZ2kzdTBod3J1In0.LTlFWZ3cyKxmb1HS7mMNvw');

// // Other imports
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './SplashScreen';
// import AuthScreen from './AuthScreen';
// import SignUpScreen from './SignUpScreen';
// import SignInScreen from './SignInScreen';
// import ProfileDashboard from './profileDashboard';
// import PermissionsScreen from './PermissionsScreen';
// import UserLocation from './UserLocation';
// import MapScreen from './MapScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Auth" component={AuthScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="Permissions" component={PermissionsScreen} />
//         <Stack.Screen name="Location" component={UserLocation} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import AuthScreen from './AuthScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import PermissionsScreen from './PermissionsScreen';
import LocationScreen from './LocationScreen';
import FaceEmotionDetection from './FaceEmotionDetection'; // Import the new component
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CameraPermissionScreen from './CameraPermissionScreen'; // Import new screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="FaceEmotionDetection" component={FaceEmotionDetection} /> Add this screen
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="CameraPermission" component={CameraPermissionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
