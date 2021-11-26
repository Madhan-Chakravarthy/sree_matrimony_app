
import React from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnBoardingScreen';
import Login from '../screens/auth/Login';
import SignupScreen from '../screens/auth/Register';
import { useEffect } from 'react/cjs/react.development';

const Stack = createStackNavigator();

const AuthStack = () => {
  const[isFirstLaunch,setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    });  
  }, []);

  if(isFirstLaunch==null){
    return null;
  }else if(isFirstLaunch == true){
    routeName='OnboardingScreen';
  }else{
    routeName='LoginScreen';
  }
     
     return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{header: () => null}}
            />
             <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={({navigation}) => ({
              title: '',
              headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
              },
              headerLeft: () => (
              <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
             ),
            })}
          />
        </Stack.Navigator>
  );
  }


export default AuthStack;
