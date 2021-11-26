import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyProfile from '../screens/MyProfile';


const Stack = createStackNavigator();

function MyStack() {
    return(<Stack.Navigator>
        <Stack.Screen 
                name='MyProfile'
                component={MyProfile}
                options={{
                    headerShown: false,
                }}
            />

    </Stack.Navigator>
    )
}


export default function MyProfileStack() {
    return <MyStack />;
}