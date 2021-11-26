import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeStack from './HomeStack';
import LikedListStack from './LikedListStack';

import MyProfileStack from './MyProfileStack';
import { COLOURS } from '../constants/Theme';
import { HeaderBackground } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Main = props =>{

    return(
        <Tab.Navigator
        initialRouteName="HomeScreen"
      
        activeColor= {COLOURS.white}
        inactiveColor= {COLOURS.lightBlue}
        barStyle={{  backgroundColor: COLOURS.darkBlue}}
      >
         <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Liked"
        component={LikedListStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={30} />
          ),
        }}
      />
        <Tab.Screen
        name="My Profile"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default Main;