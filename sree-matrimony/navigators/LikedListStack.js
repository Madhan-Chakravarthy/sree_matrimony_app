import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LikedList from '../screens/LikedList';


const Stack = createStackNavigator();

function MyStack() {
    return(<Stack.Navigator>
        <Stack.Screen 
                name='LikedList'
                component={LikedList}
                options={{
                    headerShown: false,
                }}
            />

    </Stack.Navigator>
    )
}


export default function LikedListStack() {
    return <MyStack />;
}