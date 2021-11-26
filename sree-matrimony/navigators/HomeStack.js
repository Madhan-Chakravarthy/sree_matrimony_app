import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import ViewProfile from '../screens/ViewProfile';
import { COLOURS } from '../constants/Theme';


const Stack = createStackNavigator();

function MyStack() {
    return(<Stack.Navigator>
        <Stack.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false,
                   cardStyle:{backgroundColor:COLOURS.lightBlue}
                }}

         />
        <Stack.Screen 
                name='ViewProfile'
                component={ViewProfile}
                options={{
                    headerShown: false,
                  cardStyle:{backgroundColor:COLOURS.lightBlue}
                }}
            />

    </Stack.Navigator>
    )
}


export default function NavigatorStack() {
    return <MyStack />;
}