import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Main from './navigators/Main';
import LoadExpoFont from './constants/LoadExpoFont';
import Login from './screens/auth/Login';

import { useFonts } from "expo-font";
import AuthStack from './navigators/AuthStack';

export default function App() {
  // LoadExpoFont();
  const [loaded] = useFonts({
    RobotoBold : require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular : require('./assets/fonts/Roboto-Regular.ttf'),
    LatoRegular : require('./assets/fonts/Lato-Regular.ttf'),
    LatoBold : require('./assets/fonts/Lato-Bold.ttf'),
  });
  
  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
